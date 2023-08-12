"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Sidebar, Footer, MobileNavbar } from "@/components";
import { OneMoreLight, Meteora, HybridTheory } from "@/components/Albuns";
import {
  BreakingTheHabit,
  Numb,
  SomewhereIBelong,
  Faint,
} from "@/components/Songs";

export default function Home() {
  const audioRefNumb = useRef<HTMLAudioElement | null>(null);
  const audioRefSomewhereIBelong = useRef<HTMLAudioElement | null>(null);
  const audioRefFaint = useRef<HTMLAudioElement | null>(null);
  const audioRefBreakingTheHabit = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRefNumb.current = new Audio();
      audioRefSomewhereIBelong.current = new Audio();
      audioRefFaint.current = new Audio();
      audioRefBreakingTheHabit.current = new Audio();
    }
  }, []);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState("");
  const [currentArtist, setCurrentArtist] = useState("");

  const handleNumbClick = () => {
    if (isPlaying) return;
    setCurrentSong("Numb");
    setCurrentArtist("Linkin Park");
    setIsPlaying(false);
  };

  const handleSomewhereIBelongClick = () => {
    if (isPlaying) return;
    setCurrentSong("Somewhere I Belong");
    setCurrentArtist("Linkin Park");
    setIsPlaying(false);
  };

  const handleFaintClick = () => {
    if (isPlaying) return;
    setCurrentSong("Faint");
    setCurrentArtist("Linkin Park");
    setIsPlaying(false);
  };

  const handleBreakingTheHabitClick = () => {
    if (isPlaying) return;
    setCurrentSong("Breaking The Habit");
    setCurrentArtist("Linkin Park");
    setIsPlaying(false);
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 1360);
      };
      checkIsMobile();
      window.addEventListener("resize", checkIsMobile);
      return () => {
        window.removeEventListener("resize", checkIsMobile);
      };
    }
  }, []);

  const [isMobileNav, setIsMobileNav] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkIsMobileNav = () => {
        setIsMobileNav(window.innerWidth < 767);
      };
      checkIsMobileNav();
      window.addEventListener("resize", checkIsMobileNav);
      return () => {
        window.removeEventListener("resize", checkIsMobileNav);
      };
    }
  }, []);

  return (
    <div className="h-screen flex flex-col">
      {isMobile ? (
        <>
          <div className="flex flex-1">
            {isMobileNav ? <MobileNavbar /> : <Sidebar />}
            <main className="flex-1 p-6 mt-20">
              <div className="flex items-center gap-4">
                <button className="rounded-full bg-black/40 p-1">
                  <ChevronLeft />
                </button>
                <button className="rounded-full bg-black/40 p-1">
                  <ChevronRight />
                </button>
              </div>
              <h1 className="font-semibold text-3xl mt-10">Músicas:</h1>
              <div className="grid grid-cols-1 gap-4 mt-4">
                <div>
                  <Numb
                    audioRef={audioRefNumb}
                    isPlaying={currentSong === "Numb" && isPlaying}
                    setIsPlaying={setIsPlaying}
                    isOtherPlaying={isPlaying}
                    currentSong={currentSong}
                    currentArtist={currentArtist}
                    onClick={handleNumbClick}
                  />
                </div>
                <div>
                  <SomewhereIBelong
                    audioRef={audioRefSomewhereIBelong}
                    isPlaying={
                      currentSong === "Somewhere I Belong" && isPlaying
                    }
                    setIsPlaying={setIsPlaying}
                    isOtherPlaying={isPlaying}
                    currentSong={currentSong}
                    currentArtist={currentArtist}
                    onClick={handleSomewhereIBelongClick}
                  />
                </div>
                <div>
                  <Faint
                    audioRef={audioRefFaint}
                    isPlaying={currentSong === "Faint" && isPlaying}
                    setIsPlaying={setIsPlaying}
                    isOtherPlaying={isPlaying}
                    currentSong={currentSong}
                    currentArtist={currentArtist}
                    onClick={handleFaintClick}
                  />
                </div>
                <div>
                  <BreakingTheHabit
                    audioRef={audioRefBreakingTheHabit}
                    isPlaying={
                      currentSong === "Breaking The Habit" && isPlaying
                    }
                    setIsPlaying={setIsPlaying}
                    isOtherPlaying={isPlaying}
                    currentSong={currentSong}
                    currentArtist={currentArtist}
                    onClick={handleBreakingTheHabitClick}
                  />
                </div>
              </div>
              <h2 className="font-semibold text-2xl mt-10">Álbuns:</h2>
              <div className="grid grid-cols-1 gap-4 mt-4 mb-40">
                <div>
                  <HybridTheory />
                </div>
                <div>
                  <Meteora />
                </div>
                <div>
                  <OneMoreLight />
                </div>
              </div>
            </main>
          </div>
          <Footer
            audioRef={
              currentSong === "Numb"
                ? audioRefNumb
                : currentSong === "Somewhere I Belong"
                ? audioRefSomewhereIBelong
                : currentSong === "Faint"
                ? audioRefFaint
                : audioRefBreakingTheHabit
            }
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentSong={currentSong}
            currentArtist={currentArtist}
            setCurrentSong={setCurrentSong}
          />
        </>
      ) : (
        <>
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 p-6">
              <div className="flex items-center gap-4">
                <button className="rounded-full bg-black/40 p-1">
                  <ChevronLeft />
                </button>
                <button className="rounded-full bg-black/40 p-1">
                  <ChevronRight />
                </button>
              </div>
              <h1 className="font-semibold text-3xl mt-10">Músicas:</h1>
              <div className="grid grid-cols-3 gap-4 mt-4">
                <Numb
                  audioRef={audioRefNumb}
                  isPlaying={currentSong === "Numb" && isPlaying}
                  setIsPlaying={setIsPlaying}
                  isOtherPlaying={isPlaying}
                  currentSong={currentSong}
                  currentArtist={currentArtist}
                  onClick={handleNumbClick}
                />
                <SomewhereIBelong
                  audioRef={audioRefSomewhereIBelong}
                  isPlaying={currentSong === "Somewhere I Belong" && isPlaying}
                  setIsPlaying={setIsPlaying}
                  isOtherPlaying={isPlaying}
                  currentSong={currentSong}
                  currentArtist={currentArtist}
                  onClick={handleSomewhereIBelongClick}
                />
                <br />
                <Faint
                  audioRef={audioRefFaint}
                  isPlaying={currentSong === "Faint" && isPlaying}
                  setIsPlaying={setIsPlaying}
                  isOtherPlaying={isPlaying}
                  currentSong={currentSong}
                  currentArtist={currentArtist}
                  onClick={handleFaintClick}
                />
                <BreakingTheHabit
                  audioRef={audioRefBreakingTheHabit}
                  isPlaying={currentSong === "Breaking The Habit" && isPlaying}
                  setIsPlaying={setIsPlaying}
                  isOtherPlaying={isPlaying}
                  currentSong={currentSong}
                  currentArtist={currentArtist}
                  onClick={handleBreakingTheHabitClick}
                />
              </div>
              <h2 className="font-semibold text-2xl mt-10">Álbuns:</h2>
              <div className="grid grid-cols-8 gap-4 mt-4 mb-40">
                <HybridTheory />
                <Meteora />
                <OneMoreLight />
              </div>
            </main>
          </div>
          <Footer
            audioRef={
              currentSong === "Numb"
                ? audioRefNumb
                : currentSong === "Somewhere I Belong"
                ? audioRefSomewhereIBelong
                : currentSong === "Faint"
                ? audioRefFaint
                : audioRefBreakingTheHabit
            }
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            currentSong={currentSong}
            currentArtist={currentArtist}
            setCurrentSong={setCurrentSong}
          />
        </>
      )}
    </div>
  );
}
