import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-[#ce9eba]">
      <Link to="/valentine/WillYouBe">
        <button className="relative inline-block rounded-md bg-[#ff7eee] px-10 py-5 text-3xl font-bold text-white shadow-[inset_0_1px_0_#FFE5C4,0_10px_0_#99498e] transition-all active:top-2 active:bg-[#ff78ed60] active:shadow-[inset_0_1px_0_#FFE5C4,inset_0_-3px_0_#99498e]">
          Are you Ready?
        </button>
      </Link>
    </div>
  );
}
