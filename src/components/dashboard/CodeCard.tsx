"use client";

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Code } from 'lucide-react'
import { useRouter } from 'next/navigation'

type Props = {}

const CodeCard = (props: Props) => {
    const router = useRouter();
    return (
        <Card 
            className='hover:cursor-pointer hover:opacity-75'
            onClick={() =>{
                router.push('');
            }}
            >
            <CardHeader className= 'flex flex-row items-center justify-between pb-2 space-y-0'>
                <CardTitle className='text-2xl font-bold'> Code with me!</CardTitle>
                <Code color="orange" size={28} strokeWidth={2.5}/>
            </CardHeader>
            <CardContent>
                <p className='text-2sm text-muted-foreground'>
                    COMMING SOON
                </p>
            </CardContent>
        </Card>

    )
}

export default CodeCard