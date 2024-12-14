import React from "react";
import { Routes, Route } from "react-router-dom";

const View = React.lazy(() => import("./view"));

const Home = ({ SESSION }) => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<View {...SESSION} />} />
      </Routes>
    </React.Suspense>
  );
};

export default Home;
