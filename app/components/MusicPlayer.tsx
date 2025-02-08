"use client";

import { useEffect } from "react";

interface Props {
  music: string | null;
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
