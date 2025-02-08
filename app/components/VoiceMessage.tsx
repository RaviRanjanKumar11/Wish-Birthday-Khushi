"use client";
import { useState } from "react";

const VoiceMessage: React.FC = () => {
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [recording, setRecording] = useState(false);
  let mediaRecorder: MediaRecorder;
  let audioChunks: Blob[] = [];

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream);
    audioChunks = [];

    mediaRecorder.ondataavailable = (event) => audioChunks.push(event.data);
    mediaRecorder.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
      setAudioURL(URL.createObjectURL(audioBlob));
    };

    mediaRecorder.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorder.stop();
    setRecording(false);
  };

  return (
    <div className="p-6 bg-white text-black rounded-lg shadow-lg max-w-md mx-auto mt-6">
      <h2 className="text-xl font-bold text-center text-red-600">🎤 Record a Voice Message</h2>
      {audioURL && <audio controls src={audioURL} className="mt-4 w-full"></audio>}
      <div className="mt-4 flex gap-4">
        {!recording ? (
          <button onClick={startRecording} className="bg-red-500 text-white px-4 py-2 rounded">
            🎙️ Start Recording
          </button>
        ) : (
          <button onClick={stopRecording} className="bg-gray-500 text-white px-4 py-2 rounded">
            ⏹️ Stop Recording
          </button>
        )}
      </div>
    </div>
  );
};

export default VoiceMessage;
