"use client";

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useProModal } from "../../hook/use-pro-modal";
import { Badge } from "./ui/badge";
import { Check, Code, ImageIcon, MessageSquare, Music, VideoIcon, Zap } from "lucide-react";
import { Card } from "./ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";

const routes = [
    {
        label:"Conversation",
        icon: MessageSquare,
        color: "violet",
        bgColor:"bg-violet-500/50",
    },
    {
        label:"Image Generation",
        icon: ImageIcon,
        color: "pink",
        bgColor: "bg-pink-700/50",
    },
    {
        label:"Video Generation",
        icon: VideoIcon,
        color: "orange",
        bgColor:"bg-orange-700/50",
    },
    {
        label:"Music Generation",
        icon: Music,
        color: "emerald",
        bgColor: "bg-emerald-500/50",
    },
    {
        label:"Code Generation",
        icon: Code,
        color: "green",
        bgColor: "bg-green-700/50",
    }
];


export const ProModal = () => {
    const proModal = useProModal();
    const [loading, setLoading] = useState(false);

    const onSubscribe = async () => {
        try {
            setLoading(true);
            const response = await axios.get("/api/stripe");
            window.location.href = response.data.url;
        }catch (error){
            toast.error("Something went wrong")
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2 ">
                            <div className="flex space-x-4 items-center fap-x-2 font-bold py-1">
                                Upgrade to w<span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">AI</span>sely
                                <Badge className="uppercase bg-gradient-to-r to-emerald-600 from-sky-400 text-sm py-1">
                                    pro
                                </Badge>
                            </div>
                        </DialogTitle>
                        <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
                            {routes.map((tool) =>(
                                <Card
                                    key={tool.label}
                                    className="p-3 border-black flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-x-4">
                                        <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                                            <tool.icon className={cn("w-6 h-6", tool.color)}/>
                                        </div>
                                        <div className="font-semibold text-sm">
                                            {tool.label}
                                        </div>
                                    </div>
                                    <Check className="text-primary w-5 h-5"/>
                                </Card>
                            ))}
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button disabled={loading} onClick={onSubscribe} size="lg" className="w-full">
                            Upgrade
                            <Zap className="w-4 h-4 ml-2 fill-white"/>
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}