// content.jsx
import React, { Suspense, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import routes from "../routes";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
export const userContext = createContext(1);

const TheContent = () => {
  return (
    <div className="flex-grow pl-4 pr-4 pt-4 xl:w-[calc(100% - 230px)] xl:ml-[230px]">
      <Suspense fallback={loading}>
        <Routes>
          {routes.map((route, idx) => (
            route.element && (
              <Route
                key={idx}
                path={route.path}
                element={<route.element />}
              />
            )
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};

export default React.memo(TheContent);
