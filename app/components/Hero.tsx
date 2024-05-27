import Image from 'next/image'
import arrow from '../../public/right-arrow-svgrepo-com.svg'
import violet from '../../public/violet.png'
import undraw from '../../public/undraw.svg'
import cnn from '../../public/cnn.svg'
import google from '../../public/google.svg'
import trustpilot from '../../public/trustpilot.svg'
import slack from '../../public/slack.svg'
export function Hero(){
    return(
        <div className="pt-4 lg:pt-10">
            <div className="px-[20px] lg:px-[280px]">
            <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026]
            lg:text-[58px] lg:leading-[72px]">
                Start monitoring your website like a pro
            </h1>
            <p className="text-center pt-6 text-[#36485c] lg:text-[18px] lg:leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
             tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam,
             quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex w-full pt-8 justify-center gap-x-6">
            <button className="bg-[#4328EB] w-1/2 py-4 px-8 text-white rounded-[4px] lg:w-fit">Try for free</button>
            <button className="text-[#4328EB] w-1/2 flex items-center justify-center gap-x-2 lg:w-fit">
            View pricing
                {/* <span> 
                    <Image
                    src={arrow}
                    alt="arrow"/> 
                    width={5}
                    height={2}
                    </span>
                     */}
                    </button>
            </div> 
            </div>
           
           <div className='relative flex h-full w-full justify-center'>
            <Image src={violet} alt="gradient"
            className='min-h-[500px] w-full object-cover lg:h-auto'/>
            <div className='absolute bottom-40 top-32 flex w-full flex-col items-center'>
                <Image src={undraw}
                alt="techtheme"
                className='ml-4 h-[310px] sm:-mb-20 sm:h-[400px] lg:-mb-28 lg:auto xl-w-[70%]'
                />
                <div className='flex w-full flex-col items-center lg:container lg:flex-row lg:justify-between 
                lg:px-20 lg:mt-[140px]'
               
                >
                    <p className='text-[#36485c] text-center lg:text-[15px]'>Trusted by these companies</p>
<div className='grid grid-cols-3 items-center justify-center justify-items-center px-[20px] 
align-middle lg:grid-cols-5 gap-2'>
    <Image src={google} alt="icons" width={40} height={10}/>
    <Image src={trustpilot} alt="icons" width={40} height={10}/>
    <Image src={cnn} alt="icons" width={40} height={10}/> 
    {/* <Image src={slack} alt="icons" width={40} height={10}/> */}

</div>
                </div>
            </div>
           </div>
        </div>
    )
}