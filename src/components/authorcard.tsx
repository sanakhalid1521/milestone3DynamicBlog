import React from "react";
import Image from "next/image";

export default function AuthorCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
      {/* Author Information */}
      <div className="flex items-center">
        <Image
          src="/images/profilepic.jpg"
          alt="Author Image"
          width={64}
          height={64}
          className="rounded-full object-cover border-2 border-red-500"
        />
        <div className="ml-4">
          <h3 className="text-xl font-bold">Sana Khalid</h3>
          <p className="text-slate-500">BSIT | Web Developer & UI Expert</p>
        </div>
      </div>

      {/* Expanded Experience Description */}
      <p className="mt-4 text-black leading-relaxed">
        I have a Bachelor’s degree in Information Technology and specialize in developing modern web applications. 
        My expertise lies in creating user-friendly interfaces and delivering dynamic user experiences. 
        I have extensive experience with technologies like Next.js, React, and Tailwind CSS, which I use to design 
        visually appealing and highly functional websites.
      </p>
      <p className="mt-2 text-black leading-relaxed">
        My skillset includes front-end development, UI/UX design, and building responsive, accessible web designs. 
        I am passionate about innovation in web development and strive to create scalable, high-performance solutions 
        that meet the needs of modern users.
      </p>

      {/* Social Media Links */}
      <div className="mt-6 flex space-x-3">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-white bg-gray-700 hover:bg-blue-600 rounded shadow"
        >
          Twitter
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-white bg-gray-700 hover:bg-blue-600 rounded shadow"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-white bg-gray-700 hover:bg-blue-600 rounded shadow"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
