import React from 'react'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar';
import { getApiLimitCount } from '@/lib/api-limit';
import { getAuthSession } from '@/lib/nextauth';
import  { redirect } from 'next/navigation'
import { checkSubscription } from '@/lib/subscription';


const DashboardLayout = async ({
    children
}: {
    children : React.ReactNode
}) => {
  
  const session = await getAuthSession()
  const isPro = await checkSubscription() as boolean;
  if(!session?.user){
    return redirect('/');
  }
  const apiLimitCount = await getApiLimitCount();
  return (
    <div className='h-full relative'>

      <div className='
        hidden h-full
        md:flex
        md:w-72
        md:flex-col
        md:fixed
        md:inset-y-0
        z-[50]
        bg-gray-900
      '>
        <Sidebar isPro={isPro} apiLimitCount = {apiLimitCount}/>
      </div>
      <main className='md:pl-72'>
        <Navbar/>
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout