import React, { useState, useRef, useEffect, useMemo } from "react";

function ProgessBar({ value }: { value: number }) {
  return <progress value={value} max="100" />;
}
export const useProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const prevScrollY = useRef(0);
  const progressBar = useMemo(
    () => () => ProgessBar({ value: progress }),
    [progress]
  );
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      prevScrollY.current = currentScrollY;
      const progress = Math.round((currentScrollY / maxScroll) * 100);
      setProgress(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY.current]);

  return { ProgressBar: progressBar };
};
