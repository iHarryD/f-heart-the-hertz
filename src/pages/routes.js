import { Route, Routes } from "react-router-dom";
import ExplorePage from "./explorePage/ExplorePage";
import LandingPage from "./landingPage/LandingPage";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ExplorePage />} />
    </Routes>
  );
}
