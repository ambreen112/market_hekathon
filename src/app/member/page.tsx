import React from 'react';
import Navigation from '../components/navbar';
import Link from 'next/link';
import Footer from '../components/footer';
import Image from 'next/image';

const BecomeAMember = () => {
  return (
    <>

      <Navigation/>
      <div className="flex justify-center items-center mt-8">
        <Image
          className="ml-24"
          src="/logo.jpg"
          alt="Logo"
          width={200}
          height={200}
          layout="intrinsic" // Ensures the image maintains its aspect ratio
        />
      </div>


      <section className="bg-custom-light-blue-2 ">
        <h1 className="font-Roboto font-bold text-4xl text-center text-white">
          BECOME A MEMBER
        </h1>
        <p className="text-center text-lg text-white mt-4">
          Unlock exclusive benefits, discounts, and more! Join today and start enjoying the perks.
        </p>
        <div className="flex justify-center mt-8">
          <Link
            href="/signup" // Link to the sign-up page
            className="bg-custom-blue-1 text-white px-8 py-4 rounded-lg font-semibold hover:bg-custom-blue-2 transition duration-300"
          >
            Sign Up Now
          </Link>
        </div>
      </section>

     
      <section className="p-16 bg-gray-100">
        <h2 className="text-3xl text-center font-bold text-custom-light-blue-1">
          Why Become a Member?
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-custom-blue-1">Exclusive Discounts</h3>
            <p className="mt-4 text-gray-700">
              Members get access to exclusive discounts on all products.
            </p>
          </div>

         
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-custom-blue-1">Free Shipping</h3>
            <p className="mt-4 text-gray-700">
              Enjoy free shipping on all orders when you become a member.
            </p>
          </div>

        
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-custom-blue-1">Early Access</h3>
            <p className="mt-4 text-gray-700">
              Get early access to new product releases and limited-time offers.
            </p>
          </div>
        </div>
      </section>

    
      <section className="bg-custom-blue text-white p-16">
        <h2 className="text-3xl text-center font-bold">What Our Members Say</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <p className="italic">I love the discounts and early access to new products!</p>
            <p className="font-semibold mt-4">— Sarah L.</p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <p className="italic">Free shipping alone makes it worth becoming a member!</p>
            <p className="font-semibold mt-4">— John D.</p>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default BecomeAMember;
