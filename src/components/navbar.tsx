"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTimer = () => {
      const currentDate = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };

      setCurrentDateTime(
        currentDate.toLocaleDateString("en-US", options) +
          " " +
          currentDate.toLocaleTimeString("en-US", { hour12: false })
      );
    };

    updateDateTimer();
    const intervalId = setInterval(updateDateTimer, 1000);

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return (
    <header className="text-gray-400 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <div className="flex-1 text-black">
          <span>{currentDateTime}</span>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-black justify-center">
          <Link
            href="/"
            className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105"
          >
            About
          </Link>

          <Link
            href="/blog"
            className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105"
          >
            Blog
          </Link>

          <Link
            href="/contact"
            className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105"
          >
            Contact
          </Link>
        </nav>
        <div>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105"
          >
            <span className="mr-2">GitHub</span>
            {/* Arrow Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 12H3.75m13.5 0l-4.5 4.5m4.5-4.5l-4.5-4.5"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
