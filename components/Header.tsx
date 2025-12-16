"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { ImCross } from "react-icons/im";
import { FiX } from "react-icons/fi";
import useFetcher from "@/hooks/fetcherHook";
type Data= {
    
    link: Link[]
    logo: {
        url: string
    }

    
}
type Link = {
    id: number,
    href : string,
    text: string


}

export default function Header(){
    
    const  data = useFetcher<Data>("nav-bars?populate=*")
    
   
    return(
        <header>
            <nav>
    
        <ul className=" flex gap-8 px-3 fixed z-100 w-full  flex-row justify-center font-roboto text-base bg-darkblue text-white py-2 pr-[10vw]   " >  
            <li className=" mr-auto" > <Link  href={"/"} className=" font-black font-sans z-50 mr-auto "><img className=" max-w-20 mix-blend-multiply" src={process.env.NEXT_PUBLIC_API_LOCATION! + data?.data?.[0].logo?.url} alt="" /></Link></li>
            {data?.data?.[0].link?.map((link: Link)=>{
                
                return  <li className="  self-center hidden sm:block"><Link  className=" capitalize  font-roboto  " href={link.href}>{link.text}</Link></li>



            })}
            <li className=" mt-2">
             <Link href={"/"} className="flex bg-white ml-5 rounded-4xl py-2 px-3 gap-2">
             <img className=" w-10 h-10 object-cover rounded-full"  src="/lucas.JPG" alt="" />
             <div className=" pr-3">
                <p className=" font-bold text-base text-darkblue">Kontakt Lucas</p>
                <p className=" text-sm text-black ">Ring på <span className=" font-bold"> 30 96 24 82 </span></p>
                </div></Link>
            </li>

            
        </ul>
        </nav>
        </header>

    )
}
