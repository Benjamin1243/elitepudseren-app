export default function MainWrapper({children}: Readonly<{
    children: React.ReactNode;
  }>){
    return (
        <div className=" w-[98%] mx-auto">
            {children}
        </div>
    )
}