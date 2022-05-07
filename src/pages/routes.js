import { Route, Routes } from "react-router-dom";
import LandingPage from "./landingPage/LandingPage";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}
