import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // Import the main app component
import "./index.css"; // If you have global styles, make sure the path is correct

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
