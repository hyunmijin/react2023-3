import React from "react";
import ReactDOM from "react-dom/client";

function Hello(){
    return <h1>Hello, jin</h1>
}
const element = <Hello />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element);