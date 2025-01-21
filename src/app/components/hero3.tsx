import Image from "next/image" 



 export default function Hero3(){

    return(
        <section className="w-full h-auto mt-24 px-4 md:px-8 lg:px-16">
        <div className="text-center mb-8">
          <h2 className="font-Montserrat font-normal text-[20px] sm:text-[24px] text-gray-500">
            Featured Product
          </h2>
          <h3 className="font-Montserrat font-bold text-[24px] sm:text-[32px] lg:text-[36px]">
            BESTSELLER PRODUCT
          </h3>
          <p className="font-Montserrat font-normal text-sm sm:text-base text-gray-500">
            Problems trying to solve the conflict between
          </p>
        </div>
      
        {/* First Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Product 1 */}
          <div className="flex flex-col items-center">
            <Image src="/her1.png" alt="style" width={239} height={427} />
            <h5 className="font-Montserrat font-bold text-base mt-5">Graphic Design</h5>
            <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
            <div className="flex mt-4 space-x-2">
              <h5 className="font-Montserrat font-bold text-base text-gray-500">$16.58</h5>
              <h5 className="font-Montserrat font-bold text-base text-green-600">$6.48</h5>
            </div>
            <Image className="mt-4" src="/dot.png" alt="dot" width={82.23} height={16} />
          </div>
      
          {/* Product 2 */}
          <div className="flex flex-col items-center">
            <Image src="/her2.png" alt="style" width={239} height={427} />
            <h5 className="font-Montserrat font-bold text-base mt-5">Graphic Design</h5>
            <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
            <div className="flex mt-4 space-x-2">
              <h5 className="font-Montserrat font-bold text-base text-gray-500">$16.58</h5>
              <h5 className="font-Montserrat font-bold text-base text-green-600">$6.48</h5>
            </div>
            <Image className="mt-4" src="/dot.png" alt="dot" width={82.23} height={16} />
          </div>
      
          {/* Product 3 */}
          <div className="flex flex-col items-center">
            <Image src="/her3.png" alt="style" width={239} height={427} />
            <h5 className="font-Montserrat font-bold text-base mt-5">Graphic Design</h5>
            <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
            <div className="flex mt-4 space-x-2">
              <h5 className="font-Montserrat font-bold text-base text-gray-500">$16.58</h5>
              <h5 className="font-Montserrat font-bold text-base text-green-600">$6.48</h5>
            </div>
            <Image className="mt-4" src="/dot.png" alt="dot" width={82.23} height={16} />
          </div>
      
          {/* Product 4 */}
          <div className="flex flex-col items-center">
            <Image src="/her4.png" alt="style" width={239} height={427} />
            <h5 className="font-Montserrat font-bold text-base mt-5">Graphic Design</h5>
            <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
            <div className="flex mt-4 space-x-2">
              <h5 className="font-Montserrat font-bold text-base text-gray-500">$16.58</h5>
              <h5 className="font-Montserrat font-bold text-base text-green-600">$6.48</h5>
            </div>
            <Image className="mt-4" src="/dot.png" alt="dot" width={82.23} height={16} />
          </div>
        </div>
      
        {/* Second Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-32">
          {/* Product 5 */}
          <div className="flex flex-col items-center">
            <Image src="/her5.png" alt="style" width={239} height={427} />
            <h5 className="font-Montserrat font-bold text-base mt-5">Graphic Design</h5>
            <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
            <div className="flex mt-4 space-x-2">
              <h5 className="font-Montserrat font-bold text-base text-gray-500">$16.58</h5>
              <h5 className="font-Montserrat font-bold text-base text-green-600">$6.48</h5>
            </div>
            <Image className="mt-4" src="/dot.png" alt="dot" width={82.23} height={16} />
          </div>
      
          {/* Product 6 */}
          <div className="flex flex-col items-center">
            <Image src="/her6.png" alt="style" width={239} height={427} />
            <h5 className="font-Montserrat font-bold text-base mt-5">Graphic Design</h5>
            <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
            <div className="flex mt-4 space-x-2">
              <h5 className="font-Montserrat font-bold text-base text-gray-500">$16.58</h5>
              <h5 className="font-Montserrat font-bold text-base text-green-600">$6.48</h5>
            </div>
            <Image className="mt-4" src="/dot.png" alt="dot" width={82.23} height={16} />
          </div>
      
          {/* Product 7 */}
          <div className="flex flex-col items-center">
            <Image src="/her7.png" alt="style" width={239} height={427} />
            <h5 className="font-Montserrat font-bold text-base mt-5">Graphic Design</h5>
            <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
            <div className="flex mt-4 space-x-2">
              <h5 className="font-Montserrat font-bold text-base text-gray-500">$16.58</h5>
              <h5 className="font-Montserrat font-bold text-base text-green-600">$6.48</h5>
            </div>
            <Image className="mt-4" src="/dot.png" alt="dot" width={82.23} height={16} />
          </div>
      
          {/* Product 8 */}
          <div className="flex flex-col items-center">
            <Image src="/her8.png" alt="style" width={239} height={427} />
            <h5 className="font-Montserrat font-bold text-base mt-5">Graphic Design</h5>
            <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
            <div className="flex mt-4 space-x-2">
              <h5 className="font-Montserrat font-bold text-base text-gray-500">$16.58</h5>
              <h5 className="font-Montserrat font-bold text-base text-green-600">$6.48</h5>
            </div>
            <Image className="mt-4" src="/dot.png" alt="dot" width={82.23} height={16} />
          </div>
        </div>
      </section>
    )
}      