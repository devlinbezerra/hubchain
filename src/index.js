import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";

const el = document.getElementById("root");

ReactDOM.render(
  <Routes />,
  // console.log(res.data.data.results[1].thumbnail.path)
  el
);
