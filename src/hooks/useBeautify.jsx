const useBeautify = () => {
    const firstUpper = (str) => str[0].toUpperCase() + str.slice(1);
    const eachUpper = (str) => str.split(' ').map(firstUpper).join(' ');

    const fromCamel = (str, mend = firstUpper) => {
        return mend(str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase());
    }
    const fromKebab = (str, mend = firstUpper) => {
        return mend(str.replace(/-/g, ' '));
    }
    const fromSnake = (str, mend = firstUpper) => {
        return mend(str.replace(/_/g, ' '));
    }
    const uitls = {
        firstUpper, 
        eachUpper,
    };
    const from = {
        camel: fromCamel,
        kebab: fromKebab,
        snake: fromSnake,
    }
    return {
        uitls,
        from,
    }
}