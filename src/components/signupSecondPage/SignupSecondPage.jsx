import { useRef, useState } from "react";
import { BasicChip } from "../chips/Chips";

export default function SignupSecondPage() {
  const eachPreferenceLimit = 5;
  const tracksInputRef = useRef();
  const artistsInputRef = useRef();
  const genresInputRef = useRef();
  const [userPreference, setUserPreference] = useState({
    tracks: [],
    artists: [],
    genres: [],
  });

  return (
    <>
      <div className="preferenece-input-container --verticle-flex --has-gap">
        <div className="--horizontal-flex --has-gap">
          <input
            disabled={userPreference.tracks.length >= eachPreferenceLimit}
            ref={tracksInputRef}
            className="input"
            placeholder={`Select your top 5 tracks`}
          />
        </div>
        <div className="chip-container">
          {userPreference.tracks.map((preference, i) => (
            <BasicChip key={i}>
              <span>{preference}</span>
            </BasicChip>
          ))}
        </div>
      </div>
      <div className="preferenece-input-container --verticle-flex --has-gap">
        <div className="--horizontal-flex --has-gap">
          <input
            disabled={userPreference.artists.length >= eachPreferenceLimit}
            ref={artistsInputRef}
            className="input"
            placeholder={`Select your top 5 artists`}
          />
        </div>
        <div className="chip-container">
          {userPreference.artists.map((preference, i) => (
            <BasicChip key={i}>
              <span>{preference}</span>
            </BasicChip>
          ))}
        </div>
      </div>
      <div className="preferenece-input-container --verticle-flex --has-gap">
        <div className="--horizontal-flex --has-gap">
          <input
            disabled={userPreference.genres.length >= eachPreferenceLimit}
            ref={genresInputRef}
            className="input"
            placeholder={`Select your top 5 genres`}
          />
        </div>
        <div className="chip-container">
          {userPreference.genres.map((preference, i) => (
            <BasicChip key={i}>
              <span>{preference}</span>
            </BasicChip>
          ))}
        </div>
      </div>
      <button className="btn --primary-btn">Sign Up</button>
    </>
  );
}
