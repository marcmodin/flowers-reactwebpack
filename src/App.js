import React from "react";
import ReactDOM from "react-dom";

function Main() {
  return (
    <div className="main">
      <h1>React and Webpack with Webpack server on watch mode</h1>
      <p>
        This is a very old project and it should be updated to the latest
        modules.
      </p>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("app"));
