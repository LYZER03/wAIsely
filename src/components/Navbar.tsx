import { authOptions, getAuthSession } from '@/lib/nextauth';
import Link from "next/link"
import React from 'react'
import SignInButton from './SignInButton';
import UserAccountNav from './UserAccountNav';
import { ThemeToggle } from './ThemeToggle';
import { Menu } from "lucide-react";
import { Button } from './ui/button';
import MobileSidebar from '@/components/mobile-sidebar';

const Navbar = async() => {
    const session = await getAuthSession();
    console.log(session?.user);
    return(

        <div className='fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit py-6 '>
            <div className='flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl'>
                {/* Logo */}
                <div className='flex items-center p-4'>
                    <MobileSidebar/>
                </div>

                <div className='flex items-center'>
                    <ThemeToggle className='mr-3'/>
                    <div className='flex w-full justify-end'>
                        {session?.user ? (
                            <UserAccountNav user={session.user} />
                        ) : (
                            <SignInButton/>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar