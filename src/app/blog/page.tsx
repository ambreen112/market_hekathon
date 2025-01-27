'use client'; // Mark the component as client-side rendered

import Image from "next/image";

import Navigation1 from "../components/navbar1";
import { useState, useEffect } from "react";
import Footer from "../components/footer";
import Link from "next/link";
import { client } from "@/sanity/lib/client";




// Interface for Product
export interface Product {
  _id: string;
  title: string;
  quantity: number;
  price: number;
  tags: string[];
  description: string;
  discountPercentage?: number;
  imageUrl?: string; // This corresponds to the "imageUrl" alias in your query
}

// Fetch products from Sanity
const fetchProducts = async (): Promise<Product[]> => {
  try {
    const query = `*[_type == "product"][0..23]{
      _id,
      title,
      price,
      tags,
      description,
      discountPercentage,
      "imageUrl": productImage.asset->url
    }`;

    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.log("Error fetching products:", error);
    return [];
  }
};

export default function Blog() {
  const [cart, setCart] = useState<Product[]>([]); // Cart state to hold items
  const [data, setData] = useState<Product[]>([]); // Product data from Sanity
  const [showCart, setShowCart] = useState(false); // For toggling the cart visibility

  



  // Fetch product data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await fetchProducts();
      setData(fetchedData);
    };
    fetchData();
  }, []);

  // Load cart from localStorage (if it exists)
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error);
      }
    }
  }, []);

  // Update cart in localStorage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      try {
        localStorage.setItem("cart", JSON.stringify(cart));
      } catch (error) {
        console.error("Error saving cart to localStorage:", error);
      }
    }
  }, [cart]);

  // Add item to cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const productExists = prevCart.find((item) => item._id === product._id);
      if (productExists) {
        return prevCart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (productId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== productId));
  };

  // Toggle cart visibility
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <section>
      <Navigation1 />
      <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
        <div className="mb-8 flex flex-wrap justify-between md:mb-16">
          <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
            <h1 className="mb-4 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 sm:text-5xl md:mb-8 md:text-6xl shadow-lg drop-shadow-xl">
              Explore New Arrival
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((product) => (
  <div key={product._id} className="bg-white border rounded-lg shadow-md">
    <div className="relative h-64 w-full">
    {product.imageUrl ? (
    <Image
      src={product.imageUrl} // Corrected from product.imageUr to product.imageUrl
      alt={product.title}
      layout="fill"
      objectFit="cover"
      className="rounded-t-lg"
    />
  ) : (
        <div className="bg-gray-200 flex justify-center items-center h-full text-gray-500">
          No Image
        </div>
      )}
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold text-gray-900">{product.title}</h3>
      <p className="text-green-600 mt-2 text-base font-sans font-medium">
        {product.tags?.length > 0 ? product.tags.join(", ") : "No Tags"}
      </p>
      <p className="text-sm text-gray-800 mt-2 line-clamp-3">{product.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-lg font-semibold text-gray-800">${product.price}</span>
        <button
          onClick={() => addToCart(product)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
))}

        
        </div>
      </section>

      <div
        className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-4 cursor-pointer"
        onClick={toggleCart}
      >
        <span>{cart.length}</span> 🛒
      </div>

      {showCart && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold text-center mb-4 text-lime-700">Your Cart</h2>
            <div className="space-y-4">
              {cart.length === 0 ? (
                <p>Your cart is empty!</p>
              ) : (
                cart.map((item) => (
                  <div key={item._id} className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                      {item.imageUrl ? (
                        <div className="w-16 h-16 relative">
                          <Image
                            src={item.imageUrl}
                            alt={item.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                          />
                        </div>
                      ) : (
                        <div className="w-16 h-16 bg-gray-200 flex justify-center items-center text-gray-500">
                          No Image
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <p className="text-sm text-gray-600">Price: ${item.price}</p>
                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-red-500 hover:text-red-700"
                      type="button"
                    >
                      Remove
                    </button>
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

      {cart.length > 0 && (
        <div className="fixed bottom-16 right-2 bg-green-500 text-white rounded-full p-4 cursor-pointer mb-6 hover:text-fuchsia-500 hover:bg-blue-500">
          <Link href="/checkout" className="px-1 py-2 rounded-lg text-white font-bold">
            Proceed to Checkout
          </Link>
        </div>
      )}

      <Footer />
    </section>
  );
}
