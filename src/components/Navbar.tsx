import { getAuthSession } from '@/lib/nextauth';
import React from 'react'
import SignInButton from './SignInButton';
import UserAccountNav from './UserAccountNav';
import MobileSidebar from '@/components/mobile-sidebar';
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const Navbar = async() => {
    const apiLimitCount = await getApiLimitCount();
    const isPro = await checkSubscription() as boolean;
    const session = await getAuthSession();
    console.log(session?.user);
    return(

        <div className='fixed inset-x-0 top-0 bg-white z-[10] h-fit py-6 '>
            <div className='flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl'>
                {/* Logo */}
                <div className='flex items-center p-4'>
                    <MobileSidebar apiLimitCount={apiLimitCount} isPro={isPro}/>
                </div>

                <div className='flex items-center'>
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