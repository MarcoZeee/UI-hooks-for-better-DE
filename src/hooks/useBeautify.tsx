interface useBeautifyOutput {
  uitls: {
    firstUpper: (str: string) => string;
    eachUpper: (str: string) => string;
  };
  from: {
    camel: (str: string, mend: (str: string) => string) => string;
    kebab: (str: string, mend: (str: string) => string) => string;
    snake: (str: string, mend: (str: string) => string) => string;
  };
}

const useBeautify = (): useBeautifyOutput => {
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
    camel: fromCamel,
    kebab: fromKebab,
    snake: fromSnake,
  };
  return {
    uitls,
    from,
  };
};
