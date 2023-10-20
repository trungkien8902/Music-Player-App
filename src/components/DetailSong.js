import React from 'react'

function DetailSong() {
  return (
    <div className='col-span-1'>
      <h2 className='font-bold'>Now PLaying</h2>
      <h2 className='text-gray-700 text-xl'>Sing me to sleep</h2>
      <div className='w-[240px] m-auto mt-10'>
        <img src='https://th.bing.com/th/id/OIP._E6VgE7fH69UeO0QYmVzeAHaHa?pid=ImgDet&rs=1' alt="avatar"/>
      </div>
      <div className='flex justify-evenly items-center mt-10'>
        <img className='w-[70px] rounded-full' src='https://th.bing.com/th/id/OIP._E6VgE7fH69UeO0QYmVzeAHaHa?pid=ImgDet&rs=1' alt="icon"/>
        <span className='text-xl text-white'>Author</span>
      </div>
    </div>
  )
}

export default DetailSong