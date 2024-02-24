'use strict';
// const todaydate = new Date(); //Date object without arguments give current date and time.
const endDate = "21 Feb 2024  6:51 PM";
const inputs = document.querySelectorAll("input");
document.getElementById("end-date").innerText = endDate;

const clock = ()=>{
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) /1000;
    // console.log(diff);
    
    if(diff < 0){
        return;
    } 

    // convert into days 
    inputs[0].value = Math.floor(diff / 3600 / 24); //days
    inputs[1].value = Math.floor(diff / 3600) % 24; //hours
    inputs[2].value = Math.floor(diff/60)%60; //Minutes
    inputs[3].value = Math.floor(diff)%60; //seconds

}
// initial call 
clock();

// 1 day = 24hrs 
// 1 hr = 60 minutes 
//60 min = 3600 seconds

setInterval(
    ()=>{
        clock();
    } ,1000
)