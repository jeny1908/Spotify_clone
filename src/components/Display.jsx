import React, { useEffect, useRef } from "react";
import './Display.css';
import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import Displayalbum from "./Displayalbum";
import { albumsData } from "../assets/assets";



const Display = () => {

    const displayref = useRef();
    const location = useLocation();
    const isalbum = location.pathname.includes("album");
    console.log(isalbum);
    const albumid = isalbum ? location.pathname.slice(-1) : "";
    const bgcolor = albumsData[Number(albumid)].bgColor;
    console.log(bgcolor);

    useEffect(() => {
        if(isalbum){
            displayref.current.style.background =`linear-gradient(${bgcolor},#121212)`
        }
        else{
            displayref.current.style.background =`#121212`
        }
    })
    
    return (
           <div ref={displayref} className="display-container">
            <Routes>
                <Route path="/" element={<DisplayHome/>} />
                <Route ref={displayref} path="/album/:id" element={<Displayalbum/>} />
            </Routes>
        </div>
    );
};

export default Display;
