import React from "react";
import Link from "next/link";


export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Brand Name or Logo */}
            <div className="text-lg font-semibold">My Blog</div>
  
            {/* Navigation Links */}
            <nav className="flex space-x-6">
              <Link
                href="/"
                className="hover:text-gray-400 transition duration-200"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-gray-400 transition duration-200"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="hover:text-gray-400 transition duration-200"
              >
                Contact
              </Link>
            </nav>
          </div>
  
          {/* Divider */}
          <div className="border-t border-gray-700 my-4"></div>
  
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <p className="text-sm">
              &copy; {new Date().getFullYear()} My Blog. All rights reserved.
            </p>
  
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition duration-200"
              >
                <i className="fab fa-facebook"></i> {/* FontAwesome Icon */}
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition duration-200"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition duration-200"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  