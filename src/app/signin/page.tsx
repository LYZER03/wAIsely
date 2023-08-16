"use client";

import React from 'react';;
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Image from 'next/image';

import { Typewriter } from 'react-simple-typewriter';

export default function SignInPage() {
  return (
    <div className=' bg-black'>
      <div className="flex w-screen flex-col supports-[min-height:100dvh]:min-h-[100dvh] md:grid md:grid-cols-2 lg:grid-cols-[60%_40%]">
        <div className="relative flex flex-1 flex-col justify-center px-5 pt-8 text-[#FE7600] dark:text-[#D292FF] md:px-6 md:py-[22px] lg:px-8">
          <nav className="absolute left-0 top-8 flex w-full px-6 md:top-[22px] md:px-6 lg:px-8">
            <h1 aria-label='wAIsely'>
              <div className="flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]">
                <div>
                  w<span className='text-white'>AI</span>sely
                  <span className="font-circle">●</span>
                </div>
              </div>
            </h1>
          </nav>
          <div className='flex-col text-[32px] leading-[1.2] md:flex md:text-[40px]'>
            <h1>
              {'<'}Life is simple{' '}
              <span style={{ color: 'red', fontWeight: 'bold' }}>
                <Typewriter
                  words={['Eat/>', 'Sleep ( ◡́.◡̀)/>', 'Code/>', 'Learn ✍(◔◡◔)/>','Stylish (>‿◠)✌/>','Playful (^◡^ )/>', 'Repeat!/>']}
                  loop={Infinity}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h1>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-center rounded-t-[30px] bg-white px-5 py-8 text-black dark:bg-black dark:text-white md:rounded-none md:px-6">
          <h2 className="text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-[1.25]">Get started</h2>
          <div className="mt-5 w-full max-w-[440px]">
            <div className="grid grid-cols-2 gap-x-3">
              <Button className="relative flex h-12 items-center justify-center rounded-md text-center text-base font-medium bg-[#3C46FF] text-[#fff] hover:bg-[#0000FF]">
                <Link href="/welcomeback" className="relative -top-[1px]">
                  Log in
                </Link>
              </Button>
              <Button className="relative flex h-12 items-center justify-center rounded-md text-center text-base font-medium bg-[#3C46FF] text-[#fff] hover:bg-[#0000FF]">
                <Link href="/signup" className="relative -top-[1px]">
                  Sign up
                </Link>
              </Button>
            </div>
          </div>
          <div className='mt-10 flex flex-col justify-center md:absolute md:bottom-4 md:left-1/2 md:mt-0 md:-translate-x-1/2'>
            <div className='flex justify-center text-[#cdcdcd] md:mb-3'>
              <Image                        
                  height={64}
                  width={64}
                  alt="Logo" 
                  src="/Logo.png"
              />
              <span className="flex items-center justify-center text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400" >HAJY</span>
            </div>
            
            <div className='py-3 text-xs'>
              <Link href="/terms" className="underline-offset-4 hover:text-primary">Terms of Service</Link>
              {" "}<span className='text-gray-600'>|</span> {" "}
              <Link href="/privacy" className="underline-offset-4 hover:text-primary">Privacy Policy</Link>.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}