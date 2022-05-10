import { useEffect, useState } from "react";
import {
  ExploreCard,
  EmptyExploreCard,
} from "../../components/exploreCard/ExploreCard";
import { heartSong, skipSong } from "../../services/songServices";
import { getSuggestions } from "../../services/suggestionsServices";
import "./css/explorePageStyles.css";

export default function ExplorePage() {
  const [allSuggestions, setAllSuggestions] = useState([]);

  useEffect(() => {
    setAllSuggestions(getSuggestions(setAllSuggestions));
  }, []);

  return (
    <main className="--verticle-flex --centered-flex">
      {allSuggestions.length > 0 && Array.isArray(allSuggestions) ? (
        <ExploreCard
          title={allSuggestions[0]?.title_short}
          artist={allSuggestions[0]?.artist?.name}
          musicSrc={allSuggestions[0]?.preview}
          coverArt={allSuggestions[0]?.album?.cover_big}
          heartButtonHandler={() =>
            heartSong(allSuggestions[0]?.id, setAllSuggestions)
          }
          skipButtonHandler={() =>
            skipSong(allSuggestions[0]?.id, setAllSuggestions)
          }
        />
      ) : (
        <EmptyExploreCard />
      )}
    </main>
  );
}
