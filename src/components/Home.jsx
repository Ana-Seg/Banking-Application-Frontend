import React from 'react';
import { Link } from 'react-router-dom';
import bank from "../assets/bank.png";

const Home = () => {
  return (
    <div className='p-4 max-w-[1000px] mx-auto mt-16 bg-gray-100 rounded-lg shadow-lg'>
      <div className='text-center'>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl my-8 font-bold'>
          Welcome to <span className='text-blue-800'>BadBank</span>
        </h1>
        <p className='text-lg sm:text-xl mb-8'>
          Your trusted partner for all your banking needs. Experience seamless banking with us!
        </p>
        <Link to="/register" className='bg-blue-800 text-white text-lg py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300'>
          Get Started
        </Link>
      </div>
      <div className='mt-8'>
        <img src={bank} alt="bank" className="rounded-2xl h-auto w-11/12 sm:w-3/4 max-w-[600px] mx-auto object-cover shadow-md" />
      </div>
      <div className='mt-8 text-center'>
        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4'>Why Choose Us?</h2>
        <ul className='list-disc list-inside text-base sm:text-lg'>
          <li>Secure and Safe Transactions</li>
          <li>24/7 Customer Support</li>
          <li>Easy-to-use Mobile App</li>
          <li>Competitive Interest Rates</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;

