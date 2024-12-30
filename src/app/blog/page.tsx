'use client';

import React from 'react';

const blogs = [
  {
    id: 1,
    title: "Understanding the Basics of Web Development",
    description:
      "Learn the foundational concepts of web development, including HTML, CSS, and JavaScript, and how they come together to build modern websites.",
    link: "",
  },
  {
    id: 2,
    title: "Top 10 Tips for Writing Engaging Blog Posts",
    description:
      "Discover practical tips for creating blog content that captures your audience's attention and keeps them coming back for more.",
    link: "",
  },
  {
    id: 3,
    title: "The Future of Technology in 2024",
    description:
      "Explore emerging trends and innovations shaping the technology landscape in 2025 and beyond.",
    link: "",
  },
];

const Blog = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-5 sm:px-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Our Latest Blog Posts
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden border hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-5">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <a
                  href={blog.link}
                  className="text-blue-500 font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
