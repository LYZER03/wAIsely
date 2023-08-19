"use client";

import axios from 'axios';
import * as z from "zod";
import { Download, ImageIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"

import Heading from "@/components/Heading";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

import { formSchema } from "./constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Empty from '@/components/empty';
import { Loader } from '@/components/loader';
import Image from 'next/image';
import { Card, CardFooter } from '@/components/ui/card';
import { useProModal } from '../../../../../hook/use-pro-modal';
import { toast } from 'react-hot-toast';

const VideoPage = () => {

    const proModal = useProModal();
    const router = useRouter();
    const [image, setImage] = useState<string>();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt:""
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try{
            setImage(undefined);
            const response = await axios.post("/api/image", values);
            setImage(response.data[0]);
            form.reset();
        } catch(error: any) {
            if(error?.response?.status === 403){
                proModal.onOpen();
            }else{
                toast.error("Something went wrong");
            }
        } finally {
            router.refresh();
        }
    };
    return (
        <div className='p-6 mx-auto max-w-7xl py-32'> 
            <Heading
                title="Image Generation"
                description="turn your prompt into image"
                icon={ImageIcon}
                iconColor="text-pink-700"
                bgColor="bg-pink-700/10"
            />
            <div className="px-4 lg:px-8">
                <div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="
                                rounded-lg
                                border
                                w-full
                                p-4
                                px-3
                                md:px-6
                                focus-within:shadow-sm
                                grid
                                grid-cols-12
                                gap-2
                            "
                        >
                            <FormField
                                name="prompt"
                                render={({ field }) =>(
                                    <FormItem className="col-span-12 lg:col-span-10">
                                        <FormControl className="m-0 p-0">
                                            <Input
                                                className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                                                disabled={isLoading}
                                                placeholder="A studio portrait of an iguana wearing a hat" {...field}
                              
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button className="col-span-12 lg:col-span-2 w-ful " disabled={isLoading}>
                                Generate
                            </Button>
                        </form>
                    </Form>
                </div>
                <div className='space-y-4 mt-4'>
                    {isLoading && (
                        <div className='p-8 rounded-lg w-full flex items-center justify-center bg-muted'>
                            <Loader/>
                        </div>
                    )}
                    {!image && !isLoading && (
                        <Empty label="No image generated."/>
                    )}
                    { image && (
                        <Card key={image} className='rounded-lg overflow-hidden'>
                            <div className='relative aspect-square'>
                                <Image 
                                    alt='Image' 
                                    fill 
                                    src = {image} 
                                />
                            </div>
                            <CardFooter className='p-2'>
                                <Button 
                                    onClick={()=> window.open(image)}
                                    variant="secondary" 
                                    className='w-full'
                                >
                                    <Download className='h-4 w-4 mr-2'/>
                                    Download
                                </Button>
                            </CardFooter>
                        </Card>

                    )}
                </div>
            </div>
        </div>
    );
};

export default VideoPage;