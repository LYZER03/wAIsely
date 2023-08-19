
import CodeCard from '@/components/dashboard/CodeCard';
import ConversationCard from '@/components/dashboard/ConversationCard';
import ImageGenCard from '@/components/dashboard/ImageGenCard';
import MusicCard from '@/components/dashboard/MusicCard';
import VideoCard from '@/components/dashboard/VideoCard';

import { getAuthSession } from '@/lib/nextauth';
import  { redirect } from 'next/navigation'
import React from 'react';


type Props ={}

export const metadata = {
  title: "Dashboard | wAIsely"
}

const DashboardPage = async (props: Props) => {
  const session = await getAuthSession()
  if(!session?.user){
    return redirect('/');
  }
  return (
    <main className='p-6 mx-auto max-w-7xl py-32'>
      <div className='flex items-center'>
        <h2 className='text-2xl md:text-4xl font-bold'>
          The power of <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">AI</span> will help you improve your content.
          <p className="text-2xl md:text-4xl font-bold">
            Embark on a journey with the robust <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">AI</span> tool.
          </p>
        </h2>
      </div>

      <div className='grid gap-4 mt-4 md:grid-cols-2'>
        <ConversationCard/>
        <ImageGenCard/>
        <VideoCard/>
        <MusicCard/>
        <CodeCard/>
      </div>
    </main>

  )
}
export default DashboardPage;