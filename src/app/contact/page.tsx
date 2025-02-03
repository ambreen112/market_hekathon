import React from "react";
import Link from "next/link";
import Image from "next/image";

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
    <Link href="/member"><button>Become a member</button></Link>
    <Image className="font-bold ml-5" src="/vector11.png" alt="arrow" width={12} height={12} />
  </div>
</div>
      {/* About Us Section */}
      <div className="w-full h-auto p-6 md:p-12 lg:p-40">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="text-center md:text-left md:w-1/2">
            <h5 className="font-Montserrat font-bold text-base mb-5">CONTACT US</h5>
            <h1 className="font-Montserrat font-bold text-2xl md:text-[58px] mt-7">
              Get in touch
              <br />
              <span className="mt-12 block">today!</span>
            </h1>
            <p className="font-Montserrat font-normal text-[16px] md:text-[20px] text-gray-600 mt-8">
              We know how large objects will act
              <br />
              <span className="font-Montserrat font-normal text-[16px] md:text-[20px] text-gray-600 mt-8">
                but think on a small scale
              </span>
            </p>
            <div>
              <p className="font-Montserrat font-bold text-[24px] mt-9">Phone: +451 215 215</p>
              <br />
              <p className="font-Montserrat font-bold text-[24px] mt-1">Fax: +451 215 215</p>
            </div>
            <div className="flex mt-7 gap-9 justify-center md:justify-start">
      <Link href="https://twitter.com">    <Image src={"/p1.png"} alt="twitter" width={30} height={24.38} /></Link>
              <div className="">
         <Link href="https://www.facebook.com"> <Image src={"/facebook0.png"} alt="facebook" width={30} height={30} /></Link>
              </div>
        <Link href="https://www.instagram.com/">    <Image src={"/p3.png"} alt="twitter" width={29.98} height={29.98} /></Link>
       <Link href="https://www.linkedin.com/"> <Image src={"/p4.png"} alt="twitter" width={29.98} height={29.98} /></Link>
            </div>
          </div>
          <div className="mt-6 md:mt-0 md:w-1/2 relative">
            <div className="relative w-full max-w-full h-[400px] md:h-[826px]">
              <Image className="absolute inset-0 w-full h-full object-cover" src="/E1.png" alt="woman" width={77} height={77} />
              {/* Background Image */}
              <Image src="/E0.png" alt="woman" width={484.06} height={484.06} />
              <Image src="/E2.png" alt="woman" width={14.78} height={14.78} />
              {/* Foreground Image */}
              <Image className="absolute inset-0 w-full h-full object-cover" src="/p6.png" alt="woman" width={671} height={825} />
            </div>
          </div>
        </div>
      </div>

      {/* Visit Section */}
      <div className="w-full h-auto mt-24">
        <div className="w-full md:w-[1124px] h-auto flex justify-center items-center">
          <div className="w-full md:w-[691px] h-auto text-center px-6">
            <h6 className="font-Montserrat font-bold text-sm">VISIT OUR OFFICE</h6>
            <h2 className="font-Montserrat font-bold text-[40px] md:text-[48px] mt-4">
              We help small business
              <br />
              <span className="block mt-2 md:ml-24">with big ideas</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Support Cards */}
      <div className="w-full md:w-[985px] h-auto flex flex-wrap justify-center gap-6 mt-10">
        <div className="w-full md:w-[327px] h-[343px] border-2 custom-dotted-border border-dotted border-custom-blue-0 px-7 py-4">
          <Image className="ml-16 mb-4" src={"/t1.png"} alt="phone" width={72} height={72} />
          <h6 className="font-Montserrat font-bold text-s">geoorgia.young@example.com</h6>
          <h6 className="font-Montserrat font-bold text-s ml-6">geoorgia.young@ple.com</h6><br />
          <h5 className="font-Montserrat font-bold text-base ml-12">Get Support</h5>
  <Link href="/request"> <button className="mt-5 ml-8 border-2 border-custom-blue-0 px-7 py-4 font-Montserrat font-bold text-sm text-sky-600 rounded-full hover:bg-sky-600 hover:text-white">
            Submit Request
          </button></Link>
        </div>

        <div className="w-full md:w-[327px] h-[343px] md:h-[403px] px-7 py-4 bg-custom-dark-blue-0">
          <Image className="ml-20 " src={"/t2.png"} alt="phone" width={72} height={72} />
          <h6 className="font-Montserrat font-bold text-s text-white">geoorgia.young@example.com</h6>
          <h6 className="font-Montserrat font-bold text-s ml-6 text-white">geoorgia.young@ple.com</h6><br />
          <h5 className="font-Montserrat font-bold text-base ml-12 text-white">Get Support</h5>
     <Link href="/request"> <button className="mb-20 mt-5 ml-8 border-2 border-custom-blue-0 px-7 py-4 font-Montserrat font-bold text-sm text-sky-600 rounded-full hover:bg-sky-600 hover:text-white">
            Submit Request
          </button></Link>
        </div>

        <div className="w-full md:w-[327px] h-[343px] border-2 custom-dotted-border border-dotted border-custom-blue-0 px-7 py-4">
          <Image className="ml-20" src={"/t3.png"} alt="phone" width={72} height={72} />
          <h6 className="font-Montserrat font-bold text-s">geoorgia.young@example.com</h6>
          <h6 className="font-Montserrat font-bold text-s ml-6">geoorgia.young@ple.com</h6><br />
          <h5 className="font-Montserrat font-bold text-base ml-12">Get Support</h5>
          <Link href="/request">      <button className="ml-8 mt-8 border-2 border-custom-blue-0 px-7 py-4 font-Montserrat font-bold text-sm text-sky-600 rounded-full hover:bg-sky-600 hover:text-white">
            Submit Request
          </button></Link>
        </div>
      </div>

      {/* Let's Talk Section */}
      <div className="w-full h-auto mt-24 flex justify-center items-center">
        <Image className="mb-14" src={"/Arrow2.png"} alt="arrow" width={72.56} height={21.84} />
      </div>

      <div className="w-full md:w-[607px] h-auto flex flex-col justify-center items-center">
        <h6 className="font-Montserrat font-bold text-base mt-5 text-center">
          WE Can&apos;t WAIT TO MEET YOU
        </h6>
        <h2 className="font-Montserrat font-bold text-[58px] text-center">
          Let&apos;s Talk
        </h2>
        <button className="mt-1 mb-16 border-2 border-custom-blue-0 px-14 py-5 font-Montserrat font-bold text-sm text-sky-600 rounded-2xl hover:bg-sky-600 hover:text-white"
        type="button">
          Try it free now
        </button>
      </div>

      {/* Footer Section */}
      <footer className="bg-slate-100 text-black py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="col-span-1">
              <h2 className="font-bold mb-4 font-Montserrat text-base">Company Info</h2>
              <ul className="font-Montserrat font-bold text-sm text-gray-600">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">We are hiring</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="font-bold mb-4 font-Montserrat text-base">Legal</h2>
              <ul className="font-Montserrat font-bold text-sm text-gray-600">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="font-Montserrat text-base font-bold mb-4">Features</h2>
              <ul className="font-Montserrat font-bold text-sm text-gray-600">
                <li><a href="#">Business Marketing</a></li>
                <li><a href="#">User Analytics</a></li>
                <li><a href="#">Live Chat</a></li>
                <li><a href="#">Unlimited Support</a></li>
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="font-Montserrat text-base font-bold mb-4">Resources</h2>
              <ul className="font-Montserrat font-bold text-sm text-gray-600">
                <li><a href="#">iOS & Android</a></li>
                <li><a href="#">Watch a Demo</a></li>
                <li><a href="#">Customers</a></li>
                <li><a href="#">API</a></li>
              </ul>
            </div>
            <div className="col-span-1">
              <h2 className="font-Montserrat text-base font-bold mb-4">Get In Touch</h2>
              <div className="mb-4">
                <div className="flex items-center">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full max-w-[350px] border border-gray-300 p-2 rounded"
                  />
                  <button className="bg-blue-400 py-2 px-4 rounded hover:bg-blue-100">
                    Subscribe
                  </button>
                </div>
                <p className="text-sm mt-2 font-Montserrat font-normal text-[12px]">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-6 font-Montserrat font-bold text-sm text-gray-600">
          <p>Made With Love By Finland | All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
}
