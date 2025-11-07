import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageLayout from "../pages/layouts/PageLayout";

// const App = React.lazy(() => import("../App"));
const Index = React.lazy(() => import("../pages/Index.jsx"));

const EntryRoutes = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div>Loading...</div>
          </div>
        }
      >
        <Routes>
          <Route element={<PageLayout />}>
            <Route index element={<Index />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default EntryRoutes;
