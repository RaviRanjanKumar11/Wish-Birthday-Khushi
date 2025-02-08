"use client";

import React from "react";

interface ShareButtonsProps {
  name: string;
  message: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ name, message }) => {
  const url = encodeURIComponent(window.location.href);
  const text = encodeURIComponent(`🎂 Happy Birthday ${name}! 🎈 ${message}`);

  const socialLinks = {
    whatsapp: `https://wa.me/?text=${text}%20${url}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    twitter: `https://twitter.com/intent/tweet?text=${text}%20${url}`,
  };

  return (
    <div className="mt-4 flex gap-3">
      <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
        <button className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded">
          📲 WhatsApp
        </button>
      </a>
      <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
        <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
          🔵 Facebook
        </button>
      </a>
      <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
        <button className="bg-sky-500 hover:bg-sky-700 text-white px-4 py-2 rounded">
          🐦 Twitter
        </button>
      </a>
    </div>
  );
};

export default ShareButtons;
