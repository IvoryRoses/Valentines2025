import { Outlet } from "react-router-dom";
import { useRef, useEffect } from "react";
import Beabadoo from "../assets/beabadoobee - Glue Song (Official Music Video).mp3";

export default function Valentine() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.2;
        audioRef.current.play().catch(() => console.log("Autoplay blocked"));
      }
    };

    const handleInteraction = () => {
      playMusic();
      document.removeEventListener("mousemove", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("click", handleInteraction);
    };

    document.addEventListener("mousemove", handleInteraction);
    document.addEventListener("touchstart", handleInteraction);
    document.addEventListener("click", handleInteraction);

    const checkAudio = setInterval(() => {
      if (audioRef.current && audioRef.current.paused) {
        playMusic();
      }
    }, 1000);

    return () => {
      document.removeEventListener("mousemove", handleInteraction);
      document.removeEventListener("touchstart", handleInteraction);
      document.removeEventListener("click", handleInteraction);
      clearInterval(checkAudio);
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} src={Beabadoo} loop />
      <Outlet />
    </div>
  );
}
