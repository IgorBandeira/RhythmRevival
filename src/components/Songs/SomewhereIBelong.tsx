import { useState } from "react";
import { Pause, Play } from "lucide-react";

type SongProps = {
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  isOtherPlaying: boolean;
  currentSong: string;
  currentArtist: string;
  onClick: () => void;
};

export function SomewhereIBelong({
  audioRef,
  isPlaying,
  setIsPlaying,
  isOtherPlaying,
  onClick,
}: SongProps) {
  const [isPlayingSomewhereIBelong, setIsPlayingSomewhereIBelong] =
    useState(false);

  const handlePlayPause = () => {
    if (!isOtherPlaying) {
      if (audioRef.current?.paused) {
        audioRef.current.src = "/SomewhereIBelong.mp3";
        audioRef.current.play();
      } else {
        audioRef.current?.pause();
      }
      setIsPlayingSomewhereIBelong(!audioRef.current?.paused);
      setIsPlaying(!audioRef.current?.paused);
    }
  };

  return (
    <div
      className={`bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors ${
        isPlaying ? "pointer-events-none" : ""
      }`}
      onClick={onClick}
    >
      <img
        src="https://rollingstone.uol.com.br/media/uploads/2023/02/linkin-park-meteora-20-anos.jpg"
        width={104}
        height={104}
        alt="SomewhereIBelong"
      />
      <strong>Somewhere I Belong</strong>
      <span className="text-sm text-zinc-400">Linkin Park</span>
      <button
        className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-red-950 text-white ml-auto mr-8"
        onClick={handlePlayPause}
      >
        {isPlaying ? <Pause className="mr-1" /> : <Play />}
      </button>
    </div>
  );
}
