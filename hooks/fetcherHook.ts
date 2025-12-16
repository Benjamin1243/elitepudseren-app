"use client"
type Data<T>= {
   data: [T] | null
}


import fetcher from "@/utils/fetcher"
import { useEffect, useState } from "react"

export default function useFetcher<T>(url: String, body?: Object){
    const [data, setData] = useState<Data<T> | null>(null)
    useEffect(()=>{
        async function asyncfetcher(){
            let limitedData = await fetcher<T>(url, body)
            if(!limitedData.data){
               
            }else{
            setData(limitedData)}
        }
        asyncfetcher()
    },[])
    return data
}