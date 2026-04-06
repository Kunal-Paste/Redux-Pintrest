import React from 'react'
import { getPhotos } from './api/mediaApi'

const App = () => {
  return (
    <div className='h-screen w-full bg-gray-700 p-7'>
      <button className='p-3 bg-emerald-700 rounded-3xl font-bold' onClick={async ()=>{
        const data = await getPhotos('cat');
        console.log(data.results);
      }}>get photos</button>
    </div>
  )
}

export default App