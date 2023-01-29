import { useState, useEffect } from "react";
interface useBeautifyOutput {
  camel: string;
  kebab: string;
  snake: string;
}

export const useBeautify = (modifiedText: string): useBeautifyOutput => {
  const [text, setText] = useState<useBeautifyOutput>({
    camel: modifiedText,
    kebab: modifiedText,
    snake: modifiedText,
  });
  const firstUpper = (str: string) => str[0].toUpperCase() + str.slice(1);
  const eachUpper = (str: string) => str.split(" ").map(firstUpper).join(" ");
  const mend = (str: string) => eachUpper(str.replace(/[^a-zA-Z ]/g, ""));

  const fromCamel = (str: string) => {
    const mendedText = mend(
      str.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase()
    );
    setText({ ...text, camel: mendedText });
  };
  const fromKebab = (str: string, mend = firstUpper) => {
    const mendedText = mend(str.replace(/-/g, " "));
    setText({ ...text, kebab: mendedText });
  };
  const fromSnake = (str: string, mend = firstUpper) => {
    const mendedText = mend(str.replace(/_/g, " "));
    setText({ ...text, snake: mendedText });
  };
  useEffect(() => {
    fromCamel(modifiedText);
    fromKebab(modifiedText);
    fromSnake(modifiedText);
  }, [modifiedText]);
  return text;
};
