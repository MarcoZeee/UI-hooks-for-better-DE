import { useState } from "react";


interface useDeepFreezeOutput {
    setToggle: () => void;
    finalObj: object;
}
const useDeepFreeze = (obj: object): useDeepFreezeOutput => {
    const [isFrozen, setFrozen] = useState(false);
    Object.freeze(obj);
    const buffer = JSON.parse(JSON.stringify(obj)); 
    const setToggle = () => {
        setFrozen(!isFrozen);
        console.log(isFrozen);
    }
    for(let i in obj) {
        if(typeof obj[i] === 'object') {
            obj[i] = Object.freeze(obj[i]);
        }
    }
    const finalObj = isFrozen? obj: buffer;
    return {setToggle, finalObj};
}

export default useDeepFreeze;


