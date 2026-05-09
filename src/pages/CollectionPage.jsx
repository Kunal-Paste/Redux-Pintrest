import React from "react";
import { useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items);

  return (
    <div className="flex items-start justify-start w-full flex-wrap gap-[.8rem] h-screen p-16 overflow-auto px-7">
      {collection.map((item) => (
        <CollectionCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default CollectionPage;
