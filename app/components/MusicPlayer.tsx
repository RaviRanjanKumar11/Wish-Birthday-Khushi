"use client";

import { useEffect } from "react";

interface Props {
  music: string;
  playMusic: boolean;
  setPlayMusic: React.Dispatch<React.SetStateAction<boolean>>;
}

const MusicPlayer: React.FC<Props> = ({ music }) => {
  useEffect(() => {
    if (music) {
      const audio = new Audio(music);
      audio.play();
    }
  }, [music]);

  return null;
};

export default MusicPlayer;
