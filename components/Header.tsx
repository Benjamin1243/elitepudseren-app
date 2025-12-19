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
    
        <ul className=" flex sm:gap-8 px-10 fixed z-100 w-full  flex-row justify-center font-roboto text-base bg-darkblue text-white py-1 md:pr-[10vw]   " >  
            <li className=" mr-auto" > <Link  href={"/"} className=" font-black font-sans z-50 mr-auto "><img className=" max-w-20  " src={ data?.data?.[0].logo?.url} alt="" /></Link></li>
            {data?.data?.[0].link?.map((link: Link)=>{
                
                return  <li className="  self-center hidden sm:block"><Link  className=" capitalize uppercase  font-roboto text-base  " href={link.href}>{link.text}</Link></li>



            })}
            <li className=" mt-2">
             <Link href={"tel:+4530963482"} className="flex bg-white ml-5 rounded-4xl py-2 px-3 gap-2 pl-2.5 shadow-m shadow-black" >
             <div  className=" grid grid-cols-1 grid-rows-1">
             <img className=" row-start-1 col-start-1 col-end-2 w-10 h-10 object-cover rounded-full"  src="/lucas.JPG" alt="" />
             <div className=" row-start-1 col-start-1 col-end-2 h-3 w-3 bg-[#12ca12] self-end justify-self-end rounded-full animate-wiggle "></div>
             </div>
             <div className=" pr-3">
                
                <p className=" font-bold text-sm text-darkblue">Kontakt Lucas</p>
                <p className=" text-sm text-black ">Ring på <span className=" text- font-bold"> 30 96 24 82 </span></p>
                </div></Link>
            </li>

            
        </ul>
        </nav>
        </header>

    )
}
