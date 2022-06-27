import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";


type useScrollBarOutput = [string, React.FC<{ barSize: string }>];

const useScrollBar = (): useScrollBarOutput => {
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(false);
  const [barSize, setBarSize] = useState("0");
  let max = document.body.scrollHeight - window.innerHeight;

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
      setBarSize((currentScrollY / max) * 100 + "%");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [barSize]);

  const Bar = styled.div`
    border-bottom: 4px solid green;
    width: ${(props) => props.barSize};
    position: fixed;
    top: 0;
    left: 0;
  `;
  return [barSize, Bar];
};
export default useScrollBar;
