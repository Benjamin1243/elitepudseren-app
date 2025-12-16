interface Props {
    heading: string,
    items: FooterItem[]
}
interface FooterItem {
    id: number,
    text: string,
    link: boolean,
    href?: string 


}

export default function FooterList( {heading, items}: Props){
    console.log(items)
    return ( 
        <ul >
            <li>
            <h2 className=" text-xl text-background mb-5 font-roboto capitalize">{heading}</h2>
            </li>
            {items?.map((item: FooterItem)=>{
                return ( 
                    <li className=" text-background/70 mb-2" key={item.id + item.text}>
                        {item.text}
                    </li>
                )
            })}
            <li>
                <img src="" alt="" />
            </li>
        </ul>

    )
}