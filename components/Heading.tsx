type  Props = {
    level: number | undefined,
    text: string,
    
    className? : string
}
export default function Heading({level, text, className}: Props){
    console.log("laver en" + text)
    
    return(
        <>
        {level == 1 ? <h2 className={` text-3xl my-3 font-bold ${className}`}>{text}</h2>: <h3  className={` text-xl my-3 font-bold ${className}`}>{text}</h3>}
        </>
    )
}