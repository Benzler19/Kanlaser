import React, { Suspense } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AppRoutes from "./routes"; // Import route definitions from routes.js

const Layout = React.lazy(() => import("./container/layout"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Layout>
        <Routes>
          <Route path="*" element={<Layout />}>
            {AppRoutes.map((route, idx) => (
              <Route key={idx} path={route.path} element={<route.element />} />
            ))}
          </Route>
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;
