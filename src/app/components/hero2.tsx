
import Image from "next/image" 
import Link from "next/link"



 export default function CategoryLinks(){
    return(
      

<section className="w-[1440] h-auto  flex justify-center items-center ">
  <div className="w-[1050] h-770 flex flex-col justify-center items-center p-14">
    <h2 className="font-Montserrat font-bold text-[24] justify-center">EDITOR&apos;S PICK</h2>
    <p className="font-Montserrat font-normal text-sm">Problems trying to resolve the conflict between </p>

  
    <div className="w-full max-w-full h-auto flex flex-wrap gap-9 mt-14 px-4">
  {/* MEN Image Section */}
  <div className="relative w-full sm:w-[509px]">
  <Link href="/men">
    <Image src={"/filter-1.png"} alt="man" width={509} height={500} />
    <h2 className="absolute bottom-9 left-6 py-2 px-11 text-center font-Montserrat font-bold text-[16px] bg-white">
      MEN
    </h2>
    </Link>
  </div>

  {/* WOMEN Image Section */}
  <div className="relative w-full sm:w-[239px]">
  <Link href="/women">
    <Image src={"/filter-2.png"} alt="woman" width={239} height={500} />
    <h2 className="absolute bottom-9 left-6 py-2 px-11 text-center font-Montserrat font-bold text-[16px] bg-white">
      WOMEN
    </h2>
    </Link>
  </div>

  {/* Accessories and Kids Section */}
  <div className="w-full flex flex-col gap-9 sm:w-[239px]">
    {/* ACCESSORIES Image */}
    <div className="relative w-full">
    <Link href="/accessories">
      <Image src={"/filter-3.png"} alt="accessories" width={239} height={242} />
      <h2 className="absolute bottom-9 left-6 py-2 px-11 text-center font-Montserrat font-bold text-[16px] bg-white">
        ACCESSORIES
      </h2>
      </Link>
    </div>
    
    {/* KIDS Image */}
    <div className="relative w-full">
    <Link href="/kids">
      <Image src={"/filter-4.png"} alt="kids" width={239} height={242} />
      <h2 className="absolute bottom-9 left-6 py-2 px-11 text-center font-Montserrat font-bold text-[16px] bg-white">
        KIDS
      </h2>
      </Link>
    </div>
  </div>
</div>
</div>



</section>

    )
}