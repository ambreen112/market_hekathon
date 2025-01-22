'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    console.log("Menu toggled:", isMenuOpen);
  }, [isMenuOpen]);

  return (
    < section className="overflow-hidden">
      {/* Top Section - Contact and Social Media Links */}
      <nav className="bg-black w-full flex flex-col sm:flex-row justify-between items-center px-4 py-2 sm:px-16 sm:py-1">
        {/* Contact Info Section */}
        <div className="flex items-center justify-around w-full sm:w-auto gap-8 text-center">
          <div className="ml-2">
            <button className="flex items-center text-white text-sm font-bold font-Montserrat" type="button">
              <Image className="align-middle" src="/Vector (6).png" alt="phone" width={16} height={16} />
              (225)555-0118
            </button>
          </div>
          <div className="mr-9">
            <button className="flex items-center text-white text-sm font-bold font-Montserrat" type="button">
              <Image className="text-white" src="/Vector (7).png" alt="email" width={16} height={12} />
              michelle.rivera@example.com
            </button>
          </div>
        </div>

        {/* Promotional Message */}
        <div className="w-full text-white text-sm font-bold text-center py-3 sm:w-auto px-7">
          <p className="font-Montserrat">Follow Us and get a chance to win 80% off</p>
        </div>

        {/* Social Media Links */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center text-white py-3">
          <h6 className="font-Montserrat font-bold text-sm p-3">Follow Us :</h6>
          <div className="inline-flex space-x-3">
    <Link href="https://help.instagram.com"><Image src="/a.png" alt="a" width={26} height={26} /></Link>
    <Link href="https:www.youtube.com" ><Image src="/b.png" alt="b" width={26} height={26} /></Link>
    <Link href="https:www.facebook.com" >  <Image src="/c.png" alt="c" width={26} height={26} /></Link>
    <Link href="https:www.twitter.com" > <Image src="/bird.png" alt="bird" width={26} height={26} /></Link>
          </div>
        </div>
      </nav>

      {/* Main Navigation Bar */}
      <div className="w-full h-[58px] flex items-center bg-white px-4 sm:px-8">
        <p className="font-Montserrat font-bold text-2xl text-black ml-8">Bandage</p>

        {/* Mobile Menu Hamburger Icon */}
        <div className="flex items-center ml-auto sm:hidden">
          <button onClick={toggleMenu} className="text-black" aria-label="Toggle navigation menu">
            <Image src="/burger.png" alt="menu" width={30} height={30} />
          </button>
        </div>

        {/* Main Menu (for large screens) */}
        <nav className="hidden sm:flex items-center justify-between w-full ml-8">
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-black text-sm font-Montserrat">Home</Link>
            <Link href="/shop" className="text-black text-sm font-Montserrat flex items-center">
              Shop
              <Image src="/arrow.png" alt="arrow" width={5.71} height={28} />
            </Link>
            <Link href="/about" className="text-black text-sm font-Montserrat">About</Link>
            <Link href="/blog" className="text-black text-sm font-Montserrat">Blog</Link>
            <Link href="/contact" className="text-black text-sm font-Montserrat">Contact</Link>
            <Link href="/team" className="text-black text-sm font-Montserrat">Pages</Link>
          </div>

          {/* Right Side Items: Login & Icons */}
          <div className="flex items-center space-x-8">
          <nav className="flex items-center">
  <Link href="/login" className="flex items-center text-white">
    <Image src="/but.png" alt="button" width={12} height={12} />
    <p className="text-custom-blue font-bold text-sm font-Montserrat ml-2">
      Login/
    </p>
  </Link>
  <Link href="/register" className="text-custom-blue font-bold">
    Register
  </Link>
</nav>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <Image src="/li-1.png" alt="lens" width={46} height={46} />
              <Image src="/li-2.png" alt="lens" width={46} height={46} />
              <Image src="/li-3.png" alt="lens" width={46} height={46} />
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Menu (Toggleable) */}
      <div className={`sm:hidden ${isMenuOpen ? "block" : "hidden"} bg-white p-4`}>
        <nav className="flex flex-col space-y-4">
          <Link href="/" className="text-black text-sm font-Montserrat">Home</Link>
          <Link href="/shop" className="text-black text-sm font-Montserrat">Shop</Link>
          <Link href="/about" className="text-black text-sm font-Montserrat">About</Link>
          <Link href="/blog" className="text-black text-sm font-Montserrat">Blog</Link>
          <Link href="/contact" className="text-black text-sm font-Montserrat">Contact</Link>
          <Link href="/team" className="text-black text-sm font-Montserrat">Pages</Link>
        </nav>
      </div>

    
    </section>
  );
}
