'use client';

import { useEffect, useState } from 'react';
import Checkout from '../components/checkout'; // Assuming Checkout is a separate component

// Define the correct type for CartItem (which extends Product)
interface Product {
  _id: string;
  title: string;
  imageUrl: string;
  price: number;
  tags: string[] | undefined;
}

interface CartItem extends Product {
  quantity: number;
}

const CheckoutPage = () => {
  const [cart, setCart] = useState<CartItem[]>([]);  // Updated to use CartItem[] instead of any[]

  // Load cart from localStorage when the page loads
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  return (
    <div>
      <h1 className="flex justify-center p-7 text-4xl font-bold font-Montserrat text-black">Checkout</h1>
      <Checkout cart={cart} />
    </div>
  );
};

export default CheckoutPage;
