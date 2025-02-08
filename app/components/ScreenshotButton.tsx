"use client";

import React from "react";
import html2canvas from "html2canvas";

const ScreenshotButton = () => {
  const takeScreenshot = async () => {
    const element = document.documentElement;
    const canvas = await html2canvas(element);
    const image = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = image;
    link.download = "birthday_wish.png";
    link.click();
  };

  return (
    <button
      onClick={takeScreenshot}
      className="mt-4 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
    >
      📸 Capture & Download
    </button>
  );
};

export default ScreenshotButton;
