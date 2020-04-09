const timerTextInHTML = document.getElementById('timer');


setInterval(() => {
    const now = new Date().getTime();
    const countDownDate = new Date("May 1, 2020 23:59:59").getTime();
    
    const distance = countDownDate - now;
    
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    timerTextInHTML.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    if(distance < 0){
        timerTextInHTML.innerText = "Go Outside!"
    }

}, 1000);
