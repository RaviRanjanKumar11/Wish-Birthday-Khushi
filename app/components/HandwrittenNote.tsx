
import React from "react";

interface HandwrittenNoteProps {
  message: string;
}

const HandwrittenNote: React.FC<HandwrittenNoteProps> = ({ message }) => {
  return (
    <div className="p-6 bg-white text-black rounded-lg shadow-lg max-w-md mx-auto mt-6 border border-dashed border-gray-400">
      <h2 className="text-xl font-handwriting text-center text-purple-600">✍️ Handwritten Note</h2>
      <p className="text-lg font-handwriting text-gray-800 mt-4 italic">{message || "Your special note will appear here..."}</p>
    </div>
  );
};

export default HandwrittenNote;
