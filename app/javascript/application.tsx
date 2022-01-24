// Entry point for the build script in your package.json.
import * as ReactDOM from "react-dom";

// import bootstrap js/css
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/home";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Home />, document.getElementById("app"));
});