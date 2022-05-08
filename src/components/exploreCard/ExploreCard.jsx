import {
  faHeart,
  faPause,
  faPlay,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BasicChip } from "../chips/Chips";
import "./css/exploreCardStyles.css";
import ReactPlayer from "react-player";
import { useState } from "react";

export function ExploreCard({
  title,
  artist,
  coverArt,
  musicSrc,
  chipItems = [],
  heartButtonHandler,
  skipButtonHandler,
}) {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="card">
      <div className="card-background">
        <img src={coverArt} alt="cover" />
      </div>
      <div className="card-foreground --verticle-flex --has-gap --has-padding">
        <button
          className="play-btn btn --icon-only-btn --has-padding"
          onClick={() => setIsPlaying((prev) => !prev)}
        >
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>
        <ReactPlayer
          width={0}
          height={0}
          url={musicSrc}
          playing={isPlaying}
          loop
        />
        <div>
          <p className="--bold-500">{title}</p>
          <p>by {artist}</p>
        </div>
        <div className="chip-container">
          {chipItems.map((item) => (
            <BasicChip>{item}</BasicChip>
          ))}
        </div>
        <div className="btn-container --horizontal-flex --has-padding">
          <button
            className="btn --icon-btn"
            onClick={() => skipButtonHandler()}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
          <button
            className="btn --icon-btn"
            onClick={() => heartButtonHandler()}
          >
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
      </div>
    </div>
  );
}

export function EmptyExploreCard() {
  return (
    <div className="card --empty-card">
      <p>You've reached the end.</p>
      <p>Come back later.</p>
    </div>
  );
}
