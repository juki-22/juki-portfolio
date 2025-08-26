import { Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";

import "./App.css";
const App = () => {
  return (
    <Routes>
      <Route index element={<LandingPage />} />

      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

export default App;
