import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";

import GlobalState from "./containers/GlobalState";
import App from "./containers/App";

render(
    <GlobalState>
        <HashRouter>
            <App />
        </HashRouter>
    </GlobalState>,
    document.getElementById("root")
);
