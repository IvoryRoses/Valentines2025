import HappyCat from "../assets/HappyCat.gif";
import { FaHeart } from "react-icons/fa";

export default function ILoveYou() {
  return (
    <div className="font-sour flex h-screen flex-col items-center justify-center overflow-hidden bg-[#ce9eba]">
      <div className="font-sour flex gap-3 text-3xl">
        <h1>YAYAYAYYAYAYY I Love You!</h1>
        <div>
          <FaHeart />
        </div>
      </div>
      <img src={HappyCat} className="size-80 pt-10" />
    </div>
  );
}
