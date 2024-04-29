function show_time() {
    const HOUR = document.querySelector(".hour");
    const MIN = document.querySelector(".min");
    const SEC = document.querySelector(".sec");

    let time = new Date();
    let hour = (time.getHours()+time.getMinutes()/60)*30+90;
    let minute = time.getMinutes()*6+90;
    let second = time.getSeconds()*6+90;
    
    SEC.style.transform = `rotate(${second}deg)`
    MIN.style.transform = `rotate(${minute}deg)`
    HOUR.style.transform = `rotate(${hour}deg)`
}

window.addEventListener("load", show_time);

setInterval(show_time, 1000);