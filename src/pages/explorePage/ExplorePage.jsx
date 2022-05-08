import axios from "axios";
import { useEffect, useState } from "react";
import {
  ExploreCard,
  EmptyExploreCard,
} from "../../components/exploreCard/ExploreCard";
import "./css/explorePageStyles.css";

export default function ExplorePage() {
  const [allRecommendations, setAllRecommendations] = useState([]);

  const deezerAxiosInstance = axios.create({
    baseURL: "https://deezerdevs-deezer.p.rapidapi.com/search",
    method: "get",
    headers: {
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      "X-RapidAPI-Key": "8fe3691f4fmsh3840b3846cf81b1p1d400djsn0aa85814f9d2",
    },
  });
  useEffect(() => {
    if (allRecommendations.length > 0 || !allRecommendations) return;
    (async function () {
      //const res = await deezerAxiosInstance(`?q=rock`);
      //setAllRecommendations(res.data.data);
      console.log(allRecommendations);
    })();
  }, []);

  function heartButtonHandler() {
    return setAllRecommendations((prev) => {
      const prevCopy = prev;
      prevCopy.shift();
      return [...prevCopy];
    });
  }

  function skipButtonHandler() {
    return setAllRecommendations((prev) => {
      const prevCopy = prev;
      prevCopy.shift();
      return [...prevCopy];
    });
  }

  return (
    <main className="--verticle-flex --centered-flex">
      {allRecommendations.length > 0 && Array.isArray(allRecommendations) ? (
        <ExploreCard
          title={allRecommendations[0]?.title_short}
          artist={allRecommendations[0]?.artist?.name}
          musicSrc={allRecommendations[0]?.preview}
          coverArt={allRecommendations[0]?.album?.cover_big}
          heartButtonHandler={heartButtonHandler}
          skipButtonHandler={skipButtonHandler}
        />
      ) : (
        <EmptyExploreCard />
      )}
    </main>
  );
}
