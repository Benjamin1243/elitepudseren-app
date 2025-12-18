type Props ={
    url: string
}

export default function PartnerComponent({url}: Props){

    return(<img className=" grayscale-100 w-full object-cover w-[33%] aspect-square rounded-lg" src={ url} alt="" />)
    
}