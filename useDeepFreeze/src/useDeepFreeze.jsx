
const useDeepFreeze = (obj) => {
    let toggle = false;
    const setToggle = () => !toggle;
    Object.defineProperties(obj, {
        writable: { value: toggle },
        configurable: { value: true },
    })
    return {setToggle};
}

export default useDeepFreeze;


