import { useRef } from "react";

export const useCountRenders = () => {
  const renders = useRef(1);
  console.log(`%c renders: ${renders.current++}`, "color: #bada55");
};
