import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer";

export default function Contact() {
  return (
    <>
      {/* Navigation Section */}
      <div className="flex flex-wrap justify-between p-6 md:p-9 w-full h-auto">
  {/* Logo */}
  <p className="font-Montserrat font-bold text-[24px] w-full md:w-auto text-center md:text-left">
    Bandage
  </p>

  {/* Navigation Links */}
  <nav className="font-Montserrat text-sm font-bold text-gray-600 mb-3 w-full md:w-auto text-center md:text-left">
    <Link href="/" className="mr-4 mb-2 md:mb-0 inline-block">Home</Link>
    <Link href="/blog" className="mr-4 mb-2 md:mb-0 inline-block">Product</Link>
    <Link href="#" className="mr-4 mb-2 md:mb-0 inline-block">Pricing</Link>
    <Link href="#" className="mr-4 mb-2 md:mb-0 inline-block">Contact</Link>
  </nav>

  {/* Login Link */}
  <div className="font-Montserrat font-bold text-sm text-sky-500 mb-3 w-full md:w-auto text-center md:text-left">
    <Link href="#">Login</Link>
  </div>

  {/* Become a Member Button */}
  <div className="bg-sky-500 px-6 py-3 flex rounded-md font-Montserrat font-bold text-white mb-4 items-center justify-center w-full md:w-auto text-center">
    <button>Become a member</button>
    <Image className="font-bold ml-5" src="/vector11.png" alt="arrow" width={12} height={12} />
  </div>
</div>


<div className="w-full h-auto bg-white flex justify-center items-center px-4 md:px-0">
  <div className="w-full max-w-[870px] text-center sm:text-left">
    {/* Section Title */}
    <h5 className="font-Montserrat font-bold text-base text-gray-600 ">WHAT WE DO</h5>
    
    {/* Main Heading */}
    <h2 className="font-Montserrat font-bold text-[32px] sm:text-[58px] break-words">
      Innovation
      <span className="ml-2 sm:ml-4 break-words">tailored</span>
      <span className="ml-2 sm:ml-4 break-words">for</span>
      <span className="ml-2 sm:ml-4 break-words">you</span>
    </h2>

    {/* Navigation Links */}
    <div className="w-full flex justify-center items-center gap-3 mt-8">
      <p className="font-Montserrat font-bold text-sm">Home</p>
      <Image className="object-contain" src="/arrow1.png" alt="arrow" width={9} height={16} />
      <p className="font-Montserrat font-bold text-sm">Pricing</p>
    </div>
  </div>
</div>


<div className="w-full h-[530px]  flex flex-col sm:flex-row justify-center">
        <div>
            <Image src={"/fac1.png"} alt="girl" width={700} height={530}/>
        </div>
        <div className="grid grid-cols-2 ">
        <Image src={"/fac2.png"} alt="girl" width={361} height={260}/>
        <Image src={"/fac3.png"} alt="girl" width={361} height={260}/>
        <Image src={"/fac4.png"} alt="girl" width={361} height={260}/>
        <Image src={"/fac5.png"} alt="girl" width={361} height={260}/>
        </div>
       </div>


 

<div className="w-full h-auto">
  <div className="max-w-screen-xl mx-auto">
    <div className="flex justify-center items-center mt-16">
      <h2 className="font-Montserrat font-bold text-4xl text-center">Meet Our Team</h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-20">
      {/* Team Member 1 */}
      <div className="flex flex-col items-center">
        <Image src="/fg1.jpg" alt="girl" width={316} height={231} />
        <div className="w-[316px] h-[152px] text-center">
          <h5 className="font-Montserrat font-bold text-base">Username</h5>
          <h6 className="font-Montserrat font-bold text-sm text-gray-600">Profession</h6>
          <div className="w-[112px] h-24 flex justify-center items-center gap-3 ">
            <Image className="object-contain" src="/i1.png" alt="icon1" width={24} height={19.76} />
            <Image className="object-contain" src="/i2.png" alt="icon2" width={24} height={19.76} />
            <Image className="object-contain" src="/i3.png" alt="icon3" width={24} height={19.76} />
          </div>
        </div>
      </div>

      {/* Team Member 2 */}
      <div className="flex flex-col items-center">
        <Image src="/fg2.jpg" alt="girl" width={316} height={231} />
        <div className="w-[316px] h-[152px] text-center">
          <h5 className="font-Montserrat font-bold text-base">Username</h5>
          <h6 className="font-Montserrat font-bold text-sm text-gray-600">Profession</h6>
          <div className="w-[112px] h-24 flex justify-center items-center gap-3">
            <Image className="object-contain" src="/i1.png" alt="icon1" width={24} height={19.76} />
            <Image className="object-contain" src="/i2.png" alt="icon2" width={24} height={19.76} />
            <Image className="object-contain" src="/i3.png" alt="icon3" width={24} height={19.76} />
          </div>
        </div>
      </div>

      {/* Team Member 3 */}
      <div className="flex flex-col items-center">
        <Image src="/fg3.jpg" alt="girl" width={316} height={231} />
        <div className="w-[316px] h-[152px] text-center">
          <h5 className="font-Montserrat font-bold text-base">Username</h5>
          <h6 className="font-Montserrat font-bold text-sm text-gray-600">Profession</h6>
          <div className="w-[112px] h-24 flex justify-center items-center gap-3">
            <Image className="object-contain" src="/i1.png" alt="icon1" width={24} height={19.76} />
            <Image className="object-contain" src="/i2.png" alt="icon2" width={24} height={19.76} />
            <Image className="object-contain" src="/i3.png" alt="icon3" width={24} height={19.76} />
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-20">
      {/* Team Member 4 */}
      <div className="flex flex-col items-center">
        <Image src="/fg4.jpg" alt="girl" width={316} height={231} />
        <div className="w-[316px] h-[152px] text-center">
          <h5 className="font-Montserrat font-bold text-base">Username</h5>
          <h6 className="font-Montserrat font-bold text-sm text-gray-600">Profession</h6>
          <div className="w-[112px] h-24 flex justify-center items-center gap-3">
            <Image className="object-contain" src="/i1.png" alt="icon1" width={24} height={19.76} />
            <Image className="object-contain" src="/i2.png" alt="icon2" width={24} height={19.76} />
            <Image className="object-contain" src="/i3.png" alt="icon3" width={24} height={19.76} />
          </div>
        </div>
      </div>

      {/* Team Member 5 */}
      <div className="flex flex-col items-center">
        <Image src="/fg5.jpg" alt="girl" width={316} height={231} />
        <div className="w-[316px] h-[152px] text-center">
          <h5 className="font-Montserrat font-bold text-base">Username</h5>
          <h6 className="font-Montserrat font-bold text-sm text-gray-600">Profession</h6>
          <div className="w-[112px] h-24 flex justify-center items-center gap-3">
            <Image className="object-contain" src="/i1.png" alt="icon1" width={24} height={19.76} />
            <Image className="object-contain" src="/i2.png" alt="icon2" width={24} height={19.76} />
            <Image className="object-contain" src="/i3.png" alt="icon3" width={24} height={19.76} />
          </div>
        </div>
      </div>

      {/* Team Member 6 */}
      <div className="flex flex-col items-center">
        <Image src="/fg6.jpg" alt="girl" width={316} height={231} />
        <div className="w-[316px] h-[152px] text-center">
          <h5 className="font-Montserrat font-bold text-base">Username</h5>
          <h6 className="font-Montserrat font-bold text-sm text-gray-600">Profession</h6>
          <div className="w-[112px] h-24 flex justify-center items-center gap-3">
            <Image className="object-contain" src="/i1.png" alt="icon1" width={24} height={19.76} />
            <Image className="object-contain" src="/i2.png" alt="icon2" width={24} height={19.76} />
            <Image className="object-contain" src="/i3.png" alt="icon3" width={24} height={19.76} />
          </div>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-20">
      {/* Team Member 7 */}
      <div className="flex flex-col items-center">
        <Image src="/fg7.jpg" alt="girl" width={316} height={231} />
        <div className="w-[316px] h-[152px] text-center">
          <h5 className="font-Montserrat font-bold text-base">Username</h5>
          <h6 className="font-Montserrat font-bold text-sm text-gray-600">Profession</h6>
          <div className="w-[112px] h-24 flex justify-center items-center gap-3">
            <Image className="object-contain" src="/i1.png" alt="icon1" width={24} height={19.76} />
            <Image className="object-contain" src="/i2.png" alt="icon2" width={24} height={19.76} />
            <Image className="object-contain" src="/i3.png" alt="icon3" width={24} height={19.76} />
          </div>
        </div>
      </div>

      {/* Team Member 8 */}
      <div className="flex flex-col items-center">
        <Image src="/fg8.jpg" alt="girl" width={316} height={231} />
        <div className="w-[316px] h-[152px] text-center">
          <h5 className="font-Montserrat font-bold text-base">Username</h5>
          <h6 className="font-Montserrat font-bold text-sm text-gray-600">Profession</h6>
          <div className="w-[112px] h-24 flex justify-center items-center gap-3">
            <Image className="object-contain" src="/i1.png" alt="icon1" width={24} height={19.76} />
            <Image className="object-contain" src="/i2.png" alt="icon2" width={24} height={19.76} />
            <Image className="object-contain" src="/i3.png" alt="icon3" width={24} height={19.76} />
          </div>
        </div>
      </div>

      {/* Team Member 9 */}
      <div className="flex flex-col items-center">
        <Image src="/fg9.jpg" alt="girl" width={316} height={231} />
        <div className="w-[316px] h-[152px] text-center">
          <h5 className="font-Montserrat font-bold text-base">Username</h5>
          <h6 className="font-Montserrat font-bold text-sm text-gray-600">Profession</h6>
          <div className="w-[112px] h-24 flex justify-center items-center gap-3">
            <Image className="object-contain" src="/i1.png" alt="icon1" width={24} height={19.76} />
            <Image className="object-contain" src="/i2.png" alt="icon2" width={24} height={19.76} />
            <Image className="object-contain" src="/i3.png" alt="icon3" width={24} height={19.76} />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="w-full h-auto py-16">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col items-center justify-center space-y-6 lg:space-y-0 lg:space-x-10 lg:flex-row">
      <div className="w-full lg:w-[607px] h-auto text-center">
        <h2 className="font-Montserrat font-bold text-3xl sm:text-4xl lg:text-5xl">
          Start your 14 days free trial
        </h2>
        <h6 className="font-Montserrat font-normal text-sm text-gray-600 mt-4 lg:mt-6">
          Met minim mollie non desert Alamo est sit cliquey dolor
          <br />
          <span>do met sent.RELIT official consequent</span>
        </h6>

        <div className="w-full flex justify-center mt-6">
          <button className="px-8 py-3 text-white bg-custom-blue-0 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Try it free now
          </button>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-4 lg:space-x-6">
        <Image className="mb-4 sm:mb-6" src="/t1.png" alt="twitter" width={30} height={24} />
        <Image className="mb-4 sm:mb-6" src="/flogo.png" alt="facebook" width={30} height={30} />
        <Image className="mb-4 sm:mb-6" src="/sl.png" alt="slack" width={29.98} height={29.98} />
        <Image className="mb-4 sm:mb-6" src="/fln.png" alt="linkedin" width={29.98} height={29.98} />
      </div>
    </div>
  </div>
</div>
<Footer/>



</>
)
}