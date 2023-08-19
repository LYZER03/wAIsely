import Link from "next/link"
import  { redirect } from 'next/navigation'
import { getAuthSession } from "@/lib/nextauth";


export default async function Home() {
  const session = await getAuthSession()
  if(session?.user){
    //cela veut dire que l'utilisateur est déjà connecter
    redirect("/dashboard")
  }
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">The Best <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">AI</span> Tool</h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl ">Create all your contents wAIsely using AI 10x faster.</p>
      <Link href="/signin" className="flex items-center gap-2">
        <p className='mb-6 rounded-lg border-2 border-b-4 border-r-4 border-black px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block'>
          <span className=" text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Get started for free</span>
        </p>
      </Link>
      <p className="mb-7 text-lg font-normal text-gray-500 lg:text-sm">No credit card required.</p>
    </div>
  )
}
