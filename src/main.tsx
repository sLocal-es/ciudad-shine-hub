import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import '@fontsource-variable/dm-sans';
import '@fontsource-variable/plus-jakarta-sans';
import '@fontsource/dm-serif-display/400.css';
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
