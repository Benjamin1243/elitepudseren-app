import { fallbackData } from "@/fallbackdata";
type Data<T>= {
   data : [T] 
}


export default async function fetcher<T>(paramUrl : String, body?: Object, ) : Promise<Data<T>>{
   try {

   
const url = process.env.NEXT_PUBLIC_API_LOCATION! + "/api/"
const reponse = await fetch(url + paramUrl, body )

const data = await reponse.json();
console.log( "reposnde" , data.data[0])
if(!data.data[0]) throw new Error("intet data")
   return data

   }
catch(error){
   console.log(error)
   return fallbackData as Data<T>


}
} 