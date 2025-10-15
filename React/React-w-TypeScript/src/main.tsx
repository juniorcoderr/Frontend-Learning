import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import MyProvider from "./components/04-ContextAPI/MyContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* wrapping the provider inside the root */}
    <MyProvider>
      <App />
    </MyProvider>
  </StrictMode>
);
