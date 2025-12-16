type Props = {
    text: string
}
export default function Paragraph({text}: Props){
    return <p className=" my-5">{text}</p>

}