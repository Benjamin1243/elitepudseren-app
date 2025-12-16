type Props ={
    url: string
}

export default function PartnerComponent({url}: Props){

    return(<img className=" grayscale-100 h-40 w-full object-cover rounded-lg" src={process.env.NEXT_PUBLIC_API_LOCATION! + url} alt="" />)
    
}