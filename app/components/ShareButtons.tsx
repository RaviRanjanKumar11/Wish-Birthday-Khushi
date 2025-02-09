"use client";

import React from "react";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaFacebookSquare,FaInstagramSquare,FaTwitterSquare } from "react-icons/fa";


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
    instagram: `https://www.instagram.com/?url=${url}`,
  };

  return (
    <div className="mt-2 flex gap-2 mb-3">
      <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
        <FaSquareWhatsapp  size={32}/>
      </a>
      <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer">
        <FaFacebookSquare size={32} />
      </a>
      <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
        <FaTwitterSquare size={32} />
      </a>
      <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
        <FaInstagramSquare size={32} />
      
      </a>
    </div>
  );
};

export default ShareButtons;
