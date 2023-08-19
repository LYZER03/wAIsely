"use client";

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { ImageIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

type Props = {}

const ImageGenCard = (props: Props) => {
    const router = useRouter();
    return (
        <Card 
            className='hover:cursor-pointer hover:opacity-75'
            onClick={() =>{
                router.push('/image');
            }}
            >
            <CardHeader className= 'flex flex-row items-center justify-between pb-2 space-y-0'>
                <CardTitle className='text-2xl font-bold'>Design alongside me!</CardTitle>
                <ImageIcon color="pink" size={28} strokeWidth={2.5}/>
            </CardHeader>
            <CardContent>
                <p className='text-2sm text-muted-foreground'>
                    Produce high-quality images using the most intelligent AI!
                </p>
            </CardContent>
        </Card>

    )
}

export default ImageGenCard