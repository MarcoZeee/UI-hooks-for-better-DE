import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const useScrollBar = () => {
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);
  const [barSize, setBarSize] = useState(0);
  let max = document.body.scrollHeight - window.innerHeight;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
      setBarSize((currentScrollY / max) * 100 + "%");
      console.log(goingUp, currentScrollY, barSize);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [barSize]);

  const Bar = styled.div`
    border-bottom: 5px solid green;
    width: ${(props) => props.barSize};
    position: fixed;
    top: 0;
    left: 0;
  `;
  return {
    barSize,
    Bar
  };
};
export default useScrollBar;
