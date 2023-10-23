import React from 'react'
import "./style.css"
import DetailSong from "../components/DetailSong";
import ListSongs from "../components/ListSongs";
import Player from "../components/Player"

export default function Play() {
  return (
    <div className='play-page'>
        <div className="grid grid-cols-3 h-screen-navbar-player bg-slate-500 overflow-hidden">
            <DetailSong />
            <ListSongs />
        </div>
        <Player />
    </div>
  )
}
