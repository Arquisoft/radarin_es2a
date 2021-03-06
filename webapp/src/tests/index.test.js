import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import { Suspense } from "react";

test("root div", () => {
        const div = document.createElement("div");
        div.id = "root";
        document.body.append(div);
        require("../index.js");
        expect(ReactDOM.render(
            <React.StrictMode>
            <Suspense fallback={"loading"}>
            <App/>
            </Suspense>
        </React.StrictMode>,
        div));
});