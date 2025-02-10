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
    setYesSize((prev) => prev * 2.3);
  };

  return (
    <div className="flex h-screen items-center justify-center overflow-hidden bg-[#ce9eba]">
      <div className="justify-centerp-10 flex flex-col items-center">
        <h1 className="font-sour pb-10 text-3xl">Will You Be My Valentines?</h1>
        <div className="flex items-center gap-10">
          <Link to="/valentine/ILoveYou">
            <button
              className="rounded-lg border-2 border-black bg-green-400 p-2 px-4 py-2"
              style={{ fontSize: `${yesSize}rem` }}
            >
              Yes
            </button>
          </Link>
          <button
            className="h-auto w-auto rounded-lg border-2 border-black bg-red-500 px-4 py-2 text-2xl"
            onClick={OnClickNo}
          >
            {noText}
          </button>
        </div>
        <img src={BugcatHeart} className="pt-10" />
      </div>
    </div>
  );
}
