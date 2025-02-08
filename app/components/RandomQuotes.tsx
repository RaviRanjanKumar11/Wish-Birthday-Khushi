"use client";

import React, { useState, useEffect } from "react";

const quotes = [
  "Count your age by friends, not years. Count your life by smiles, not tears. — John Lennon",
  "Age is merely the number of years the world has been enjoying you. — Unknown",
  "You don’t get older, you get better. — Shirley Bassey",
  "Birthdays are nature’s way of telling us to eat more cake. — Unknown",
];

const RandomQuotes = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return <p className="mt-4 italic">{quote}</p>;
};

export default RandomQuotes;
