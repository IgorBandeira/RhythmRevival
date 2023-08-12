import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";
import "./style.css";

type FooterProps = {
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  currentSong: string;
  setCurrentSong: React.Dispatch<React.SetStateAction<string>>;
  currentArtist: string;
};

export function Footer({
  audioRef,
  isPlaying,
  setIsPlaying,
  currentSong,
  currentArtist,
}: FooterProps) {
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
      return () => {
        audioRef.current?.removeEventListener("timeupdate", handleTimeUpdate);
        audioRef.current?.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
      };
    }
  }, [audioRef]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("play", handlePlay);
      audioRef.current.addEventListener("pause", handlePause);
      return () => {
        audioRef.current?.removeEventListener("play", handlePlay);
        audioRef.current?.removeEventListener("pause", handlePause);
      };
    }
  }, [audioRef]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setIsPlaying(!audioRef.current.paused);
    }
  };

  function formatTime(timeInSeconds: number) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }

  return (
    <footer className="fixed-footer bg-red-950 border-t border-red-500 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-6 mr-12">
        <div className="flex flex-col">
          <strong className="font-normal text-lg whitespace-nowrap">
            {currentSong}
          </strong>
          <span className="text-sm text-zinc-400">{currentArtist}</span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex items-center justify-between w-full mb-2">
          <span className="text-xs text-zinc-400">
            {formatTime(currentTime)}
          </span>
          <span className="text-xs text-zinc-400">
            {duration ? formatTime(duration) : "--:--"}
          </span>
        </div>
        <div className="w-full">
          <input
            type="range"
            className="w-full rounded-full"
            min="0"
            max={duration}
            value={currentTime}
            onChange={(e) => {
              const time = parseFloat(e.target.value);
              setCurrentTime(time);
              if (audioRef.current) {
                audioRef.current.currentTime = time;
              }
            }}
          />
        </div>
        <div className="flex items-center justify-center mt-4">
          <button
            className={`w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black ${
              currentSong ? "" : "pointer-events-none opacity-50"
            }`}
            onClick={handlePlayPause}
          >
            {isPlaying ? <Pause className="mr-1" /> : <Play />}
          </button>
        </div>
      </div>
    </footer>
  );
}
