import fetcher from "@/utils/fetcher"
import FooterList from "./FooterList"
interface Data {
    footerList: FooterList[]

}
type FooterLogo ={
    logo : {
        url: string}
    
}
interface FooterList {
    id: number
    heading: string,
    footerItem: FooterItem[]
   
}
interface FooterItem {
    id: number,
    text: string,
    link: boolean,
    href?: string 


}

export default async function Footer(){
    const data = await fetcher<Data>("footers?populate[footerList][populate]=*")
    const footerLogo = await fetcher<FooterLogo>("footers?populate[logo][populate]=*")
         console.log(footerLogo)
    return(
        <footer className=" bg-darkblue w-full  flex grid-rows-1 p-20 flex-wrap  gap-[10%]">
        
            {data.data?.[0].footerList?.map((list)=>{
                console.log(list)
                return(
                    <FooterList key={list.id + list.heading} heading={list.heading} items={list.footerItem}></FooterList>
                )

            })}
            <img className=" aspect-square  w-[20%] md:ml-auto" src={  footerLogo?.data?.[0]?.logo?.url } alt="" />
        </footer>
    )
}