import Image from "next/image" 



 export default function Hero5(){

    return(
        <section className="w-full h-auto flex flex-col sm:flex-row justify-center items-center mt-10 px-4 sm:px-8 lg:px-16">
        {/* Image Section */}
        <div className="w-full sm:w-1/2 flex justify-center mb-6 sm:mb-0">
          <Image src={"/hero01.png"} alt="women" width={500} height={234} />
        </div>
        
        {/* Text Content */}
        <div className="flex flex-col justify-center items-start text-center sm:text-left sm:ml-8 w-full sm:w-1/2">
          <h5 className="font-Montserrat font-bold text-base text-gray-600 mb-2">
            SUMMER 2020
          </h5>
          <h1 className="font-Montserrat font-bold text-[28px] sm:text-[40px] text-black mb-4">
            Part Of The Neural<br />Universe
          </h1>
          <h4 className="font-Montserrat font-normal text-sm sm:text-[20px] text-gray-600 mb-6">
            We know how large objects will act,<br /> but things on a small scale.
          </h4>
          <div className="flex flex-col sm:flex-row m-4 space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-custom-green text-white font-Montserrat px-6 py-2 rounded-md w-full sm:w-auto">
              BUY NOW
            </button>
            <button className="bg-transparent text-black font-Montserrat px-6 py-2 border border-green-600 rounded-md w-full sm:w-auto">
              READ MORE
            </button>
          </div>
        </div>
      </section>
      
    )
}