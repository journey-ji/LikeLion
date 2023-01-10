import { useDebugValue, useEffect } from "react";
import { useState } from "react";
import "./style.css";

const useBoxColorState = (initialValue, message) => {
  const [value, setValue] = useState(initialValue);
  useDebugValue(`${message}: ${value}`);
  return [value, setValue];
};
function App() {
  const [isColor, setIsColor] = useBoxColorState("", "현재 박스색상");
  const [isTomato, setIsTomdato] = useState(false);
  const [isPink, setIsPink] = useState(false);
  const [isSky, setIsSky] = useState(false);

  useEffect(() => {
    if (isPink) {
      setIsColor("pink");
    }
    if (isSky) {
      setIsColor("sky");
    }
    if (isTomato) {
      setIsColor("tomato");
    }
  }, [isTomato, isPink, isSky]);
  return (
    <>
      <button
        onClick={() => {
          setIsTomdato(true);
          setIsPink(false);
          setIsSky(false);
        }}
      >
        Tomato
      </button>
      <button
        onClick={() => {
          setIsTomdato(false);
          setIsPink(true);
          setIsSky(false);
        }}
      >
        Pink
      </button>
      <button
        onClick={() => {
          setIsTomdato(false);
          setIsPink(false);
          setIsSky(true);
        }}
      >
        Sky
      </button>
      <div className={isColor}></div>
    </>
  );
}
export default App;
