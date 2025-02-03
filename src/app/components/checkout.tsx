'use client';
import { useState } from 'react';
import Image from 'next/image';

// Define the Product and CartItem interfaces
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

interface CheckoutProps {
  cart: CartItem[];
  onCheckout: (orderDetails: { firstName: string; lastName: string; email: string; phoneNumber: string }) => Promise<void>;
}

const Checkout: React.FC<CheckoutProps> = ({ cart, onCheckout }) => {
  const [loading, setLoading] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Form fields state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('');

  // Payment state
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash'>('card');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  // Updated checkout handler
  const handleCheckout = async () => {
    if (!name || !email || !phone || !area) {
      setErrorMessage('Please fill in all customer details.');
      return;
    }

    if (paymentMethod === 'card' && (!cardDetails.cardNumber || !cardDetails.expiryDate || !cardDetails.cvv)) {
      setErrorMessage('Please fill in all card details.');
      return;
    }

    setLoading(true);
    setErrorMessage(null);

    try {
      // Prepare order details to pass to the onCheckout function
      const orderDetails = {
        firstName: name.split(' ')[0], // You can adjust this logic for first name and last name
        lastName: name.split(' ')[1] || '',
        email,
        phoneNumber: phone,
      };

      // Call the onCheckout function passed from the parent component (CheckoutPage)
      await onCheckout(orderDetails);

      setOrderSuccess(true);
      // Clear the cart from localStorage and update state
      localStorage.removeItem('cart');
    } catch (error) {
      console.error('Error during checkout:', error);
      setErrorMessage('An error occurred while processing the order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-6">Review Your Cart</h1>

        {/* Cart items */}
        <div className="space-y-6">
          {cart.length === 0 ? (
            <p className="text-center text-xl text-gray-500">Your cart is empty!</p>
          ) : (
            cart.map((item) => (
              <div key={item._id} className="flex justify-between items-center p-4 border-b border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition duration-300">
                <div className="flex items-center space-x-4">
                  {/* Product Image */}
                  <div className="w-16 h-16 relative">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={50}
                      height={50}
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <span className="text-lg font-semibold text-gray-900">${item.price * item.quantity}</span>
              </div>
            ))
          )}
        </div>

        {/* Customer Info Form */}
        <div className="mt-6 space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">Enter Your Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                id="phone"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="area" className="block text-sm font-medium text-gray-700">Area/Address</label>
              <input
                id="area"
                type="text"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>
        </div>

        {/* Payment Method Selection */}
        <div className="mt-6 space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">Select Payment Method</h3>
          <div className="flex items-center space-x-4">
            <label>
              <input
                type="radio"
                value="card"
                checked={paymentMethod === 'card'}
                onChange={() => setPaymentMethod('card')}
                className="mr-2"
              />
              Credit/Debit Card
            </label>
            <label>
              <input
                type="radio"
                value="cash"
                checked={paymentMethod === 'cash'}
                onChange={() => setPaymentMethod('cash')}
                className="mr-2"
              />
              Cash on Delivery
            </label>
          </div>

          {/* Card Payment Form */}
          {paymentMethod === 'card' && (
            <div className="mt-4 space-y-4">
              <div>
                <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number</label>
                <input
                  id="cardNumber"
                  type="text"
                  value={cardDetails.cardNumber}
                  onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date</label>
                  <input
                    id="expiryDate"
                    type="text"
                    value={cardDetails.expiryDate}
                    onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV</label>
                  <input
                    id="cvv"
                    type="text"
                    value={cardDetails.cvv}
                    onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Total and Checkout Button */}
        <div className="mt-6 flex justify-between items-center bg-gray-50 py-4 px-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900">Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
          <button
            onClick={handleCheckout}
            className={`px-6 py-3 text-white font-semibold rounded-lg transition duration-300 ${loading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
            disabled={loading}
          >
            {loading ? 'Processing... ⏳' : 'Proceed to Payment'}
          </button>
        </div>

        {/* Order Success or Error Messages */}
        {errorMessage && (
          <div className="mt-4 bg-red-200 text-red-900 p-4 rounded-lg">
            <p className="text-lg font-medium">{errorMessage}</p>
          </div>
        )}
        {orderSuccess && (
          <div className="mt-4 bg-lime-200 text-lime-900 p-4 rounded-lg">
            <p className="text-lg font-medium">Order placed successfully! 🎉</p>
            <p className="text-sm">Your order is being processed. Thank you for shopping with us!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
