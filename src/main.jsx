import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import EntryRoutes from "./routes/Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EntryRoutes />
  </StrictMode>
);
