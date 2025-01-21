"use client"

import Image from "next/image"
import {useRouter} from "next/navigation";


export default function Hero1(){
  const router = useRouter();

  const handleShopNowClick = () => {
    router.push('/shop');
  };



  return(
  
<section className="mt-4">
<div className="w-full relative">
  <Image 
    src={"/shop-1.jpg"} 
    alt="hero" 
    layout="responsive" 
    width={1440} 
    height={716} 
  />
  <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-8 md:px-16 lg:px-28">
    <h5 className="font-Montserrat font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-2">
      SUMMER 2020
    </h5>
    <h1 className="font-Montserrat text-[32px] sm:text-[48px] md:text-[58px] font-bold text-white leading-tight mb-4">
      NEW COLLECTION
    </h1>
    <h4 className="font-Montserrat text-[14px] sm:text-[16px] md:text-[20px] font-normal text-white mb-4 w-full">
      We knew how large objects will act,<br /> but things on a small scale.
    </h4>
    <div className="w-full sm:w-[200px] md:w-[221px] h-[50px] sm:h-[56px] md:h-[62px] flex items-center justify-center bg-custom-green">
    <button
              onClick={handleShopNowClick}
              className="w-full py-2 sm:px-4 sm:py-3 bg-custom-green-0 text-white text-sm sm:text-base font-Montserrat rounded-lg hover:bg-custom-green-200 hover:scale-105 transition-all duration-200"
               type="button"
            >
              SHOP NOW
            </button>
    </div>
  </div>
</div>
</section>


  )

}