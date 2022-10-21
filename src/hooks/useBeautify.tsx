import { useState } from "react";
interface useBeautifyOutput {
  uitls: {
    firstUpper: (str: string) => string;
    eachUpper: (str: string) => string;
  };
  from: {
    camel: string;
    kebab: string;
    snake: string;
  };
}

export const useBeautify = (modifiedText): useBeautifyOutput => {
  const [text, setText] = useState<string>(modifiedText);
  const firstUpper = (str: string) => str[0].toUpperCase() + str.slice(1);
  const eachUpper = (str: string) => str.split(" ").map(firstUpper).join(" ");

  const fromCamel = (str: string, mend = firstUpper) => {
    return mend(str.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase());
  };
  const fromKebab = (str: string, mend = firstUpper) => {
    return mend(str.replace(/-/g, " "));
  };
  const fromSnake = (str: string, mend = firstUpper) => {
    return mend(str.replace(/_/g, " "));
  };
  const uitls = {
    firstUpper,
    eachUpper,
  };
  const from = {
    camel: fromCamel(text),
    kebab: fromKebab(text),
    snake: fromSnake(text),
  };
  return {
    uitls,
    from,
  };
};
