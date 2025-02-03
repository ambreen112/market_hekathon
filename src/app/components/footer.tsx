import Image from "next/image" ;
import Link from "next/link";



 export default function Footer(){
    return(
        <section className="mt-4">
        <div className="flex items-center justify-around bg-slate-100 px-6 py-4">
        <p className="font-Montserrat font-bold text-[24px]">Bandage</p>
        <div className="flex items-center space-x-4">
        <Link href="https:www.facebook.com" >  <Image src={"/facebook.png"} alt="Facebook" width={26} height={26} /></Link>
        <Link href="https:www.instagrm.com" >  <Image src={"/instagram.png"} alt="Instagram" width={26} height={26} /></Link>
          <Link href="https:www.twitter.com" >  <Image src={"/twitter.png"} alt="Twitter" width={26} height={26} /></Link>
        </div>
       </div>
              
              <footer className=" text-black py-6">
          <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                  <div className="col-span-1">
                      <h2 className=" font-bold mb-4 font-Montserrat  text-base">Company Info</h2>
                      <ul className="font-Montserrat font-bold text-sm text-gray-600">
                          <li><Link href="#">About Us</Link></li>
                          <li><Link href="#">Carrier</Link></li>
                          <li><Link href="#">We are hiring</Link></li>
                          <li><Link href="#">Blog</Link></li>
                      </ul>
                  </div>
                  <div className="col-span-1">
                      <h2 className=" font-bold mb-4 font-Montserrat text-base">Legal</h2>
                      <ul className="font-Montserrat font-bold text-sm text-gray-600">
                      <li><Link href="#">About Us</Link></li>
                          <li><Link href="#">Carrier</Link></li>
                          <li><Link href="#">We are hiring</Link></li>
                          <li><Link href="#">Blog</Link></li>
                      </ul>
                  </div>
                  <div className="col-span-1">
                      <h2 className=" font-bold mb-4 font-Montserrat text-base">Features</h2>
                      <ul className="font-Montserrat font-bold text-sm text-gray-600">
                          <li><Link href="#">Business Marketing</Link></li>
                          <li><Link href="#">User Analytic</Link></li>
                          <li><Link href="#">Live Chat</Link></li>
                          <li><Link href="#">Unlimited Support</Link></li>
                      </ul>
                  </div>
                  <div className="col-span-1">
                      <h2 className="font-Montserrat text-base font-bold mb-4">Resources</h2>
                      <ul className="font-Montserrat font-bold text-sm text-gray-600">
                          <li><Link href="#">iOS & Android</Link></li>
                          <li><Link href="#">Watch a Demo</Link></li>
                          <li><Link href="#">Customers</Link></li>
                          <li><Link href="#">API</Link></li>
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
       </section>
    )
}