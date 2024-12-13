// This is the main entry point of the application.
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import the global CSS file
import "./index.css";

// Import the App component
import App from "./app.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
