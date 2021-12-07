import React from "react";
import './Time.css';


export default function Time() {
    return <p id="txt"></p>
};
setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("txt").innerHTML = d.toLocaleTimeString();
}


