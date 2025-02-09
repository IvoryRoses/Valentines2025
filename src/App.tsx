import { Outlet, useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import Beabadoo from "./assets/beabadoobee - Glue Song (Official Music Video).mp3";

export default function App() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/valentine");

    const handleMouseMove = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.2;
        audioRef.current.play().catch(() => console.log("Autoplay blocked"));
      }
      document.removeEventListener("mousemove", handleMouseMove);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <audio ref={audioRef} src={Beabadoo} loop />
      <Outlet />
    </div>
  );
}
