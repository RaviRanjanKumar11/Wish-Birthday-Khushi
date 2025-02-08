"use client";
import { useState } from "react";

const PhotoCollage: React.FC = () => {
  const [photos, setPhotos] = useState<string[]>([]);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newPhotos = Array.from(files).map((file) => URL.createObjectURL(file));
      setPhotos([...photos, ...newPhotos]);
    }
  };

  return (
    <div className="p-3 bg-white text-black rounded-lg shadow-lg max-w-md mx-auto mt-6">
      <h2 className="text-xl font-bold text-center text-green-600">📸 Birthday Memories</h2>
      <input type="file" accept="image/*" multiple onChange={handleUpload} className="mt-4 block" />
      <div className="grid grid-cols-2 gap-2 mt-4">
        {photos.map((src, index) => (
          <img key={index} src={src} alt="Birthday" className="w-full h-24 object-cover rounded" />
        ))}
      </div>
    </div>
  );
};

export default PhotoCollage;
