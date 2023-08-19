import { getAuthSession } from "@/lib/nextauth";
import { prisma } from "@/lib/db";

const DAY_IN_MS = 86_400_000;

export const checkSubscription = async () => {
    const session =  await getAuthSession();

    if (!session?.user){
        return;
    }

    const userSubscription = await prisma.userSubscription.findUnique({
        where: {
            userId: session.user.id
        },
        select:{
            stripeSubscriptionId: true,
            stripeCurrentPeriodEnd: true,
            stripeCustomerId: true,
            stripePriceId: true,
        },
    });

    if (!userSubscription){
        return false;
    }    

    const isValid = userSubscription.stripePriceId && userSubscription.stripeCurrentPeriodEnd?.getTime()! + DAY_IN_MS > Date.now();

    return !!isValid;
};