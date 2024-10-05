import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ReduxProvider } from "./data/context/ReduxProvider.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </BrowserRouter>
  </StrictMode>
);
