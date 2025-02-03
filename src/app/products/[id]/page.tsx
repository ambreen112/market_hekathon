'use client'

import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import Footer from '@/app/components/footer';
import Navigation from '@/app/components/navbar';
import Link from 'next/link';

// Product interface (same as before)
export interface Product {
  _id: string;
  title: string;
  quantity: number;
  price: number;
  tags: string[];
  description: string;
  discountPercentage?: number;
  imageUrl?: string;
}

// Fetch the product data by ID (Sanity query)
const fetchProductById = async (id: string): Promise<Product | null> => {
  try {
    const query = `*[_type == "product" && _id == $id][0]{
      _id,
      title,
      price,
      tags,
      description,
      discountPercentage,
      "imageUrl": productImage.asset->url
    }`;
    const data = await client.fetch(query, { id });
    return data || null;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
};

// Dynamic product page component
export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<Product[]>([]); // Cart state
  const [showCart, setShowCart] = useState(false); // Cart visibility state
  const { id } = params; // Extract product id from URL params

  // Fetch product data when the component mounts or when the `id` changes
  useEffect(() => {
    const fetchData = async () => {
      const fetchedProduct = await fetchProductById(id);
      setProduct(fetchedProduct);
    };
    fetchData();
  }, [id]);

  // Load cart from localStorage (if it exists)
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch (error) {
        console.error('Error parsing cart from localStorage:', error);
      }
    }
  }, []);

  // Update cart in localStorage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      try {
        localStorage.setItem('cart', JSON.stringify(cart));
      } catch (error) {
        console.error('Error saving cart to localStorage:', error);
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

  if (!product) {
    return <div>Loading...</div>; // Or a placeholder component
  }

  return (
    <section>
      <Navigation />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex justify-center">
          {product.imageUrl ? (
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={300}
              height={300}
              objectFit="cover"
              className="rounded-lg"
            />
          ) : (
            <div className="bg-gray-200 h-64 w-full flex justify-center items-center text-gray-500">
              No Image Available
            </div>
          )}
        </div>
        <div className="mt-6 bg-lime-100 p-6 rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold text-gray-900">{product.title}</h1>

          <p className="text-lg text-gray-600 mt-4">{product.description}</p>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-2xl font-semibold text-gray-800">${product.price}</span>

            {product.discountPercentage && (
              <div className="text-xl text-red-500 font-semibold">
                <span className="line-through text-gray-500">
                  ${(product.price + (product.price * product.discountPercentage) / 100).toFixed(2)}
                </span>
                <span> -{product.discountPercentage}%</span>
              </div>
            )}
          </div>

          <div className="mt-4">
            {product.discountPercentage && (
              <div className="bg-yellow-300 text-yellow-800 p-2 rounded-md text-center font-medium text-sm">
                Special Offer: {product.discountPercentage}% OFF
              </div>
            )}
          </div>

          <div className="mt-6 flex justify-center">
            <button
              onClick={() => addToCart(product)}
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Cart button */}
      <div
        className="fixed bottom-4 right-4 bg-blue-500 text-white rounded-full p-4 cursor-pointer"
        onClick={toggleCart}
      >
        <span>{cart.length}</span> 🛒
      </div>

      {/* Cart modal */}
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

      {/* Proceed to Checkout Button */}
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
