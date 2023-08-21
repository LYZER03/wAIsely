"use client";


import React from 'react'
import { User } from 'next-auth'
import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger,DropdownMenuItem } from '@/components/ui/dropdown-menu';
import UserAvatar from "./UserAvatar";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { LogOut } from 'lucide-react';


type Props = {
    user : Pick <User, "name" | "image" | "email">;
};

const UserAccountNav = ({ user }: Props) => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger>
            {/* user avatar */}
            <UserAvatar user = {user}/>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='bg-white' align="end">
            <div className='flex items-center justify-start gap-2 p-2'>
                <div className='flex flex-col space-y-1 leading-none'>
                    {user.name && <p className='font-medium text-zinc-700'>{user.name}</p>}
                    {user.email && (<p className='w-[200px] truncate text-sm  text-zinc-700'>{user.email}</p>)}
                </div>
            </div>

            <DropdownMenuSeparator/>
            <DropdownMenuItem asChild>
                <Link href="/settings" className='text-zinc-700'>Settings</Link>
            </DropdownMenuItem>

            <DropdownMenuSeparator/>
            <DropdownMenuItem 
                onClick={(e)=>{
                    e.preventDefault()
                    signOut().catch(console.error)
                }}
                className='text-red-600 cursor-pointer'

            >
                Sign Out
                <LogOut className='w-4 h-4 ml-2'/>
            </DropdownMenuItem>

        </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav