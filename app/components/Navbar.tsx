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
        <nav className="flex w-full items-center justify-between px-[5px] py-[14px] lg:container 
        lg:mx-auto lg:px-20">
            <div className="flex items-center">
            <Image
            src={Logo}
            alt="logo"
            width={100}
            height={50}
            />
             <div className="hidden lg:flex pl-[74px] gap-x-[56px] px-[20px] py-[16px]">
               {nanvLinks.map((item,index)=>
                (
                    <p className="text-[##36485c] font-medium" key={index}>{item.name}</p>
                ))}
               </div>
            </div>
            
            <div className="flex items-center gap-x-[56px]">
            <span className="hidden lg:block font-medium text-[#36485c]">Open Account</span>
            <span className="hidden lg:block font-medium text-[#36485c] ">Sign in</span>
                <Image
                 src={User}
                alt="user"
                width={70}
                height={30}
                />
              
                
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
           

        </nav>
    )
}