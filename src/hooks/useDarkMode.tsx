import React, { useState } from "react";
import styled from "styled-components";
// install styled-components with npm i styled-components in your module folder

interface useDarkModeOutput {
  theme: {
    text: string;
    background: string;
  };
  toggleTheme: () => void;
  Wrapper: React.FC<{ theme: { text: string; background: string } }>;
}

interface useDarkModeProps {
  theme: {
    text: string;
    background: string;
  };
}

const useDarkMode = (): useDarkModeOutput => {
  const Wrapper = styled.div`
    color: ${(props: useDarkModeProps) => props.theme.text};
    background: ${(props: useDarkModeProps) => props.theme.background};
  `;
  Wrapper.defaultProps = {
    theme: {
      text: "#fff",
      background: "#000",
    },
  };
  const [theme, setTheme] = useState(Wrapper.defaultProps.theme);
  const toggleTheme = () => {
    setTheme({
      text: theme.text === "#fff" ? "#000" : "#fff",
      background: theme.background === "#000" ? "#fff" : "#000",
    });
  };
  return {
    theme,
    toggleTheme,
    Wrapper,
  };
};

export default useDarkMode;
