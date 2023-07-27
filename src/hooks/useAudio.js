import { useRef } from "react";

export const useAudio = (src) => {
  const sound = useRef(new Audio(src));
  return sound.current;
};
