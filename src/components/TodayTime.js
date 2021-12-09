import React from "react";
import '../TodayTime.css';

function TodayTime(){
const today = new Date().toString();
     return(
         <div id="today">{today}</div>
     );
}
export default TodayTime;
