
import Link from "next/link"

interface Button {
    text: string,
    href: string,
    background?: Boolean
}
export default function LinkButton( {text, href, background = true} : Button){
    return(
        
   <Link className={"p-2 px-4 rounded-3xl duration-200 border-2 font-semibold" + (background ? " bg-darkblue text-background hover:bg-transparent border-darkblue " : " text-background  border-darkblue hover:bg-darkblue")} href={href}>{text}</Link>
)

}