import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Greeting from "./Greeting";
import { Footer, Header, Main } from "./components";
import App from "./App";
import Colors from "./Colors";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Colors />
  </StrictMode>,
);
