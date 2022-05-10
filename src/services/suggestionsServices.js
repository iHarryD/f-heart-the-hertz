import axios from "axios";

export async function getSuggestions(suggestionsSetter) {
  try {
    const res = await axios.get("http://127.0.0.1:3001/api/suggestions", {
      headers: { authorization: localStorage.getItem("auth-token") },
    });
    suggestionsSetter(res.data.suggestions);
  } catch (err) {
    console.log(err);
  }
}
