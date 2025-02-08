"use client";

import React, { useState } from "react";

const AIBirthdayMessage = ({ name }: { name: string }) => {
  const [message, setMessage] = useState("");

  const generateMessage = async () => {
    const res = await fetch("/api/generate-birthday-message?name=" + name);
    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="mt-4">
      <button onClick={generateMessage} className="bg-blue-500 text-white px-4 py-2 rounded">
        Generate AI Message 🤖
      </button>
      {message && <p className="mt-2 italic">{message}</p>}
    </div>
  );
};

export default AIBirthdayMessage;
