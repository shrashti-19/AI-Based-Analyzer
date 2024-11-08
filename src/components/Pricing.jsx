import React from 'react';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Our Pricing Plans</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Trial Plan</h2>
          <p className="text-lg mb-4">Perfect for individuals starting out.</p>
          <p className="text-xl font-bold mb-6">$0.00 / month</p>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full">Select Plan</button>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Basic Plan</h2>
          <p className="text-lg mb-4">Perfect for starting out.</p>
          <p className="text-xl font-bold mb-6">$9.99 / month</p>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full">Select Plan</button>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Premium Plan</h2>
          <p className="text-lg mb-4">For professionals looking to enhance their resumes.</p>
          <p className="text-xl font-bold mb-6">$19.99 / month</p>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full">Select Plan</button>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Enterprise Plan</h2>
          <p className="text-lg mb-4">For businesses and teams needing bulk services.</p>
          <p className="text-xl font-bold mb-6">Contact for pricing</p>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
