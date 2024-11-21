import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Greeting from "./Greeting"
import { Footer, Header, Main } from "./components";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Header />
    <Main />
    <Greeting />
    <Footer />
  </StrictMode>,
);

