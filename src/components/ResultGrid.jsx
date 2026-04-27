import { useDispatch, useSelector } from "react-redux";
import { getPhotos, getVideos } from "../api/mediaApi.js";
import {
  setQuery,
  setError,
  setLoading,
  setResults,
} from "../redux/features/searchSlice.js";
import { useEffect } from "react";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { activeTab, query, error, loading, results } = useSelector(
    (store) => store.search,
  );

  useEffect(
    function () {
      const getData = async () => {

        try {
          dispatch(setLoading());
          let data = [];

          if (activeTab == "photos") {
            let response = await getPhotos(query);
            data = response.results.map((item) => ({
              id: item.id,
              type: "photos",
              title: item.alt_description,
              thumbnail: item.urls.small,
              src: item.urls.full,
            }));
          }
          if (activeTab == "videos") {
            let response = await getVideos(query);
            data = response.videos.map((item) => ({
              id: item.id,
              type: "videos",
              title: item.user.name || "video",
              thumbnail: item.image,
              src: item.video_files[0].link,
            }));
          }

          console.log(data);
          dispatch(setResults(data));
        } catch (err) {
          dispatch(setError(err));
        }
      };
      getData();
    },
    [query, activeTab],
  );

  if(error) return <h1>Error</h1>
  if(loading) return <h1>Loading</h1>

  return (
    <div className="p-10">
      {results.map((items,idx)=>{
        return <h1>{items.title}</h1>
      })}
    </div>
  );
};

export default ResultGrid;
