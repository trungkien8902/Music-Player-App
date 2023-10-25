import React, { useContext } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import {Songs} from '../context'

export default function Player() {
    const {song} = useContext(Songs)
  return (
    <div>
        <AudioPlayer className='player' src={song.url} showSkipControls={true} showJumpControls={false} />
    </div>
  )
}
