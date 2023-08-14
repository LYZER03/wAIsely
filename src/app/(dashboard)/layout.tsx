import React from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar';
import { LandingNavbar } from '@/components/landing-navbar';

const DashboardLayout = ({
    children
}: {
    children : React.ReactNode
}) => {
  return (
    <div className='h-full relative'>

      <div className='
        hidden h-full
        md:flex
        md:w-72
        md:flex-col
        md:fixed
        md:inset-y-0
        z-[80]
        bg-gray-900
      '>
        <Sidebar/>
      </div>
      <main className='md:pl-72'>
        <Navbar/>
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout