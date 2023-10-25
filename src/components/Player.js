import React, { useContext, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Songs } from "../context";

export default function Player() {
  const { song } = useContext(Songs)
  // const {DataSongs, handleSetSong} = useContext(Songs)
  // const [idSong, setidSong] = useState(0)

  // const handleClickPrevious = () => {
  //   setidSong((idSong) =>
  //     idSong -= 1
  //   );
  //   handleSetSong(idSong)
  // };

  // const handleClickNext = () => {
  //   setidSong((idSong) =>
  //     idSong += 1
  //   );
  //   handleSetSong(idSong)
  // };
  return (
    <div> 
      <AudioPlayer
        volume="0.5"
        src={song.url}
        showSkipControls = {false}
        showJumpControls = {true}
        // onClickPrevious={handleClickPrevious}
        // onClickNext={handleClickNext}
      />
    </div>
  );
}
