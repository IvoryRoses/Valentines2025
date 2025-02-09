import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function App() {
  let navigate = useNavigate();

  useEffect(() => {
    navigate("/valentine");
  }, []);

  return <></>;
}
