import { getAuthSession } from '@/lib/nextauth';
import { NextResponse} from "next/server";

import { prisma } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { absoluteUrl } from '@/lib/utils';




const settingsUrl = absoluteUrl("/settings");


export async function GET () {
    try {
        const session = await getAuthSession();
        if(!session?.user){
            return new NextResponse("Unauthorized", {status : 401});
        }
    
        const userSubscription = await prisma.userSubscription.findUnique({
            where:{
                userId : session.user.id
            }
        });

        if (userSubscription && userSubscription.stripeCustomerId){
            const stripeSession = await stripe.billingPortal.sessions.create({
                customer: userSubscription.stripeCustomerId,
                return_url: settingsUrl,
            });

            return new NextResponse(JSON.stringify({ url: stripeSession.url }));
        }

        const stripeSession = await stripe.checkout.sessions.create({
            success_url: settingsUrl,
            cancel_url:  settingsUrl,
            payment_method_types: ["card"],
            mode: "subscription",
            billing_address_collection: "auto",
            line_items:[
                {
                    price_data:{
                        currency: "EUR",
                        product_data:{
                            name: "wAIsely Pro",
                            description: "Unlimited AI Generations",
                        },
                        
                        unit_amount: 2000,
                        recurring: {
                            interval: "month"
                        }
                    },
                    quantity: 1,
                }
            ],
            metadata: {
                userId : session.user.id,
            },
        })
        return new NextResponse(JSON.stringify({url: stripeSession.url }));

    } catch (error) {
        console.log("[STRIPE_ERROR]",error);
        return new NextResponse("Internal error", {status : 500});
    }
}

