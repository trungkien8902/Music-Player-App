import React from "react";
import "./NavBar.css"

const NavBar = () => {
    return (
        <div className="navbar h-24 bg-slate-900 text-white text-center leading-[6rem] text-xl">
            <i className="fab fa-spotify"></i>
            <div className="app-header">Spotify 3.0</div>
            <div className="about">
                
            </div>
            <div>
                <a href="https://www.github.com/trungkien8902" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </div>
    )
}

export default NavBar;