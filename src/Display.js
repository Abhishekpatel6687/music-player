import React from 'react'
import './App.css';
const Display = () => {
  return (
    <>
      <nav>
        <ul>
            <li className="brand"><img src="./images/logo.png" alt="spotify"/>spotify</li>
            <li>Home</li>
            <li>About</li>
        </ul>
    </nav>
    <div className="container">

        <div className="songList">
            <h1>Best of ASK - No copyright Sounds</h1>
            <div className="songItemContainer">
                <div className="songItem">
                    <img src="./images/cover1.jpeg" alt="1" />
                    <span>Let me Love You</span>
                    <span className="songlistplay"><span className="timestamp">05:34<img src="./images/play.png" alt="" /></span></span>
                </div>
                <div className="songItem">
                    <img src="./images/cover1.jpeg" alt="1" />
                    <span>Let me Love You</span>
                    <span className="songlistplay"><span className="timestamp">05:34<img src="./images/play.png" alt="" /></span></span>
                </div>
                <div className="songItem">
                    <img src="./images/cover1.jpeg" alt="1" />
                    <span>Let me Love You</span>
                    <span className="songlistplay"><span className="timestamp">05:34<img src="./images/play.png" alt="" /></span></span>
                </div>
                <div className="songItem">
                    <img src="./images/cover1.jpeg" alt="1"/>
                    <span>Let me Love You</span>
                    <span className="songlistplay"><span className="timestamp">05:34<img src="./images/play.png" alt=""/></span></span>
                </div>
                <div className="songItem">
                    <img src="./images/cover1.jpeg" alt="1"/>
                    <span>Let me Love You</span>
                    <span className="songlistplay"><span className="timestamp">05:34<img src="./images/play.png" alt=""/></span></span>
                </div>
                <div className="songItem">
                    <img src="./images/cover1.jpeg" alt="1"/>
                    <span>Let me Love You</span>
                    <span className="songlistplay"><span className="timestamp">05:34<img src="./images/play.png" alt=""/></span></span>
                </div>
                <div className="songItem">
                    <img src="./images/cover1.jpeg" alt="1"/>
                    <span>Let me Love You</span>
                    <span className="songlistplay"><span className="timestamp">05:34<img src="./images/play.png" alt=""/></span></span>
                </div>
            </div>
        </div>
        <div className="songbanner"></div>

    </div>
    <div className="bottom">
        <input type="range" name="range" id="myProgressBar" min="0" max="100"/>
        <div className="icons">
            <img src="nextplay.png" alt=""/>
            <img src="play.png" className="masterPlay" alt=""/>
            <img src="backplay.png" alt=""/>

        </div>
        <div className="songInfo">
            <img src="play.gif" width="92px" top="55px" alt=""/>Let me Love You - Justin Beiber
        </div>
    </div>
    </>
  )
}

export default Display
