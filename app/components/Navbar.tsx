import Image from "next/image";
import Logo from "../../public/logo.svg"
import User from "../../public/user.svg"
import Menu from "../../public/menu.svg"
export function Navbar(){
    return(
        <nav className="flex w-full items-center justify-between px-[20px] py-[16px]">
            <div>
            <Image
            src={Logo}
            alt="logo"
            width={100}
            height={50}
            />
            </div>
           <div className="flex gap-x-5">
            <div>
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
                />
            </div>
           </div>

        </nav>
    )
}