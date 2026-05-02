import { useDispatch, useSelector } from "react-redux";
import { getPhotos, getVideos } from "../api/mediaApi.js";
import {
  // setQuery,
  setError,
  setLoading,
  setResults,
} from "../redux/features/searchSlice.js";
import { useEffect } from "react";
import ResultCard from "./ResultCard.jsx";

const ResultGrid = () => {
  const dispatch = useDispatch();
  const { activeTab, query, error, loading, results } = useSelector(
    (store) => store.search,
  );

  useEffect(
    function () {
      if (!query) return;
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
              url: item.links.html,
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
              url: item.url,
            }));
          }

          console.log(data);
          dispatch(setResults(data));
        } catch (err) {
          dispatch(setError(err.message));
        }
      };
      getData();
    },
    [query, activeTab, dispatch],
  );

  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading</h1>;

  return (
    <div className="flex items-start justify-start w-full flex-wrap gap-[.8rem] overflow-auto px-7">
      {results.map((item) => (
        <ResultCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ResultGrid;
