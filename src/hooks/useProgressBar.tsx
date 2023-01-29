import React, { useState, useRef, useEffect } from "react";
// import styles from "../styles/useProgressBar.module.css";

const ProgessBar = ({ value }: { value: number }) => {
  return <progress value={value} max="100" />;
};
export const useProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const prevScrollY = useRef(0);
  const [progressBar, setProgressBar] = useState(
    <ProgessBar value={progress} />
  );
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const updateProgressBar = (value: number) => {
    setProgress(value);
    setProgressBar(<ProgessBar value={value} />);
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      prevScrollY.current = currentScrollY;
      const progress = Math.round((currentScrollY / maxScroll) * 100);
      updateProgressBar(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY.current]);

  return () => progressBar;
};
