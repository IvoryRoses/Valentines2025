import { Link } from "react-router-dom";
import { useState } from "react";
import BugcatHeart from "../assets/BugcatHeart.gif";

export default function Valentine() {
  const [noText, setNoText] = useState<string>("No");
  const messages: string[] = [
    "No",
    "Are you sure?",
    "Really?",
    "Think again please!",
    "PLEASEEE!!!",
  ];

  const OnClickNo = (): void => {
    setNoText(
      (prev) => messages[(messages.indexOf(prev) + 1) % messages.length],
    );
  };

  return (
    <div className="flex h-screen items-center justify-center bg-[#FFB7CE]">
      <div className="flex flex-col items-center justify-center rounded-lg border-black bg-white p-10">
        <h1 className="pb-10 text-lg">Will You Be My Valentines</h1>
        <div className="flex gap-20">
          <Link to="/i-love-you">
            <button className="rounded-lg border-2 border-black bg-green-300 p-2 px-4 py-2 text-4xl">
              Yes
            </button>
          </Link>
          <button
            className="rounded-lg border-2 border-black bg-red-600 px-4 py-2 text-4xl"
            onClick={OnClickNo}
          >
            {noText}
          </button>
        </div>
        <img src={BugcatHeart} />
      </div>
    </div>
  );
}
