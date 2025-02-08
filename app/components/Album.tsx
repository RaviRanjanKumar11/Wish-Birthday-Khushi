"use client";
import { useState, useEffect } from "react";

const Album: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files).map((file) => URL.createObjectURL(file));
      setImages((prev) => [...prev, ...newImages]);
    }
  };

  // 🔴 Prevent Memory Leaks by revoking Blob URLs
  useEffect(() => {
    return () => {
      images.forEach((src) => URL.revokeObjectURL(src));
    };
  }, [images]);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-4xl mx-auto mt-6">
      <h2 className="text-2xl font-bold text-center text-purple-700 mb-4">📸 Birthday Album</h2>

      {/* Upload Button */}
      <div className="flex justify-center">
        <label className="cursor-pointer bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-500 transition-all">
          📤 Upload Photos
          <input type="file" accept="image/*" multiple onChange={handleUpload} className="hidden" />
        </label>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {images.length === 0 ? (
          <p className="text-center text-gray-500 col-span-3">No images uploaded yet.</p>
        ) : (
          images.map((src, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-md">
              <img
                src={src}
                alt="Birthday Memory"
                className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex justify-center items-center transition-all">
                <span className="text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity">🎉 Happy Moments</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Album;
