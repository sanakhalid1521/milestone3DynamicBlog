'use client'
import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import CommitFunction from "@/components/commentfunction";
import AuthorCard from "@/components/authorcard";
import { title } from "process";


interface Post {
  id: string;
  title: string;
  description: string;
  img: string;
}
const posts: Post[] = [
  {
    id: "1",
    title: "Next-js",
    description:
      "Next.js is an open-source React framework that offers advanced capabilities like server-side rendering (SSR), static site generation (SSG), and incremental static regeneration (ISR). These features allow developers to create highly optimized and scalable web applications with improved performance and SEO. With its intuitive API and rich ecosystem, Next.js simplifies complex development tasks and accelerates the creation of modern web solutions",
    img: "/images/1.png",
  },
  {
    id: "2",
    title: "React",
    description:
      "React is a popular JavaScript library developed by Facebook for building dynamic and responsive user interfaces. By leveraging its component-based architecture, developers can create reusable UI components, manage state efficiently, and build interactive web applications with ease. Its declarative syntax and vast ecosystem make React a preferred choice for both beginners and experienced developers",
    img: "/images/2.png",
  },
  {
    id: "3",
    title: "Static Route",
    description:
      "Static routes are fixed, predefined paths within an application that provide predictable and consistent navigation for users. They are essential for building user-friendly interfaces, as they ensure that critical pages, such as home, about, or contact, are always accessible at the same URL. By understanding and implementing static routes, developers can enhance the overall usability and reliability of their applications",
    img: "/images/3.png",
  },
  {
    id: "4",
    title: "Dynamic Route",
    description:
      "Dynamic routing introduces flexibility into application navigation by enabling routes that can adapt to changing parameters or data. With dynamic routes, developers can design applications that handle personalized content, such as user profiles, product pages, or search results. This approach improves scalability and allows for seamless data integration across the application",
    img: "/images/4.png",
  },
  {
    id: "5",
    title: "Components",
    description:
      "Components are the foundational building blocks of React applications, enabling developers to break down complex interfaces into manageable, reusable parts. By leveraging components, you can create modular and maintainable code that promotes consistency and scalability across your projects. Understanding components is crucial for developing modern, efficient web applications",
    img: "/images/5.png",
  },
  {
    id: "6",
    title: "Static Site Rendering",
    description:
      "Static site rendering is a powerful technique where HTML pages are pre-rendered at build time, resulting in faster load times and improved SEO. This approach is particularly beneficial for content-driven websites, as it ensures that users receive fully rendered pages without relying on client-side JavaScript. Explore how to implement static rendering for a superior user experience",
    img: "/images/6.png",
  },
  {
    id: "7",
    title: "Static Site Rendering",
    description:
      "Static site rendering focuses on pre-generating HTML content during the build process, offering users a seamless and fast browsing experience. By delivering pre-rendered pages directly from the server, this method reduces load times and enhances performance, making it an ideal choice for static websites or pages with minimal interactivity",
    img: "/images/7.png",
  },
  {
    id: "8",
    title: "Client-side Rendering",
    description:
      "Client-side rendering (CSR) dynamically loads and renders content in the browser using JavaScript. This approach allows for highly interactive and engaging user experiences, as the application updates content without requiring a full page reload. CSR is particularly suited for modern single-page applications where responsiveness is key",
    img: "/images/8.png",
  },
  {
    id: "9",
    title: "Parallel Routing",
    description:
      "Parallel routing is an advanced navigation technique that allows multiple routes to be rendered simultaneously. This approach is useful for applications that require independent navigation within different sections, such as dashboards or split-screen layouts. Implementing parallel routing can significantly improve user experience by enabling seamless multitasking",
    img: "/images/9.png",
  },
  {
    id: "10",
    title: "Hooks (useState)",
    description:
      "The useState hook is a fundamental feature in React that allows developers to manage state within functional components. By leveraging useState, you can dynamically update and control application data, enabling more interactive and responsive user interfaces. Mastering useState is essential for any React developer",
    img: "/images/10.png",
  },
  {
    id: "11",
    title: "Hooks (useEffect)",
    description:
      "The useEffect hook in React is designed for handling side effects, such as data fetching, DOM updates, or subscriptions. It provides developers with fine-grained control over component lifecycles, ensuring that your application performs efficiently and responds dynamically to changes",
    img: "/images/11.png",
  },
  {
    id: "12",
    title: "Parameters (params)",
    description:
      "Parameters are an essential feature in routing that enable dynamic data passing between pages or components. By using parameters, you can create flexible and personalized experiences for users, such as displaying product details, user profiles, or search results based on dynamic inputs",
    img: "/images/12.png",
  },
  {
    id: "13",
    title: "Properties (props)",
    description:
      "Props, short for properties, are a fundamental concept in React that allow data to be passed between components. By using props, developers can share information, manage state hierarchies, and create dynamic and reusable UI elements, simplifying the application architecture",
    img: "/images/13.png",
  },
  {
    id: "14",
    title: "Application Programming Interface (API)",
    description:
      "APIs, or Application Programming Interfaces, enable seamless communication between different software systems. They provide a standardized way for applications to request and exchange data, making APIs essential for integrating third-party services and building scalable, data-driven applications",
    img: "/images/14.png",
  },
  {
    id: "15",
    title: "Figma",
    description:
      "Figma is a cutting-edge design tool that empowers teams to collaborate on UI/UX projects in real time. Its cloud-based platform supports prototyping, design systems, and seamless sharing, making it an indispensable tool for modern web and application design",
    img: "/images/15.png",
  },
];


export default function Post({ params }: { params: Promise<{ id: string }> }) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchParams() {
      try {
        const resolvedParams = await params;
        const foundPost = posts.find((p) => p.id === resolvedParams.id);
        setPost(foundPost || null);
      } catch (error) {
        console.error("Failed to resolve params:", error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    }

    fetchParams();
  }, [params]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!post) {
    return <h2>Post Not Found</h2>;
  }

  const renderParagraph = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="text-black font-bold">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold mb-4">{post.title}</h1>
      {post.img && (
        <Image
          src={post.img}
          alt={post.title}
          width={250}
          height={250}
          className="w-80 h-80 object-cover mx-auto rounded-lg"
        />
      )}
      <div className="mt-6">{renderParagraph(post.description)}</div>
      <div className="mt-8 p-6 border-t border-gray-600 bg-gray-300 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Leave a Comment</h2>
        <CommitFunction />
        <AuthorCard />
      </div>
    </div>
  );
}