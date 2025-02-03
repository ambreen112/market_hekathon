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
    <Link href="/contact" className="mr-4 mb-2 md:mb-0 inline-block">Contact</Link>
  </nav>

  {/* Login Link */}
  <div className="font-Montserrat font-bold text-sm text-sky-500 mb-3 w-full md:w-auto text-center md:text-left">
    <Link href="/login">Login</Link>
  </div>

  {/* Become a Member Button */}
  <div className="bg-sky-500 px-6 py-3 flex rounded-md font-Montserrat font-bold text-white mb-4 items-center justify-center w-full md:w-auto text-center">
<Link href="/member">  <button>Become a member</button></Link>
    <Image className="font-bold ml-5" src="/vector11.png" alt="arrow" width={12} height={12} />
  </div>
</div>


{/* About Us Section */}
<div className="w-full h-auto p-6 md:p-12 lg:p-40">
  <div className="flex flex-col md:flex-row items-center justify-center">
    <div className="text-center md:text-left md:w-1/2">
      <h5 className="font-Montserrat font-bold text-base text-gray-700 mb-5">ABOUT COMPANY</h5>
      <h1 className="font-Montserrat font-bold text-2xl md:text-[58px] mt-7">ABOUT US</h1>
      <p className="font-Montserrat font-normal text-[16px] md:text-[20px] text-gray-600 mt-8">
        We know how large objects will act
        <br />
        <span className="font-Montserrat font-normal text-[16px] md:text-[20px] text-gray-600 mt-8">but think on a small scale</span>
      </p>
      <div className="bg-sky-500 p-2 py-2 rounded-sm inline-block mt-8">
        <button className="text-white font-Montserrat font-bold px-6 py-2 ">
          Get Quote Now
        </button>
      </div>
    </div>
    <div className="mt-6 md:mt-0 md:w-1/2">
      <Image className="w-full h-auto" src="/girl.png" alt="woman" width={900} height={988} />
    </div>
  </div>
</div>


{/* Call to Action Section */}
<div className="w-full h-auto py-16 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-32">
  <div className="text-center md:text-left mb-5">
    <p className="font-Montserrat text-sm font-normal text-red-600 mb-4">Problem trying</p>
    <h2 className="font-Montserrat font-bold text-[24px] sm:text-2xl lg:text-3xl text-gray-800">
      Met minim Mollie non desert
      <br />
      Alamo est sit cliquy dolor do
      <br />
      met sent
    </h2>
  </div>
  
  <div className="text-center md:text-left">
    <p className="text-sm sm:text-base md:text-lg text-gray-600">
      Problem trying to resolve the conflict between the two major realms of
      <br />
      classical physics. Newton Mechanics
    </p>
  </div>
</div>

{/* Statistics Section */}
<div className="w-full h-auto py-16 flex flex-col md:flex-row justify-center gap-10 md:gap-16">
  <div className="text-center">
    <p className="font-Montserrat font-bold text-[48px] sm:text-[58px] text-gray-800">15K</p>
    <p className="font-Montserrat font-bold text-sm sm:text-base text-gray-600">Happy Customers</p>
  </div>
  <div className="text-center">
    <p className="font-Montserrat font-bold text-[48px] sm:text-[58px] text-gray-800">150K</p>
    <p className="font-Montserrat font-bold text-sm sm:text-base text-gray-600">Monthly Visitors</p>
  </div>
  <div className="text-center">
    <p className="font-Montserrat font-bold text-[48px] sm:text-[58px] text-gray-800">15K</p>
    <p className="font-Montserrat font-bold text-sm sm:text-base text-gray-600">Countries Worldwide</p>
  </div>
  <div className="text-center">
    <p className="font-Montserrat font-bold text-[48px] sm:text-[58px] text-gray-800">100+</p>
    <p className="font-Montserrat font-bold text-sm sm:text-base text-gray-600">Top Partners</p>
  </div>
</div>


{/* Video Section */}
<div className="w-full h-auto flex justify-center relative py-16">
  <div className="relative w-full max-w-7xl">
    {/* Video Image */}
    <Image src="/vedio.png" alt="video" layout="responsive" width={989} height={540} />

    {/* Button Image positioned on top of the video image */}
    <div className="absolute inset-0 flex justify-center items-center">
 <Link href="https://www.youtube.com/watch?v=JruWsyyP9pw">   <Image src="/button.png" alt="button" width={92} height={92} /></Link>
    </div>
  </div>
</div>


