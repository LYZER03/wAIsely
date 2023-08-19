"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { Code, ImageIcon, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { FreeCounter } from "@/components/free-counter";

const montserrat = Montserrat({
    weight:"600", 
    subsets:["latin"]
});

const routes = [
    {
        label:"Dashboard",
        icon: LayoutDashboard,
        href:"/dashboard",
        color: "text-sky-500",
    },
    {
        label:"Conversation",
        icon: MessageSquare,
        href:"",
        color: "text-violet-500",
    },
    {
        label:"Image Generation",
        icon: ImageIcon,
        href:"/image",
        color: "text-pink-700",
    },
    {
        label:"Video Generation",
        icon: VideoIcon,
        href:"/video",
        color: "text-orange-700",
    },
    {
        label:"Music Generation",
        icon: Music,
        href:"/music",
        color: "text-emerald-500",
    },
    {
        label:"Code Generation",
        icon: Code,
        href:"",
        color: "text-green-700",
    },
    {
        label:"Settings",
        icon: Settings,
        href:"/settings",
    },
];

interface SidebarProps {
    apiLimitCount: number;
    isPro: boolean;
};

const Sidebar = ({ 
    apiLimitCount = 0, 
    isPro = false ,
}: SidebarProps) => {
    const pathname = usePathname();
    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-white border-2 border-r-black/20 dark:bg-black/20" >
            <div className="px-10 py-0 flex-1">
            <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                    <div className="relative w-14 h-14 mr-0">
                        <Image fill alt="Logo" src="/Logo.png"/>
                    </div>
                    <h1 className={cn('text-2xl font-bold', montserrat.className)}>
                        w<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">AI</span>sely
                    </h1>
                </Link>
                <div className="space-y-1">
                    {routes.map((route)=>(
                        <Link 
                            href={route.href} 
                            key={route.href}
                            className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-gray-800 rounded-lg transition dark:hover:text-black dark:hover:bg-white", pathname === route.href ? "text-white bg-gray-900 dark:bg-white dark:text-black" : "text-black dark:text-white")}
                        >
                            <div className="flex items-center flex-1">
                                <route.icon className={cn("h-5 w-5 mr-3", route.color)}/>
                                {route.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <FreeCounter
                apiLimitCount={apiLimitCount}
                isPro={isPro}
            />
        </div>
    )
}

export default Sidebar