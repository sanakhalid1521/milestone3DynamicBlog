'use client';

import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5 sm:px-20">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 border-b pb-3">
          Contact Us
        </h1>
        <p className="text-gray-700 mb-6">
          We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us.
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-600 font-extrabold mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-600 font-extrabold mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-600 font-extrabold mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Type your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
