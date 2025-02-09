import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Valentine from "./routes/Valentine";
import ILoveYou from "./routes/ILoveYou";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/valentine" element={<Valentine />} />
        <Route path="/i-love-you" element={<ILoveYou />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
