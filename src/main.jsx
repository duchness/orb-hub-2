import React from "react";
import ReactDOM from "react-dom/client";
import Lessons from "./Lessons.jsx";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Lessons />
    <Footer />
  </React.StrictMode>
);
