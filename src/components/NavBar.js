import React from "react";
import "./NavBar.css"
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <div className="navbar h-24 bg-slate-900 text-white leading-[6rem] text-xl justify-between">
            <div className="app-header">
                <i className="fab fa-spotify pr-3"></i>Spotify 3.0
            </div>
            
            <div className="nav">
                <nav>
                    <ul className="flex justify-center">
                        <li className="mr-10">
                        <Link to="/" className="text-white hover:text-pink">Home</Link>
                        </li>
                        <li className="mr-10">
                        <Link to="/about" className="text-white">Play</Link>
                        </li>
                        <li className="mr-10">
                        <Link to="/about" className="text-white">About</Link>
                        </li>
                        <li className="mr-10">
                        <Link to="/skills" className="text-white">Blogs</Link>
                        </li>
                        <li>
                        <Link to="/contact" className="text-white">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="p-10">
                <a href="https://www.github.com/trungkien8902" target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                </a>
            </div>
        </div>
    )
}

export default NavBar;