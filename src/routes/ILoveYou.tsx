import HappyCat from "../assets/HappyCat.gif";
import { FaHeart } from "react-icons/fa";

export default function ILoveYou() {
  return (
    <div className="font-sour flex h-screen flex-col items-center justify-center overflow-hidden bg-[#ce9eba]">
      <div className="font-sour flex flex-col items-center justify-center gap-1 text-2xl md:flex-row md:text-4xl">
        <h1 className="">You made my Valentines</h1>
        <FaHeart />
      </div>
      <img src={HappyCat} className="size-80 pt-10" />
    </div>
  );
}
