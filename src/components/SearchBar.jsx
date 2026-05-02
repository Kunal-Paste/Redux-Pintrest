import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setQuery } from '../redux/features/searchSlice';

const SearchBar = () => {
  
    const [text,setText] = useState('');
    const dispatch = useDispatch();

    function handlechange(e){
       e.preventDefault();
       dispatch(setQuery(text));
       console.log(text);
       setText('')
    }

  return (
    <div className='h-[10rem] w-full'>
        <form className='flex gap-7 p-10' onSubmit={(e)=>{
             handlechange(e)
        }}>
            <input type="text" value={text} placeholder='Search Aynthing...' required className='border-2 rounded-3xl w-full text-center only-of-type:border-amber-50' onChange={(e)=>{
                setText(e.target.value)
            }} />
            <button className='bg-red-700 p-2.5 font-bold rounded-[1rem]'>search</button>
        </form>
    </div>
  )
}

export default SearchBar