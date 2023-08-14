"use client";

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Music } from 'lucide-react'
import { useRouter } from 'next/navigation'

type Props = {}

const MusicCard = (props: Props) => {
    const router = useRouter();
    return (
        <Card 
            className='hover:cursor-pointer hover:opacity-75'
            onClick={() =>{
                router.push('/music');
            }}
            >
            <CardHeader className= 'flex flex-row items-center justify-between pb-2 space-y-0'>
                <CardTitle className='text-2xl font-bold'> Make music with me!</CardTitle>
                <Music color="green" size={28} strokeWidth={2.5}/>
            </CardHeader>
            <CardContent>
                <p className='text-2sm text-muted-foreground'>
                    
                </p>
            </CardContent>
        </Card>

    )
}

export default MusicCard