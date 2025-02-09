"use client";
import { useState } from "react";

interface Message {
  id: number;
  text: string;
}

const LiveChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { id: Date.now(), text: input }]);
      setInput("");
    }
  };

  return (
    <div className="p-1 bg-white text-black rounded-lg shadow-lg max-w-md mx-auto mt-3">
      <h2 className="text-xl font-bold text-center text-blue-600">💬 Live Birthday Chat</h2>
      <div className="h-20 overflow-y-auto bg-gray-100 p-2 mt-2 rounded">
        {messages.map((msg) => (
          <div key={msg.id} className="p-2 bg-blue-100 text-blue-800 rounded mb-2">
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded"
          placeholder="Write a wish..."
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded">
          Send 🎉
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
