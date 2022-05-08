import { useState, useRef, useEffect } from "react";
import {createPortal } from "react-dom";


const useScrollBar = () => {
    const bar = document.querySelector("#bar");
    const handleScroll = () => {
        let max = document.body.scrollHeight - window.innerHeight;
        bar.style.width = `${window.scrollY / max * 100}%`;
    }
    window.addEventListener("scroll", handleScroll);
    return createPortal(
    <>
        <div id="#bar" style={
            {
                position: "fixed",
                top: 0,
                left: 0,
                width: 0,
                'border-bottom': "2px solid #ccc",
            }
        }>

        </div>
    </>
, document.body);
    }

export default useScrollBar;