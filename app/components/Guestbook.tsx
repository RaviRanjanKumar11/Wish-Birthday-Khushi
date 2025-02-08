"use client";

import React, { useState } from "react";

const Guestbook = () => {
  const [wishes, setWishes] = useState<string[]>([]);
  const [newWish, setNewWish] = useState("");

  const addWish = () => {
    setWishes([...wishes, newWish]);
    setNewWish("");
  };

  return (
    <div className="mt-4">
      {/* <h2 className="text-xl font-bold">📖 Guestbook</h2> */}
      <input
        type="text"
        placeholder="Leave a wish..."
        value={newWish}
        onChange={(e) => setNewWish(e.target.value)}
        className="px-2 py-1 text-black rounded"
      />
      <button onClick={addWish} className="bg-green-500 text-white px-4 py-1 rounded ml-2">
        Add Wish
      </button>
      <ul className="mt-2">
        {wishes.map((wish, index) => (
          <li key={index} className="text-sm italic">
            {wish}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Guestbook;
