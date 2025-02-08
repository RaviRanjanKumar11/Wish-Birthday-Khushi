"use client";

import { useState } from "react";
import BirthdayCard from "./components/BirthdayCard";
import ConfettiEffect from "./components/ConfettiEffect";
import ThemeSelector from "./components/ThemeSelector";
import UploadSection from "./components/UploadSection";
import MusicPlayer from "./components/MusicPlayer";
import Countdown from "./components/Countdown";
import ShareButtons from "./components/ShareButtons";
import Balloons from "./components/Balloons";
import Fireworks from "./components/Fireworks";
import CakeAnimation from "./components/CakeAnimation";
import RandomQuotes from "./components/RandomQuotes";
import ScreenshotButton from "./components/ScreenshotButton";
import PartyMode from "./components/PartyMode";
import Guestbook from "./components/Guestbook";
import AIBirthdayMessage from "./components/AIBirthdayMessage";
import HandwrittenNote from "./components/HandwrittenNote";
import LiveChat from "./components/LiveChat";
import PhotoCollage from "./components/PhotoCollage";
import VoiceMessage from "./components/VoiceMessage";
import Album from "./components/Album";

export default function Home() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [music, setMusic] = useState<string | null>(null);
  const [theme, setTheme] = useState<"pink" | "blue" | "green" | "default">("default");
  const [showSurprise, setShowSurprise] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);
  const [partyMode, setPartyMode] = useState(false);

  return (
    <div
  className="min-h-screen flex flex-col items-center justify-center text-white bg-cover bg-center relative"
  style={{
    backgroundImage: "url('/bday.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
      <h1 className="md:text-5xl text-xl font-bold mb-6">🎂 Create a Birthday Wish! 🎈</h1>

      <input
        type="text"
        placeholder="Enter Name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-4 py-2 rounded-md text-black"
      />

      <textarea
        placeholder="Write a personalized message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="mt-4 px-4 py-2 rounded-md text-black w-full max-w-md"
      />

      <UploadSection setImage={setImage} setMusic={setMusic} />
      <ThemeSelector setTheme={setTheme} />

      {name && (
        <>
          <BirthdayCard name={name} message={message} image={image} theme={theme} />
          <ConfettiEffect />
          <Balloons />
          <Countdown targetDate="2025-02-10" />
          <Fireworks />
          <RandomQuotes />
          <HandwrittenNote message={message} />
          <AIBirthdayMessage name={name} />
        </>
      )}

      {music && <MusicPlayer music={music} playMusic={playMusic} setPlayMusic={setPlayMusic} />}

      {name && (
        <>
          <button
            onClick={() => setShowSurprise(true)}
            className="mt-4 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
          >
            🎁 Click for a Surprise!
          </button>

          <ScreenshotButton />
        </>
      )}

      {showSurprise && <CakeAnimation />}
      {name && <ShareButtons name={name} message={message} />}
      {name && <Guestbook />}
      {name && <LiveChat />}
      {name && <PhotoCollage />}
      {name && <VoiceMessage />}
      {name && <Album /> }

      <PartyMode partyMode={partyMode} setPartyMode={setPartyMode} />
    </div>
  );
}
