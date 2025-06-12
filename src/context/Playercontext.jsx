import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const Playercontext = createContext();

const Playercontextprovider = (props) => {

const audioref = useRef();
const seekbg = useRef();
const seekbar = useRef();

const [track , setTrack] = useState(songsData[0]);
const [playStatus , setPlayStatus] = useState(false);
const [time , setTime] = useState({
    currentTime:{
        second:0,
        minute : 0
    },
    totalTime :{
        second :0,
        minute :0
    }
})


const play = () => {
    audioref.current.play();
    setPlayStatus(true);
}

const pause = () => {
    audioref.current.pause();
    setPlayStatus(false);
}

const playwithid = async (id) => {
    await setTrack(songsData[id]);
    await audioref.current.play();
    setPlayStatus(true);
}

const previous = async () => {
    if(track.id > 0){
        await setTrack(songsData[track.id - 1]);
        await audioref.current.play();
        setPlayStatus(true);
    }
}

const next = async () => {
    if(track.id < songsData.length - 1){
        await setTrack(songsData[track.id + 1]);
        await audioref.current.play();
        setPlayStatus(true);
    }
}

const seeksong = async (e) => {
        console.log(e);
        audioref.current.currentTime = ((e.nativeEvent.offsetX / seekbg.current.offsetWidth)*audioref.current.duration)
}

useEffect (() =>{
    setTimeout(() => {
        audioref.current.ontimeupdate=() => {
             seekbar.current.style.width = `${(audioref.current.currentTime / audioref.current.duration) * 100}%`;

            setTime({
                currentTime:{
                    second : Math.floor(audioref.current.currentTime %60),
                    minute : Math.floor(audioref.current.currentTime /60)
                },
                totalTime :{
                    second : Math.floor(audioref.current.duration %60),
                    minute : Math.floor(audioref.current.duration /60)
                }
            })
        }
    },1000)
},[audioref])

    const contextvalue = {
        audioref,
        seekbar,
        seekbg,
        track,setTrack,
        playStatus,setPlayStatus,
        time,setTime,
        play,pause,
        playwithid,
        previous,next,
        seeksong
    }

    return(
        <Playercontext.Provider value={contextvalue}>
            {props.children}
        </Playercontext.Provider>
    )
}

export default Playercontextprovider;
