import Image from "next/image";
import Logo from "../../public/logo.svg"
import User from "../../public/user.svg"
import Menu from "../../public/menu.svg"
export function Navbar(){
    const nanvLinks=[
        {name:"Features"},
        {name:"Pricing"},
        {name:"Enterprice"},
        {name:"Careers"}
    ]
    return(
        <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container 
        lg:mx-auto lg:px-20">
            <div className="flex items-center">
            <Image
            src={Logo}
            alt="logo"
            width={100}
            height={50}
            />
             <div className="hidden lg:flex pl-[74px] gap-x-[56px]">
               {nanvLinks.map((item,index)=>
                (
                    <p className="text-[##36485c] font-medium" key={index}>{item.name}</p>
                ))}
               </div>
            </div>
           <div className="flex gap-x-5">
            <p className="hidden lg:block font-medium text-[#36485c] pr-[56px] pt-6">Open Account</p>
            <div className="flex items-center gap-x-2">
                <Image
                 src={User}
                alt="user"
                width={70}
                height={30}
                />
              
                <span className="hidden font-medium text-[#36485c] lg:block">Sign in</span>
            </div>
            <div>
                <Image
                 src={Menu}
                alt="user"
                width={70}
                height={30}
                className="lg:hidden"
                />
            </div>
           </div>

        </nav>
    )
}