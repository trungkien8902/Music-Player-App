import React from "react";
import DetailSong from "../components/DetailSong";
import ListSongs from "../components/ListSongs";
import Player from "../components/Player"

export default function Home() {

  return (
        <div className="Home">
            <div className="grid grid-cols-3 h-screen-navbar-player bg-slate-500 overflow-hidden">
                <DetailSong />
                <ListSongs />
            </div>
            <Player />
        </div> 
    );
}

