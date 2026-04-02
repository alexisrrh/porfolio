import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Historia } from "../pages/Historia";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/historia" element={<Historia />} />
    </Routes>
  );
};