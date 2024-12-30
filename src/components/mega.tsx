import React, { useMemo } from "react";
import BlogCard from "../components/blogcard";

interface Post {
  id: string;
  title: string;
  CardDescription: string;
  Date: string;
  imgUrl: string;
  
}

export default function Mega() {
  const posts: Post[] = useMemo(
    () => [
      {
        id: "1",
        title: "Next-js",
        CardDescription:
          "Explore the power of server-side rendering and static site generation with Next.js.",
        Date: "2024-12-25",
        imgUrl: "/images/1.png",
      },
      {
        id: "2",
        title: "React",
        CardDescription:
          "Dive into the fundamentals of React, a powerful library for building user interfaces.",
        Date: "2024-12-24",
        imgUrl: "/images/2.png",
      },
      {
        id: "3",
        title: "Static Route",
        CardDescription:
          "Learn how to create static routes for predictable navigation in your applications.",
        Date: "2024-12-23",
        imgUrl: "/images/3.png",
      },
      {
        id: "4",
        title: "Dynamic Route",
        CardDescription:
          "Discover the flexibility of dynamic routing to create parameterized paths.",
        Date: "2024-12-22",
        imgUrl: "/images/4.png",
      },
      {
        id: "5",
        title: "Components",
        CardDescription:
          "Understand the importance of reusable components to build modular applications.",
        Date: "2024-12-21",
        imgUrl: "/images/5.png",
      },
      {
        id: "6",
        title: "Static Site Rendering",
        CardDescription:
          "Learn about pre-rendering pages at build time for better performance and SEO.",
        Date: "2024-12-20",
        imgUrl: "/images/6.png",
      },
      {
        id: "7",
        title: "Static Site Rendering",
        CardDescription:
          "Uncover the benefits of delivering fully static HTML pages to the client.",
        Date: "2024-12-19",
        imgUrl: "/images/7.png",
      },
      {
        id: "8",
        title: "Client-side Rendering",
        CardDescription:
          "Explore how client-side rendering dynamically loads content on the browser.",
        Date: "2024-12-18",
        imgUrl: "/images/8.png",
      },
      {
        id: "9",
        title: "Parallel Routing",
        CardDescription:
          "Implement advanced navigation with parallel routing for improved UX.",
        Date: "2024-12-17",
        imgUrl: "/images/9.png",
      },
      {
        id: "10",
        title: "Hooks (useState)",
        CardDescription: "Master state management in React using the useState hook.",
        Date: "2024-12-16",
        imgUrl: "/images/10.png",
      },
      {
        id: "11",
        title: "Hooks (useEffect)",
        CardDescription:
          "Learn how to handle side effects in React using the useEffect hook.",
        Date: "2024-12-15",
        imgUrl: "/images/11.png",
      },
      {
        id: "12",
        title: "Parameters (params)",
        CardDescription:
          "Understand how parameters work for dynamic data passing in routes.",
        Date: "2024-12-14",
        imgUrl: "/images/12.png",
      },
      {
        id: "13",
        title: "Properties (props)",
        CardDescription:
          "Learn how props enable data sharing between components in React.",
        Date: "2024-12-13",
        imgUrl: "/images/13.png",
      },
      {
        id: "14",
        title: "Application Programming Interface (API)",
        CardDescription:
          "Understand how APIs facilitate communication between different software systems.",
        Date: "2024-12-12",
        imgUrl: "/images/14.png",
      },
      {
        id: "15",
        title: "Figma",
        CardDescription:
          "Discover how Figma simplifies UI/UX design with its collaborative platform.",
        Date: "2024-12-11",
        imgUrl: "/images/15.png",
      },
    ],
    []
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {posts.map((post) => (
        <BlogCard
          key={post.id}
          post={{
            id: post.id,
            title: post.title,
            description: post.CardDescription,
            imageUrl: post.imgUrl,
            date: post.Date,
          }}
          isDarkBackground={false}
        />
      ))}
    </div>
  );
}
