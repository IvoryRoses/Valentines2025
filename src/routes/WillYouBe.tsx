import { Link } from "react-router-dom";
import { useState } from "react";
import BugcatHeart from "../assets/BugcatHeart.gif";

export default function WillYouBe() {
  const [noText, setNoText] = useState<string>("No");
  const [yesSize, setYesSize] = useState<number>(1.5);

  const messages: string[] = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again please!",
    "PLEASEEE!!!",
    "Don't just zoom out to Click No",
    "Good luck reading this",
  ];

  const OnClickNo = (): void => {
    setNoText(
      (prev) => messages[(messages.indexOf(prev) + 1) % messages.length],
    );
    setYesSize((prev) => Math.min(prev * 2.3)); // Limits max size to 6rem
  };

  return (
    <div className="flex h-screen items-center justify-center overflow-hidden bg-[#ce9eba] p-4">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-sour pb-6 text-3xl md:text-4xl">
          Will You Be My Valentine?
        </h1>

        {/* Buttons container */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
          <Link to="/valentine/ILoveYou">
            <button
              className="h-auto w-auto rounded-lg border-2 border-black bg-green-400 px-6 py-3 text-lg sm:text-xl"
              style={{ fontSize: `${yesSize}rem` }}
            >
              Yes
            </button>
          </Link>
          <button
            className="h-auto w-auto rounded-lg border-2 border-black bg-red-500 px-6 py-3 text-lg sm:text-xl"
            onClick={OnClickNo}
          >
            {noText}
          </button>
        </div>

        {/* Image */}
        <img
          src={BugcatHeart}
          className="mt-6 w-40 sm:w-48 md:w-56"
          alt="Bugcat Heart"
        />
      </div>
    </div>
  );
}
