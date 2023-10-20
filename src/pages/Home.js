import React from "react";
import DetailSong from "./components/DetailSong";
import Player from "./components/Player";
import ListSongs from "./components/ListSongs";

export default function Home() {

  return (
        <div className="App">
            <div className="grid grid-cols-3 h-screen-navbar-player bg-slate-500 overflow-hidden">
                <DetailSong />
                <ListSongs />
            </div>
            <Player />
        </div> 
    );
}

