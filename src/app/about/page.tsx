
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5 sm:px-20">
      <div className="max-w-4xl mx-auto bg-gray-500 shadow-lg rounded-lg p-6 md:p-10">
        <h1 className="text-4xl font-bold text-black mb-4 border-b pb-3">
          About Us
        </h1>
        <p className="text-gray-50 text-xl leading-relaxed">
          Welcome to our blog! Our mission is to provide insightful, engaging, and informative content to our readers. Whether you’re here to explore trends, gain knowledge, or just enjoy a good read, our blog covers a variety of topics tailored to inspire and educate.
        </p>
        <p className="mt-4 text-gray-50 text-xl leading-relaxed">
          Our team is passionate about sharing stories, ideas, and expertise to help you stay informed and inspired. We believe in the power of words to connect, motivate, and spark curiosity. Thank you for being a part of our journey!
        </p>
        <p className="mt-4 text-black leading-relaxed">
          Stay connected and explore new horizons with us as we continue to grow and bring you quality content. Happy reading!
        </p>
      </div>
    </div>
  );
};

export default About;
