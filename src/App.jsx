import React from 'react'
import { getPhotos, getVideos } from './api/mediaApi'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'

const App = () => {
  return (
 <div className='h-screen w-full bg-gray-950 text-white'>
    <SearchBar/>
    <Tabs/>
    <ResultGrid/>
 </div>
  )
}

export default App