import React, { useContext, useState } from 'react'
import {Songs} from '../context'

function ListSongs() {
  const {DataSongs, handleSetSong} = useContext(Songs)
  const [idSong, setidSong] = useState(0)
  const handlePlaySong = (idSong) => {
    setidSong(idSong)
    handleSetSong(idSong)
  };
  return (
    <div className='col-span-2 bg-cyan-900 overflow-y-scroll'>
      <table className='table-auto w-full text-gray-200 '>
        <thead className='h-12'>
          <tr>
            <th className='w-[10%] text-center'>Id</th>
            <th className='text-left'>Title</th>
            <th className='w-[10%]'>Author</th>
            <th className='w-[10%]'><i className='fa fa-download'></i></th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => (
              <tr 
                key={index} 
                className={`h-12 hover:bg-slate-600 hover:text-teal-400 hover:cursor-pointer ${idSong === song.id && 'text-teal-400 bg-slate-600'}`} 
                onClick={()=>handlePlaySong(song.id)}>
                <td className='text-center'>{index + 1}</td>
                <td className='text-left'>{song.name}</td>
                <td className='text-center'>{song.author}</td>
                <td className='text-center'>
                  <a href={song.url}>
                    <i className='fa fa-download'></i>
                  </a>
                </td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListSongs