import fetcher from "@/utils/fetcher"
import PartnerComponent from "./PartnerComponent"


interface Data {
    partners: Partner[]

}
interface Partner {
    id: number
    
    image: {
        url: string
    }
}
export default async function PartnersShow(){
    const data = await fetcher<Data>("sites?populate[partners][populate]=*")
   
    return(
        <article className=" md:max-w-1/2 mt-10">
            <h2 className=" text-3xl font-bold text-center font-open-sans ">Virksomheder der stoler på os</h2>
            <hr className=" my-5 border-[1px] rounded-2xl" />
            <div className=" grid-cols-3 w-11/12 mx-auto grid gap-3 md:gap-5">
                {data.data?.[0]?.partners?.map((partner: Partner)=>{
                    return ( <PartnerComponent key={partner.id} url={partner.image.url}></PartnerComponent>)
                })}

            </div>
            
        </article>


    )
}