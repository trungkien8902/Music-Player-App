import React from "react";
import "./NavBar.css"
import {Link} from "react-router-dom"


const NavBar = () => {
    return (
        <div className="navbar h-24 bg-slate-900 text-white leading-[6rem] text-xl justify-between">
            <div className="app-header hover:cursor-pointer">
                <i className="fab fa-spotify pr-3"></i>Spotify 3.0
            </div>
            
            <div className="nav">
                <nav>
                    <ul className="flex justify-center">
                        <li className="mr-10">
                        <Link to="/" className="text-white pb-1 hover:text-red-500 hover:border-b-2 hover:border-red-500">Home</Link>
                        </li>
                        <li className="mr-10">
                        <Link to="/play" className="text-white pb-1 hover:text-red-500 hover:border-b-2 hover:border-red-500">Play</Link>
                        </li>
                        <li className="mr-10">
                        <Link to="/about" className="text-white pb-1 hover:text-red-500 hover:border-b-2 hover:border-red-500">About</Link>
                        </li>
                        <li className="mr-10">
                        <Link to="/blogs" className="text-white pb-1 hover:text-red-500 hover:border-b-2 hover:border-red-500">Blogs</Link>
                        </li>
                        <li>
                        <Link to="/contact" className="text-white pb-1 hover:text-red-500 hover:border-b-2 hover:border-red-500">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="p-10">
                <a href="https://github.com/trungkien8902/Music-Player-App" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </div>
    )
}

export default NavBar;