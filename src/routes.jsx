import React from "react"
// routes.js
const routes = [
  { path: "/glass/*", element: React.lazy(() => import("./pages/Glass")) },
  { path: "*", element: React.lazy(() => import("./pages/Home")) },
  // Add more routes as needed
];

export default routes;
