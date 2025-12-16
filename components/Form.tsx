"use client"

import Input from "./Input"
interface InputType {
    id?: number,
    type?: string,
    name: string,
    placeholder: string 
}
interface Inputs {
    inputs: InputType[]
}

export default function Form({inputs} : Inputs){
    return(
        <form  className=" w-[90%] m-auto mt-[-20vh]  relative z-10  bg-background flex flex-col md:absolute md:w-5/12 md:top-8/12 md:right-[2vw] rounded-md p-10 gap-5 shadow-xl  shadow-black" >
            <h2 className=" text-2xl text-foreground font-bold font-roboto "> Kontakt os</h2>
            {
            inputs.map((input: InputType, index)=>{
                return <Input key={index} name={input.name} placeholder={input.name}></Input>

            })
            }
            <textarea className=" border-2 border-gray-400 h-30 p-1 text-black placeholder:text-gray-600" name="messeage" id="" placeholder=" Besked (valgfrit)"></textarea>
            <button className=" text-black text-lg  p-2 border-2 border-gray-400 rounded-sm bg-background" type="submit">Bliv kontaktet</button>

        </form>
    )
}