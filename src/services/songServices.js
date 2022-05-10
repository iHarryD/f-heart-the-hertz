import axios from "axios";

export async function heartSong(songID, suggestionsSetter) {
  try {
    const res = await axios.put(
      "http://127.0.0.1:3001/api/suggestions/like",
      {
        songID,
      },
      { headers: { authorization: localStorage.getItem("auth-token") } }
    );
    suggestionsSetter(res.data);
  } catch (err) {
    console.log(err);
  }
}

export async function skipSong(songID, suggestionsSetter) {
  try {
    const res = await axios.put(
      "http://127.0.0.1:3001/api/suggestions/skip",
      {
        songID,
      },
      { headers: { authorization: localStorage.getItem("auth-token") } }
    );
    suggestionsSetter(res.data);
  } catch (err) {
    console.log(err);
  }
}
