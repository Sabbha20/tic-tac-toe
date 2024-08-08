import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import Game from "./game";
import "./index.css";

// ReactDOM.render(<Game />, document.getElementById("root"));
createRoot(document.getElementById("root")).render(<Game />);