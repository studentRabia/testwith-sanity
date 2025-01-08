"use client";

import React, { useState, useEffect } from "react";

interface Comment {
  username: string;
  comment: string;
}

const Commentsec = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  // Load comments from local storage
  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Save comments to local storage whenever comments change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  // Handle adding a new comment
  const handleAddComment = () => {
    if (username.trim() && comment.trim()) {
      const newComment = { username, comment };
      setComments([...comments, newComment]);
      setUsername("");
      setComment("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Comments Section
      </h2>

      {/* Input Section */}
      <div className="bg-white rounded-md shadow-md p-6 mb-8">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
          <textarea
            placeholder="Enter your comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            rows={4}
          />
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition w-full sm:w-auto sm:self-end"
          >
            Add Comment
          </button>
        </div>
      </div>

      {/* Display Comments */}
      <div className="space-y-4">
        {comments.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-md p-4 shadow-sm bg-white"
          >
            <h3 className="font-bold text-lg text-gray-800">{item.username}</h3>
            <p className="text-gray-600">{item.comment}</p>
          </div>
        ))}
        {comments.length === 0 && (
          <p className="text-center text-gray-500">No comments yet!</p>
        )}
      </div>
    </div>
  );
};

export default Commentsec;