{/* Meet Our Team Section */}
<div className="w-full h-auto py-16">
  <div className="w-full h-full flex flex-col justify-center items-center">
    {/* Heading Section */}
    <div className="text-center mb-8">
      <h2 className="font-Montserrat font-bold text-3xl sm:text-4xl lg:text-5xl">Meet Our Team</h2>
      <p className="text-gray-600 font-Montserrat font-normal text-sm mt-4">
        Problem trying to resolve the conflict between the two major realms of<br />
        classical physics. Newton Mechanics
      </p>
    </div>

    {/* Team Members */}
    <div className="w-full flex justify-center gap-6 mt-8 items-center flex-wrap md:flex-nowrap">
      {/* Team Member 1 */}
      <div className="flex flex-col items-center mb-8 md:mb-0">
        <Image src="/girl1.png" alt="girl" width={316} height={231} className="rounded-lg" />
        <h5 className="font-Montserrat font-bold text-base mt-4">Username</h5>
        <h6 className="font-Montserrat font-bold text-sm mt-2 text-gray-600">Profession</h6>
        <div className="flex items-center space-x-4 mt-4">
          <Image src="/facebook.png" alt="Facebook" width={26} height={26} />
          <Image src="/instagram.png" alt="Instagram" width={26} height={26} />
          <Image src="/twitter.png" alt="Twitter" width={26} height={26} />
        </div>
      </div>

      {/* Team Member 2 */}
      <div className="flex flex-col items-center mb-8 md:mb-0">
        <Image src="/girl2.png" alt="girl" width={316} height={231} className="rounded-lg" />
        <h5 className="font-Montserrat font-bold text-base mt-4">Username</h5>
        <h6 className="font-Montserrat font-bold text-sm mt-2 text-gray-600">Profession</h6>
        <div className="flex items-center space-x-4 mt-4">
          <Image src="/facebook.png" alt="Facebook" width={26} height={26} />
          <Image src="/instagram.png" alt="Instagram" width={26} height={26} />
          <Image src="/twitter.png" alt="Twitter" width={26} height={26} />
        </div>
      </div>

      {/* Team Member 3 */}
      <div className="flex flex-col items-center mb-8 md:mb-0">
        <Image src="/girl3.png" alt="girl" width={316} height={231} className="rounded-lg" />
        <h5 className="font-Montserrat font-bold text-base mt-4">Username</h5>
        <h6 className="font-Montserrat font-bold text-sm mt-2 text-gray-600">Profession</h6>
        <div className="flex items-center space-x-4 mt-4">
          <Image src="/facebook.png" alt="Facebook" width={26} height={26} />
          <Image src="/instagram.png" alt="Instagram" width={26} height={26} />
          <Image src="/twitter.png" alt="Twitter" width={26} height={26} />
        </div>
      </div>
    </div>
  </div>
</div>


{/* Big Companies Section */}
<div className="w-full py-16">
  <div className="w-full h-full flex flex-col justify-center items-center">
    {/* Heading Section */}
    <div className="text-center mb-8">
      <h2 className="font-Montserrat font-bold text-3xl sm:text-4xl lg:text-5xl">Big Companies Are Here</h2>
      <p className="text-gray-600 font-Montserrat font-normal text-sm mt-4">
        Problem trying to resolve the conflict between the two major realms of<br />
        classical physics. Newton Mechanics
      </p>
    </div>

    {/* Companies Logos */}
    <div className="w-full flex justify-center gap-9 flex-wrap md:flex-nowrap">
      <div className="flex justify-center items-center mb-4 md:mb-0">
      <Link href="https://www.hoolisoftware.com"> <Image src="/fa1.png" alt="fa1" width={76} height={72} /></Link>
      </div>
      <div className="flex justify-center items-center mb-4 md:mb-0">
      <Link href="https://www.lyft.com"> <Image src="/fa2.png" alt="fa2" width={76} height={72} /></Link>
      </div>
      <div className="flex justify-center items-center mb-4 md:mb-0">
      <Link href="#">    <Image src="/fa3.png" alt="fa3" width={76} height={72} /></Link>
      </div>
      <div className="flex justify-center items-center mb-4 md:mb-0">
      <Link href="https://stripe.com">     <Image src="/fa4.png" alt="fa4" width={76} height={72} /></Link>
      </div>
      <div className="flex justify-center items-center mb-4 md:mb-0">
      <Link href="https://aws.amazon.com">   <Image src="/fa5.png" alt="fa5" width={76} height={72} /></Link>
      </div>
      <div className="flex justify-center items-center mb-4 md:mb-0">
      <Link href="https://discord.com/">     <Image src="/fa6.png" alt="fa6" width={76} height={72} /></Link>
      </div>
    </div>
  </div>
</div>

{/* Work With Us Section */}
<div className="w-full h-auto flex justify-center p-6 md:p-20 mb-9">
  <div className="flex flex-col items-center md:flex-row md:items-center gap-8 bg-custom-blue p-6 rounded-lg">
    {/* Text Section */}
    <div className="text-center md:text-left">
      <h5 className="font-Montserrat font-bold text-base text-white">WORK WITH US</h5>
      <h2 className="font-Montserrat font-bold text-3xl sm:text-4xl lg:text-[40px] text-white">
        Now Let&apos;s grow Yours
      </h2>
      <p className="text-white mt-4 text-sm md:text-base">
        The gradual information about atomic and <br />
        small-scale behavior during the first quarter of the 20th century.
      </p>
    </div>

    {/* Image Section */}
    <div className="flex justify-center mt-6 md:mt-0">
      <Image src={"/mam.png"} alt="mam" width={590} height={640} className="object-contain" />
    </div>
  </div>
</div>
<Footer/>


</>
)
}