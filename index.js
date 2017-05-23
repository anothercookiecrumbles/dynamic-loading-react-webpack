import {
    render
}
from "react-dom";
import React from "react";
import App from "./components/App";
import Boom from "./components/Boom";

const containerEl = document.getElementById("container");

render( < App >
        < Boom name = "Boom" / >
        < /App>,
    containerEl
);
