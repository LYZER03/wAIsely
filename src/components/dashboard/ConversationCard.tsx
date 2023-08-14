"use client";

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { MessageSquare } from 'lucide-react'
import { useRouter } from 'next/navigation'

type Props = {}

const ConversationCard = (props: Props) => {
    const router = useRouter();
    return (
        <Card 
            className='hover:cursor-pointer hover:opacity-75'
            onClick={() =>{
                router.push('/conversation');
            }}
            >
            <CardHeader className= 'flex flex-row items-center justify-between pb-2 space-y-0'>
                <CardTitle className='text-2xl font-bold'> Chat with me!</CardTitle>
                <MessageSquare color="violet" size={28} strokeWidth={2.5}/>
            </CardHeader>
            <CardContent>
                <p className='text-2sm text-muted-foreground'>
                    Converse with the smartest AI!
                </p>
                <p className='flex items-center space-x-1 font-bold text-red-500'>Under maintenance</p>
            </CardContent>
        </Card>

    )
}

export default ConversationCard