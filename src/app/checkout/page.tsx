'use client';


import { useEffect, useState } from 'react';
import Checkout from '../components/checkout';
import { client } from "@/sanity/lib/client"; 


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
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const submitOrder = async (orderDetails: { firstName: string; lastName: string; email: string; phoneNumber: string }) => {
    setIsLoading(true);
    setError(null);

    const orderData = {
      firstName: orderDetails.firstName,
      lastName: orderDetails.lastName,
      email: orderDetails.email,
      phoneNumber: orderDetails.phoneNumber,
      items: cart.map(item => ({
        itemName: item.title,
        quantity: item.quantity,
        price: item.price,
      })),
      totalPrice: cart.reduce((total, item) => total + item.price * item.quantity, 0),
      orderStatus: 'pending', // Initial order status
    };

    console.log('Order Data:', orderData);

    try {
      await client.create({
        _type: 'order',
        ...orderData,
      });

      alert('Order placed successfully!');
      setCart([]); // Optionally clear the cart after submitting the order
      localStorage.removeItem('cart');
    } catch (error) {
      setError('Failed to place the order. Please try again.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h1 className="flex justify-center p-7 text-4xl font-bold font-Montserrat text-black">Checkout</h1>
      <Checkout cart={cart} onCheckout={submitOrder} />
      {error && <p className="text-red-500">{error}</p>}
      {isLoading && <p>Placing order...</p>}
    </div>
  );
};

export default CheckoutPage;
