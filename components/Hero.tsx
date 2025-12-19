import fetcher from "@/utils/fetcher"
import Link from "next/link";
import { env } from "process";
import LinkButton from "./LinkButton";


interface HeroData  {
    local?: boolean
    hero:{
        overskrift: string,
        underskrift: string,
        backgroundImg: {
            url: string
            

        }
        heroButton:[HeroButton]
        
    }

}
interface HeroButton {
    id: number,
    text: string,
    href: string,
    background: true
}
export default async function Hero(){
const data = await fetcher<HeroData>(
"sites?populate[hero][populate]=*");

console.log("Image data", data)
    return( 
        <div className={`  grid h-screen sm:h-[90vh] bg-cover bg-center h-64    md:[clip-path:polygon(0_0,100%_0,100%_85%,0_100%)]  `} style={{backgroundImage: `url("${ data.data[0].local ? data.data?.[0].hero.backgroundImg.url: data.data?.[0].hero.backgroundImg.url}")`}}>
            <div className=" z-[1] blur-1xl bg-black opacity-50 col-span-full row-span-full"></div>
            <div className=" ml-10 col-span-full row-span-full z-10 self-center  max-w-[90%] md:max-w-[45%] 2xl:max-w-wrapperMax 2xl:w-[98%] 2xl:mx-auto">
            <h1 className="  text-background text-5xl md:text-6xl ">{data.data?.[0]?.hero?.overskrift}</h1>
            <p className=" text-background max-w-[80%] mt-5"> {data.data?.[0].hero.underskrift}</p>
            <div  className=" flex gap-5 mt-3.5">
            {data.data?.[0]?.hero?.heroButton?.map((button: HeroButton)=>{
                return ( <LinkButton key={button.id + "link"} background={button.background} text={button.text} href={button.href}></LinkButton>)

            })}
            </div>
            </div>
            
        </div>
    )
}