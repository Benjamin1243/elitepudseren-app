type Props ={
    url: string
}

export default function PartnerComponent({url}: Props){

    return(<img className=" grayscale-100 h-40 w-full object-cover rounded-lg" src={ url} alt="" />)
    
}