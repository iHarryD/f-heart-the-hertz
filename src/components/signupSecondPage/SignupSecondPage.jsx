import { keyDebounce } from "../../helpers/keyDebounce";
import { useEffect, useState } from "react";
import { signup } from "../../services/authServices";
import { BasicChip } from "../chips/Chips";
import axios from "axios";
import PreferencesTypeAhead from "../preferencesTypeAhead/PreferencesTypeAhead";

export default function SignupSecondPage({ userData, userDataSetter }) {
  const eachPreferenceLimit = 5;
  const [isTracksInputInFocus, setIsTracksInputInFocus] = useState(false);
  const [isArtistsInputInFocus, setIsArtistsInputInFocus] = useState(false);
  const [isGenresInputInFocus, setIsGenresInputInFocus] = useState(false);
  const [userPreference, setUserPreference] = useState({
    tracks: [],
    artists: [],
    genres: [],
  });
  const [typeAheadSuggestions, setTypeAheadSuggestions] = useState([]);

  async function getTypeAheadSuggestions(e) {
    if (!e.target.value.replaceAll(" ", "")) return;
    try {
      // const res = await axios.get(
      //   `https://spotify23.p.rapidapi.com/search/?q=${e.target.value}&limit=5&type=${e.target.dataset.type}`,
      //   {
      //     headers: {
      //       "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
      //       "X-RapidAPI-Key":
      //         "5931e2248dmshce10ab27328c845p131675jsn74820eb1a960",
      //     },
      //   }
      // );
      setTypeAheadSuggestions((prev) => [...prev, e.target.value]);
    } catch (err) {
      console.log(err);
    }
  }

  function unFocus() {
    setIsTracksInputInFocus(false);
    setIsArtistsInputInFocus(false);
    setIsGenresInputInFocus(false);
    setTypeAheadSuggestions([]);
  }

  useEffect(unFocus, [userPreference]);

  const keyDebounceWithTypeAhead = keyDebounce(getTypeAheadSuggestions, 1000);

  function updatePreferences(e) {
    setUserPreference((prev) => {
      return {
        ...prev,
        [e.target.dataset.type]: [
          ...prev[e.target.dataset.type],
          e.target.dataset.value,
        ],
      };
    });
  }

  return (
    <>
      <div className="preferenece-input-container --verticle-flex --has-gap">
        <div style={{ position: "relative" }}>
          <input
            disabled={userPreference.tracks.length >= eachPreferenceLimit}
            className="input"
            placeholder={`Select your top 5 tracks`}
            onFocus={() => {
              unFocus();
              setIsTracksInputInFocus(true);
            }}
            onChange={(e) => keyDebounceWithTypeAhead(e)}
          />
          {isTracksInputInFocus && typeAheadSuggestions.length > 0 && (
            <PreferencesTypeAhead
              suggestions={typeAheadSuggestions}
              datasetType="tracks"
              clickHandler={updatePreferences}
            />
          )}
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
        <div style={{ position: "relative" }}>
          <input
            data-type="artists"
            disabled={userPreference.artists.length >= eachPreferenceLimit}
            className="input"
            placeholder={`Select your top 5 artists`}
            onFocus={() => {
              unFocus();
              setIsArtistsInputInFocus(true);
            }}
            onChange={(e) => keyDebounceWithTypeAhead(e)}
          />
          {isArtistsInputInFocus && typeAheadSuggestions.length > 0 && (
            <PreferencesTypeAhead
              suggestions={typeAheadSuggestions}
              datasetType="artists"
              clickHandler={updatePreferences}
            />
          )}
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
        <div style={{ position: "relative" }}>
          <input
            data-type="genres"
            disabled={userPreference.genres.length >= eachPreferenceLimit}
            className="input"
            placeholder={`Select your top 5 genres`}
            onFocus={() => {
              unFocus();
              setIsGenresInputInFocus(true);
            }}
            onChange={(e) => keyDebounceWithTypeAhead(e)}
          />
          {isGenresInputInFocus && typeAheadSuggestions.length > 0 && (
            <PreferencesTypeAhead
              suggestions={typeAheadSuggestions}
              datasetType="genres"
              clickHandler={updatePreferences}
            />
          )}
        </div>
        <div className="chip-container">
          {userPreference.genres.map((preference, i) => (
            <BasicChip key={i}>
              <span>{preference}</span>
            </BasicChip>
          ))}
        </div>
      </div>
      <button
        className="btn --primary-btn"
        onClick={() => {
          userDataSetter((prev) => {
            return { ...prev, preferences: userPreference };
          });
          signup(userData);
        }}
      >
        Sign Up
      </button>
    </>
  );
}
