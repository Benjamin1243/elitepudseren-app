import fetcher from "@/utils/fetcher"
import Heading from "./Heading"
import Paragraph from "./Paragraph"

interface Data {
    textBackgroundSection: TextBackgroundSection
    local?: boolean

}
interface TextBackgroundSection {
    id: number
    
    image: {
        url: string
    }
    text : Text[]
}
interface Text {
    type: string,
    level?: number
    children:[ {
        text: string
    }]


}

export default async function TextBackgroundSection(){
const data = await fetcher<Data>("sites?populate[textBackgroundSection][populate]=*")

    
    return(
        <section id="story" className=" mt-20   " style={{backgroundImage :`url(${data.data[0].local ?  data.data?.[0].textBackgroundSection?.image?.url :  data.data?.[0].textBackgroundSection?.image?.url});`}}>
            <div className=" bg-black/50 backdrop-blur h-full p-10 py-20 text-center text-white">
            {data.data?.[0]?.textBackgroundSection?.text?.map((text: Text, index: number)=>{
                                if(text.type == "heading"){
                                    return <Heading key={index + " heading"} className=" font-open-sans text-4xl mb-10"  text={text.children[0].text} level={text.level}></Heading>
            
                                }else{
                                    return <Paragraph key={index + " paragraph"} text={text.children[0].text}></Paragraph>
            
                                }
                            })}
                            </div>

        </section>

       

    )
}