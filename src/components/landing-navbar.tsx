"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Montserrat({
    weight: "600",
    subsets: ["latin"]
})

export const LandingNavbar = () => {
    return(
        <nav className=" p-4 bg-transparent flex items-center justify-between">
            <Link href="/" className="flex items-center">
                <div className="relative h-20 w-20 mr-0">
                    <Image                        
                        fill 
                        alt="Logo" 
                        src="/Logo.png"
                    />
                </div>
                <h1 className={cn("text-2xl font-bold to-emerald-600", font.className)}>
                    w<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">AI</span>sely
                </h1>
            </Link>
        </nav>
    )
}