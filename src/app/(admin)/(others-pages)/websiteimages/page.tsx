"use client";
import React, { useState, useEffect } from "react";

export default function WebsiteImages() {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch("/api/images");
      const files = await res.json();
      setImages(files);
    };
    fetchImages();
  }, []);

  const handleDelete = (index: number) => {
    const updated = [...images];
    updated.splice(index, 1);
    setImages(updated);
  };

  const handleReplace = (index: number) => {
    const updated = [...images];
    updated[index] = "placeholder.jpg"; // Replace with any fallback image
    setImages(updated);
  };

  return (
    <div className="p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">
        Image Management
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((filename, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-sm h-56 transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group relative"
          >
            <figure className="overflow-hidden">
              <img
                src={`/images/images2/${filename}`}
                alt={`Image ${index + 1}`}
                className="transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
            </figure>
            <div className="bg-black h-8 flex justify-center items-center">
              <h2 className="card-title text-white text-sm">
                Image {index + 1}
              </h2>
            </div>

            {/* Hover Buttons */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-75 transition-opacity duration-300 flex items-center justify-center space-x-4">
              <button
                className="btn btn-sm btn-warning"
                onClick={() => handleReplace(index)}
              >
                Replace
              </button>
              <button
                className="btn btn-sm btn-error"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}