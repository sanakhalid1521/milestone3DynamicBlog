import React from "react";
import { Card, CardContent, CardTitle } from "../components/ui/card";
import Image from "next/image";

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    date: string;
  };
  isDarkBackground?: boolean; // Make it optional
}

export default function BlogCard({ post, isDarkBackground = false }: BlogCardProps) {
  return (
    <Card
      className={`p-4 rounded-lg shadow-lg transition-shadow duration-300 ${
        isDarkBackground ? "bg-slate-800 text-white" : "bg-white text-slate-800"
      }`}
    >
      <Image
        src={post.imageUrl}
        alt={`Image for ${post.title}`} 
        width={350}
        height={350}
        className="w-75 h-100 object-cover rounded-t-lg"
      />
      <CardTitle className="text-3xl font-semibold mt-4 text-center">
        {post.title}
      </CardTitle>
      <CardContent className="text-center font-bold text-xl">
        <p>{post.description}</p>
      </CardContent>
      <div className="flex flex-col items-center mt-4">
        <p
          className={`text-sm mb-2 ${
            isDarkBackground ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>
        <a
          href={`/post/${post.id}`}
          className={`w-full px-6 py-2 text-white rounded hover:bg-cyan-800 ${
            isDarkBackground ? "bg-gray-800" : "bg-black text-center"
          }`}
        >
          Read More
        </a>
      </div>
    </Card>
  );
}
