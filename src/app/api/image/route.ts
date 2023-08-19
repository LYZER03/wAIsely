import { getAuthSession } from '@/lib/nextauth';
import { NextResponse } from 'next/server';
import Replicate from "replicate";

import { increaseApiLimit, checkApiLimit } from '@/lib/api-limit';
import { checkSubscription } from '@/lib/subscription';

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_KEY!
});

export async function POST(
    req: Request
) {
    try {
        const session = await getAuthSession()
        const body = await req.json();
        const { prompt } = body;

        if(!session?.user){
            return new NextResponse("Unauthorized", { status: 401});
        }
    
        if (!prompt){
            return new NextResponse("prompt is required", {status: 400});
        }

        const freeTrial = await checkApiLimit();
        const isPro = await checkSubscription();

        if (!freeTrial && !isPro){
            return new NextResponse("Free trial has expired.", { status : 403});
        }

        const response = await replicate.run(
            "stability-ai/sdxl:a00d0b7dcbb9c3fbb34ba87d2d5b46c56969c84a628bf778a7fdaec30b1b99c5",
            {
              input: {
                prompt: prompt
              }
            }
          );
          
        if(!isPro){
            await increaseApiLimit();
        }


        return NextResponse.json(response);
    } catch (error){
        console.log("[VIDEO_ERROR]",error);
        return new NextResponse("Internal error", {status:500});
    }
}