'use client'; // Mark the component as client-side rendered

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js

// CartItem interface to manage cart items
interface CartItem {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

export default function Hero4() {
  const [cart, setCart] = useState<CartItem[]>([]);  // Cart state to hold items
  const [showCart, setShowCart] = useState(false);   // For toggling the cart visibility

  // Example product
  const product = {
    id: "1",
    title: "Vita Classic Product",
    price: 16.48,
    imageUrl: "/hero9.png"
  };

  // Add item to cart
  const addToCart = () => {
    setCart((prevCart) => {
      const productExists = prevCart.find((item) => item.id === product.id);
      if (productExists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Toggle cart visibility
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  // Update cart in localStorage
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <section className="w-full relative bg-custom-dark-green flex items-center mt-4 px-4 sm:px-6 md:px-8 lg:px-16">
      {/* Content on the left */}
      <div className="flex flex-col justify-center items-start text-center md:text-left px-4 ml-0 sm:ml-10 md:ml-28 lg:ml-28">
        <h5 className="font-Montserrat font-normal text-[16px] sm:text-[18px] md:text-[20px] text-white mb-2">
          SUMMER 2020
        </h5>
        <h1 className="font-Montserrat text-[32px] sm:text-[44px] md:text-[58px] font-bold text-white mb-4">
          Vita Classic<br />Product
        </h1>
        <h4 className="font-Montserrat text-xs sm:text-sm md:text-base font-normal text-white mb-4 w-full">
          We knew how large objects will act, We know<br />how our object will act we know.
        </h4>
        <div className="w-full sm:w-[221px] h-[62px] flex items-center justify-center mb-4">
          <div className="flex gap-3 flex-wrap justify-center md:justify-start">
            <div>
              <p className="text-white font-Montserrat font-bold text-[20px] sm:text-[24px] md:text-[24px] mt-2">${product.price}</p>
            </div>
            <div className="ml-0 sm:ml-5 bg-custom-green rounded-sm mt-2 w-full sm:w-[150px] md:w-[184px] h-[52px] text-white font-Montserrat font-bold text-xs sm:text-sm md:text-sm">
              <button onClick={addToCart} className="text-white ml-0 sm:ml-12 mt-3 w-full sm:w-auto">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="ml-auto mt-4 sm:mt-0">
        <Image src={product.imageUrl} alt="hero" width={350} height={100} />
      </div>

      {/* Cart Icon */}
      <div
        className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-4 cursor-pointer"
        onClick={toggleCart}
      >
        <span>{cart.length}</span> 🛒
      </div>

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold text-center mb-4 text-lime-700">Your Cart</h2>
            <div className="space-y-4">
              {cart.length === 0 ? (
                <p>Your cart is empty!</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 relative">
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-md"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-sm text-gray-600">Price: ${item.price}</p>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="mt-6 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}
              </h3>
              <button
                onClick={toggleCart}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Proceed to Checkout Button with Link */}
      {cart.length > 0 && (
        <div className="fixed bottom-16 right-2 bg-green-500 text-white rounded-full p-4 cursor-pointer mb-6 hover:text-fuchsia-500 hover:bg-blue-500">
          <Link href="/checkout"
             className="px-1 py-2 rounded-lg text-white font-bold">
              Proceed to Checkout
            
          </Link>
        </div>
      )}
    </section>
  );
}
