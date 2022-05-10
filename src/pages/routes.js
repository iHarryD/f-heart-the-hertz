import { Route, Routes } from "react-router-dom";
import LandingPage from "./landingPage/LandingPage";
import ExplorePage from "./explorePage/ExplorePage";
import ProfilePage from "./profilePage/ProfilePage";
import PrivateRoute from "../components/privateRoute/PrivateRoute";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/explore" element={<ExplorePage />} />
      <Route
        path="/profile"
        element={
          <PrivateRoute
            component={ProfilePage}
            authentication={localStorage.getItem("isLoggedIn")}
          />
        }
      />
    </Routes>
  );
}
