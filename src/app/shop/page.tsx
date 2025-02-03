
import Image from "next/image";
import Link from "next/link";




import Navigation1 from "../components/navbar1";



export default function Shop(){
    return(
        <>
    <Navigation1/>

    {/* Shop */}
<div className="w-full h-auto bg-custom-light-gray py-4">
  <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
    {/* Shop Title */}
    <div className="w-full sm:w-auto flex justify-center sm:justify-start">
      <h2 className="font-Montserrat font-bold text-[24px]">Shop</h2>
    </div>

    {/* Navigation Path */}
    <div className="w-full sm:w-auto flex items-center justify-center sm:justify-end gap-2 mt-2 sm:mt-0">
      <p className="font-Montserrat font-bold text-sm text-center sm:text-left">Home</p>
      <Image className="object-contain" src="/arrow1.png" alt="arrow" width={8.62} height={16} />
      <h6 className="font-Montserrat font-bold text-sm text-gray-400">Shop</h6>
    </div>
  </div>
</div>


{/* List of Pictures Section */}
<div className="w-full h-auto bg-custom-light-gray py-8">
  <div className="max-w-screen-xl mx-auto px-4">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center items-center">
      {/* Individual Image Item */}
      <div className="relative w-full h-[223px]">
        <Image src="/f1.png" alt="Cloth 1" width={205} height={223} objectFit="cover" />
        <div className="absolute bottom-5 left-5 text-white">
          <h6 className="font-Montserrat font-bold text-base">CLOTHS</h6>
          <h6 className="font-Montserrat font-normal text-sm">5 items</h6>
        </div>
      </div>
      
      <div className="relative w-full h-[223px]">
        <Image src="/g2.png" alt="Cloth 2" width={205} height={223} objectFit="cover" />
        <div className="absolute bottom-5 left-5 text-white">
          <h6 className="font-Montserrat font-bold text-base">CLOTHS</h6>
          <h6 className="font-Montserrat font-normal text-sm">5 items</h6>
        </div>
      </div>

      <div className="relative w-full h-[223px]">
        <Image src="/g3.png" alt="Cloth 3" width={205} height={223} objectFit="cover" />
        <div className="absolute bottom-5 left-5 text-white">
          <h6 className="font-Montserrat font-bold text-base">CLOTHS</h6>
          <h6 className="font-Montserrat font-normal text-sm">5 items</h6>
        </div>
      </div>

      <div className="relative w-full h-[223px]">
        <Image src="/g4.png" alt="Cloth 4" width={205} height={223} objectFit="cover" />
        <div className="absolute bottom-5 left-5 text-white">
          <h6 className="font-Montserrat font-bold text-base">CLOTHS</h6>
          <h6 className="font-Montserrat font-normal text-sm">5 items</h6>
        </div>
      </div>

     
      </div>
    </div>
  </div>


{/* View Section */}
<div className="w-full h-auto flex items-center py-8 px-4">
  <div className="max-w-screen-xl mx-auto flex justify-between items-center flex-col sm:flex-row gap-4">
    {/* Showing Results */}
    <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto">
      <p className="font-Montserrat font-bold text-sm text-gray-600">
        Showing all 12 results
      </p>
    </div>

    {/* Views Button */}
    <div className="flex items-center w-full sm:w-auto justify-center sm:justify-start gap-2">
      <p className="font-Montserrat font-bold text-sm text-gray-600">Views</p>
      <div className="flex">
        <Image className="object-contain" src="/btn1.png" alt="btn" width={46} height={46} />
        <Image className="object-contain" src="/btn2.png" alt="btn" width={46} height={46} />
      </div>
    </div>

    {/* Sort and Filter Buttons */}
    <div className="flex w-full sm:w-auto justify-center sm:justify-start gap-4">
      <div className="relative w-full sm:w-auto">
        <button className="font-Roboto font-normal text-[15px] text-gray-600 px-10 py-3 border border-gray-400 rounded-md bg-custom-light-gray">
          Popularity
        </button>
        <Image
          className="object-contain absolute bottom-3 left-28 rotate-90 text-gray-900"
          src="/arrow1.png"
          alt="arrow"
          width={8}
          height={8}
        />
      </div>
      <div className="w-full sm:w-auto">
        <button className="font-Montserrat font-normal text-[16px] text-gray-600 px-10 py-3 border border-gray-600 rounded-md bg-custom-blue-0">
          Filter
        </button>
      </div>
    </div>
  </div>
</div>


{/* Language Section */}
<div className="w-full h-[175px] bg-custom-light-gray flex justify-center items-center flex-wrap gap-10 sm:gap-20 p-4">
  <div className="flex justify-center items-center">
 <Link href="https://www.hoolisoftware.com">  <Image src="/fa1.png" alt="fa1" width={76} height={72} /></Link>
  </div>
  <div className="flex justify-center items-center">
  <Link href="https://www.lyft.com"> <Image src="/fa2.png" alt="fa2" width={76} height={72} /></Link>
  </div>
  <div className="flex justify-center items-center">
 <Link href="#"> <Image src="/fa3.png" alt="fa3" width={76} height={72} /></Link>
  </div>
  <div className="flex justify-center items-center">
 <Link href="https://stripe.com">    <Image src="/fa4.png" alt="fa4" width={76} height={72} /></Link>
  </div>
  <div className="flex justify-center items-center">
  <Link href="https://aws.amazon.com">   <Image src="/fa5.png" alt="fa5" width={76} height={72} /></Link>
  </div>
  <div className="flex justify-center items-center">
<Link href="https://discord.com/">   <Image src="/fa6.png" alt="fa6" width={76} height={72} /></Link>
   
  </div>
</div>


 <div className="flex items-center justify-around bg-slate-100 px-6 py-4 mt-28">
        <p className="font-Montserrat font-bold text-[24px]">Bandage</p>
        <div className="flex items-center space-x-4">
          <Image src={"/facebook.png"} alt="Facebook" width={26} height={26} />
          <Image src={"/instagram.png"} alt="Instagram" width={26} height={26} />
          <Image src={"/twitter.png"} alt="Twitter" width={26} height={26} />
        </div>
       </div>
              
              <footer className=" text-black py-6">
          <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                  <div className="col-span-1">
                      <h2 className=" font-bold mb-4 font-Montserrat  text-base">Company Info</h2>
                      <ul className="font-Montserrat font-bold text-sm text-gray-600">
                          <li><a href="#">About Us</a></li>
                          <li><a href="#">Carrier</a></li>
                          <li><a href="#">We are hiring</a></li>
                          <li><a href="#">Blog</a></li>
                      </ul>
                  </div>
                  <div className="col-span-1">
                      <h2 className=" font-bold mb-4 font-Montserrat text-base">Legal</h2>
                      <ul className="font-Montserrat font-bold text-sm text-gray-600">
                          <li><a href="#">About Us</a></li>
                          <li><a href="#">Carrier</a></li>
                          <li><a href="#">We are hiring</a></li>
                          <li><a href="#">Blog</a></li>
                      </ul>
                  </div>
                  <div className="col-span-1">
                      <h2 className=" font-bold mb-4 font-Montserrat text-base">Features</h2>
                      <ul className="font-Montserrat font-bold text-sm text-gray-600">
                          <li><a href="#">Business Marketing</a></li>
                          <li><a href="#">User Analytic</a></li>
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
                <div className="flex items-center ">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-auto border border-gray-300 p-2 rounded"
                  />
                  <button className="bg-blue-400 py-2 px-1 rounded hover:bg-blue-100">
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


       {/* Footer Section */}
<div className="w-full h-[74px] mt-6 bg-custom-light-gray">
  <div className="w-full h-[74px] flex justify-center">
    <div className="w-full max-w-[1050px] h-[74px] flex justify-between px-4 md:px-8">
      <p className="font-Montserrat font-bold text-sm text-gray-600 mt-6">Made With Love By Finland All Right Reserved</p>
    </div>
  </div>
</div>

{/* Products Section */}
<div className="w-full h-auto mt-10">
  {/* First Row */}
  <div className="w-full flex flex-wrap justify-center gap-6 sm:gap-9">
    {[...Array(12)].map((_, index) => (
      <div key={index} className="flex flex-col items-center justify-center w-full sm:w-[239px]">
        <Image src={`/boy${index + 1}.png`} alt="style" width={239} height={300} />
        <h5 className="font-Montserrat font-bold text-base mt-5">Graphic Design</h5>
        <p className="font-Montserrat font-bold text-sm text-gray-500 mt-4">English Department</p>
        <div className="w-[108px] h-[34px] flex mt-4">
          <h5 className="font-Montserrat font-bold text-base text-gray-500">$16.58</h5>
          <h5 className="font-Montserrat font-bold text-base text-green-600">$6.48</h5>
        </div>
        <div>
          <Image className="mt-4" src={"/dot.png"} alt="dot" width={82.23} height={16} />
        </div>
      </div>
    ))}
  </div>

  {/* Pagination Section */}
  <div className="w-full flex justify-center mt-10">
    <ul className="font-Montserrat text-sm font-bold text-custom-gray flex justify-center gap-4">
      <li className="bg-white border border-gray-300 rounded-md hover:bg-gray-50 px-4 py-2">First</li>
      <li className="text-custom-light-blue-1 bg-white border border-gray-300 rounded-md hover:bg-gray-50 px-4 py-2">1</li>
      <li className="bg-custom-light-blue-1 text-white border border-gray-300 rounded-md hover:bg-gray-50 px-4 py-2">2</li>
      <li className="text-custom-light-blue-1 bg-white border border-gray-300 rounded-md hover:bg-gray-50 px-4 py-2">3</li>
      <li className="text-custom-light-blue-1 bg-white border border-gray-300 rounded-md hover:bg-gray-50 px-4 py-2">Next</li>
    </ul>
  </div>
</div>




</>


)
}