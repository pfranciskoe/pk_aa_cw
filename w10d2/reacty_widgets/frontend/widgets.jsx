import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock.jsx'
import Tabs from './tabs'
document.addEventListener("DOMContentLoaded",()=>{
    const root = document.getElementById("root");

ReactDOM.render(
    <div className="page">
        <Clock />
        <Tabs items={
            [
            { title: "Number 1", content: "number 1 content" }, 
            { title: "Number 2", content: "number 2 content" }, 
            { title: "Number 3", content: "number 3 content"}
            ]
        }/>
        <Weather/>
    </div>,
root)
})