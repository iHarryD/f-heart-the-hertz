import axios from "axios";

export async function login(
  email,
  password,
  loadingStateSetter,
  successCallback
) {
  if (!email || !password) return;
  loadingStateSetter(true);
  try {
    const res = await axios.post("http://127.0.0.1:3001/api/login", {
      email: email,
      password: password,
    });
    localStorage.setItem("logged-in", true);
    localStorage.setItem("full-name", res.data.fullName);
    localStorage.setItem("auth-token", res.data.token);
    successCallback();
  } catch (err) {
    console.log(err);
  } finally {
    loadingStateSetter(false);
  }
}

export async function signup({ fullName, email, password, preferences }) {
  try {
    const res = await axios.post("http://127.0.0.1:3001/api/signup", {
      fullName,
      email,
      password,
      preferences,
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
