'use client';

import React, { useState } from "react";
import { Button } from "./ui/button";

interface Comment {
  name: string;
  text: string;
}

const Comment: React.FC = () => {
  const userName = "Sana Khalid"; // Hardcoded user name
  const [comments, setComments] = useState<Comment[]>([]); // Array of comments
  const [newComment, setNewComment] = useState<string>(""); // New comment input
  const [editingIndex, setEditingIndex] = useState<number | null>(null); // Index of the comment being edited

  const handleSubmit = () => {
    if (newComment.trim()) {
      setComments([...comments, { name: userName, text: newComment }]); // Add new comment with user's name
      setNewComment(""); // Clear comment input
    }
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
    setNewComment(comments[index].text); // Set the comment text being edited in the input
  };

  const handleSave = () => {
    if (editingIndex !== null) {
      const updatedComments = [...comments];
      updatedComments[editingIndex] = { name: userName, text: newComment }; // Update the comment at the editing index
      setComments(updatedComments);
      setEditingIndex(null); // Exit editing mode
      setNewComment(""); // Clear comment input
    }
  };

  return (
    <div className="p-4 border rounded-md shadow-md space-y-4">
      {/* Input Field */}
      <div>
        <textarea
          aria-label="Write a comment"
          placeholder="Write your comment here..."
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <div className="mt-2 flex space-x-2">
          {editingIndex !== null ? (
            <Button
              onClick={handleSave}
              className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-400 transition-colors duration-300"
            >
              Save
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-400 transition-colors duration-300"
            >
              Submit
            </Button>
          )}
        </div>
      </div>

      {/* List of Comments */}
      <div className="space-y-2">
        {comments.length === 0 ? (
          <p className="text-gray-600">No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment, index) => (
            <div
              key={index}
              className="p-2 border rounded-md shadow-md flex flex-col justify-between items-start space-y-2"
            >
              <p className="text-gray-800 font-semibold">{comment.name}</p>
              <p className="text-gray-800">{comment.text}</p>
              <Button
                onClick={() => handleEdit(index)}
                className="px-2 py-1 text-sm text-white bg-yellow-500 rounded hover:bg-yellow-400 transition-colors duration-300"
              >
                Edit
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Comment;
