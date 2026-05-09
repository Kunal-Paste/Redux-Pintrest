import React from 'react'
import { useDispatch } from 'react-redux';
import { removeCollection } from '../redux/features/collectionSlice';

const CollectionCard = ({item}) => {
  
    const dispatch = useDispatch();

    function removeFromcollection(item){
        dispatch(removeCollection(item.id))
    }

  return (
       <div className="w-[18vw] h-[18rem] bg-white relative">
      <a target="_blank" href={item.url} className="h-full">
        {item.type == "photos" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
        {item.type == "videos" ? (
          <video
            autoPlay
            loop
            muted
            className="h-full w-full object-cover object-center"
            src={item.src}
          ></video>
        ) : (
          ""
        )}
      </a>
      <div
        id="bottom"
        className="text-white w-full px-3 py-10 absolute bottom-0 flex justify-between items-center"
      >
        <h2 className="text-xl font-semibold capitalize h-20 overflow-hidden">
          {item.title}
        </h2>
        <button
          className="bg-red-700 text-white rounded px-3 py-2 font-bold active:scale-95"
          onClick={() => {
            removeFromcollection(item);
          }}
        >
          REMOVE
        </button>
      </div>
    </div>
  );

};

export default CollectionCard