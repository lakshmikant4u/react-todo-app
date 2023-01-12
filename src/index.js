import React from "react"
// import ReactDOM from "react-dom"
import ReactDOM from "react-dom/client"


// const element = <h1>Hello from React Todo Tutorial</h1>

// ReactDOM.render(element, document.getElementById("root"))

import TodoContainer from "./components/TodoContainer";

// ReactDOM.render(<TodoContainer />, document.getElementById("root"))

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <TodoContainer />
    </React.StrictMode>,
)
