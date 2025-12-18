import fetcher from "@/utils/fetcher"
import Heading from "./Heading"
import Paragraph from "./Paragraph"

interface Data {
    textImageSection: TextImageSection
    local: boolean

}
interface TextImageSection {
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

export default async function TextImageSection(){
     const data = await fetcher<Data>("sites?populate[textImageSection][populate]=*")
 
    return(
        <section className=" grid grid-cols-1 md:grid-cols-2 mt-20 gap-5 md:gap-20 w-[95%]  mx-auto p-5">
            <div className=" mt-10">
                {data.data?.[0]?.textImageSection?.text?.map((text: Text, index: number)=>{
                    if(text.type == "heading"){
                        return <Heading key={index + "heading"} text={text?.children[0]?.text} level={text.level}></Heading>

                    }else{
                        return <Paragraph key={index + " paragrpah"} text={text?.children[0]?.text}></Paragraph>

                    }
                })}
                <p className=" text-darkblue font-bold ml-2"> - Lucas er en certificeret vinduespudser </p>
            </div>
            <img className=" row-start-1 md:col-start-2 w-full object-cover rounded-2xl max-h-200 aspect-square md:aspect-auto md:h-[110%] " src={data.data[0].local? data.data[0].textImageSection.image.url : data.data?.[0]?.textImageSection?.image?.url} alt="" />
            
        </section>

    )
}