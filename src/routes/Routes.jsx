import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = React.lazy(() => import("../App"));

const EntryRoutes = () => {
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route index element={<App />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default EntryRoutes;
