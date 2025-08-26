import React from "react";
import Info from "../components/Info";

import Education from "components/Education";
import Experience from "components/Experience";
import Training from "components/Training";
import MainLayout from "../components/layouts/MainLayout";

const LandingPage = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">
        <Info />
        <Experience />
        <Training />
        <Education />
      </div>
    </MainLayout>
  );
};

export default LandingPage;
