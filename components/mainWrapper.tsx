export default function MainWrapper({children}: Readonly<{
    children: React.ReactNode;
  }>){
    return (
        <div className=" w-[98%] max-w-[1900px] mx-auto">
            {children}
        </div>
    )
}