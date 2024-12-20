import React from 'react';
import { Link } from 'react-router-dom';
import bank from "../assets/bank.png";

const Home = () => {
  return (
    <div className='p-4 max-w-[1200px] mx-auto mt-16 bg-gray-100 rounded-lg shadow-lg max-h-screen'>
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

      <div className='mt-2'>
        <img
          src={bank}
          alt="bank"
          className="rounded-2xl h-full mx-auto object-cover shadow-md"
        />
      </div>

      <div className='text-center mt-2'>
        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2 mb-4'></h2>
        <ul className='flex gap-6 text-black mt-2 mb-4'>
          <li>Secure and Safe Transactions</li>
          <li>24/7 Customer Support</li>
          <li>Easy-to-use Mobile App</li>
          <li>Competitive Interest Rates</li>
          <li>All your Banking Needs in one Place </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;

