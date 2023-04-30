function returnTime(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(returnTime, 1000);