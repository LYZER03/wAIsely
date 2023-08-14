'use client';
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import React from 'react'

const SignInButton = () => {
  return (
    
    <Link
      href="/signin"
      className={cn(
        buttonVariants({ variant: "ghost" })
      )}
    >
      LAUNCH APP
    </Link>

  );
};

export default SignInButton;