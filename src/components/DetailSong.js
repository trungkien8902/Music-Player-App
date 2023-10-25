import React, { useContext, useState } from 'react'
import {Songs} from '../context'

function DetailSong() {
  const { song } = useContext(Songs)

  return (
    <>
        <div className='col-span-1'>
          <h2 className='font-bold pl-4 pt-4 text-xl'>Now PLaying</h2>
          <h2 className='text-gray-700 text-2xl pl-4'>{song.name}</h2>
          <div className='w-[240px] m-auto mt-6'>
            <img src={song.links.images[0].url} alt="avatar"/>
          </div>
          <div className='flex justify-evenly items-center mt-6 w-[360px] m-auto'>
            <img className='w-[70px] rounded-full' src={song.links.images[1].url} alt="icon"/>
            <span className='text-xl text-white'>{song.author}</span>
          </div>
        </div>    
    </>
  )
}

export default DetailSong