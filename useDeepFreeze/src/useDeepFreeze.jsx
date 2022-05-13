
const useDeepFreeze = (obj) => {
    let toggle = false;
    obj.itself = obj;
    const setToggle = () => !toggle;
    Object.defineProperties(obj, itself, {
        writable: { value: toggle },
        configurable: { value: true },
    })
    return {setToggle};
}

export default useDeepFreeze;


