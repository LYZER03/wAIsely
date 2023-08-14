import { Configuration, OpenAIApi } from 'openai';
import { getAuthSession } from '@/lib/nextauth';
import { NextResponse } from 'next/server';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const opanai = new OpenAIApi(configuration);

export async function POST(
    req: Request
) {
    try {
        const session = await getAuthSession()
        const body = await req.json();
        const { messages } = body;

        if(!session?.user){
            return new NextResponse("Unauthorized", { status: 401});
        }

        if (!configuration.apiKey) {
            return new NextResponse("OpenAI API Key not cofigured", { status : 500});
        }
        
        if (!messages){
            return new NextResponse("Message are required", {status: 400});
        }

        const response = await opanai.createChatCompletion({
            model: "gtp-3.5-turbo",
            messages
        });

        return NextResponse.json(response.data.choices[0].message)

    } catch (error){
        console.log("[CONVERSATION_ERROR]",error);
        return new NextResponse("Internal error", {status:500});
    }
}