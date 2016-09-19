import React from "react";
import ReactDom from "react-dom";

import App from "./app.jsx";
import App2 from "./app2.jsx";
import App3 from "./app3.jsx";

ReactDom.render(
    (<div>
        <App txt={"111"} num={4}> <App3 /> </App>
        <App2 />
    </div>),
    document.getElementById("content")
);

