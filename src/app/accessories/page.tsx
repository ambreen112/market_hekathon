'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Men() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Main content container */}
      <div className="max-w-screen-lg mx-auto text-center bg-white shadow-lg rounded-lg p-6 sm:p-8">
        
        {/* Image Section */}
        <div className="relative mb-6">
          <Image
            src="/filter-3.png"
            alt="man fashion"
            width={209}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Description */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Accessories&apos;s Fashion Collection
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 font-Roboto">
            Discover the latest trends and styles in accessories fashion. Our curated collection offers a wide range of stylish clothing that fits every occasion, from casual to formal wear. 
            Whether you are looking for timeless classics or trendy pieces, we have something for everyone.
          </p>
          <p className="text-base sm:text-lg text-gray-500">
            Shop now and elevate your style with our exclusive selections!
          </p>
        </div>

        {/* Button to Shop (using Link for client-side navigation) */}
        <div className="mt-6">
          <Link href="/shop">
            
              <button
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-full transition duration-300"
              >
                Shop Now
              </button>
            
          </Link>
        </div>
      </div>
    </div>
  );
}
