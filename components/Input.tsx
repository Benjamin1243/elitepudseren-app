interface Input {
    type?: string,
    name: string,
    placeholder: string 
}
export default function Input({type = "text", name, placeholder}: Input){
    return(
        <input className="bg-gray-300 text-black placeholder:text-gray-600 p-2  capitalize " type={type} placeholder={placeholder} name={name}/>
    )
}