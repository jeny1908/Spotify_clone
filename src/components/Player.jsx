
import React, { useContext } from "react";
import { assets, songsData } from "../assets/assets";
import './Player.css'; // Import the CSS file
import { Playercontext } from "../context/Playercontext";

const Player = () => {
    
    const {seekbar,seekbg,playStatus,play,pause,track,time,previous,next,seeksong} = useContext(Playercontext);

   
    return (
        <div className="player-container">
            <div className="player-song">
                <img className="song-image" src={track.image} alt="song artwork" />
                <div className="song-info">
                    <p className="song-name">{track.name}</p>
                    <p className="song-desc">{track.desc.slice(0, 12)}</p>
                </div>
            </div>

            <div>
                <div className="player-controls">
                    <img src={assets.shuffle_icon} alt="Shuffle" />
                    <img  onClick={previous} src={assets.prev_icon} alt="Previous" />
                    {playStatus
                        ?<img onClick={pause} src={assets.pause_icon} alt="Play" />
                        :<img onClick={play} src={assets.play_icon} alt="Play" />
                    }
                  
                    
                    <img onClick={next} src={assets.next_icon} alt="Next" />
                    <img src={assets.loop_icon} alt="Loop" />
                </div>

                <div className="time-box">
                    <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                    <div className="seek-bg" onClick={seeksong} ref={seekbg}>
  <div className="seek-bar" ref={seekbar}></div>
</div>

                  
                    <p>{time.totalTime.minute}:{time.totalTime.second}</p>
                </div>
            </div>

            <div className="bottom-controls">
                <img src={assets.plays_icon} alt="Plays" />
                <img src={assets.mic_icon} alt="Mic" />
                <img src={assets.queue_icon} alt="Queue" />
                <img src={assets.speaker_icon} alt="Speaker" />
                <img src={assets.volume_icon} alt="Volume" />
                <div className="volume-bar"><hr/></div>
                <img src={assets.mini_player_icon} alt="Mini Player" />
                <img src={assets.zoom_icon} alt="Zoom" />
            </div>
        </div>
    );
};

export default Player;
