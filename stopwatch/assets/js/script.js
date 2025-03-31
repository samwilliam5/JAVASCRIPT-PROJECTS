let display = document.querySelector('.display');
let start = document.querySelector('.start');
let stops = document.querySelector('.stop');
let reset = document.querySelector('.reset');

let interval;
let hours = 0;
let minutes = 0;
let seconds = 0;


reset.addEventListener('click',(e)=>{
    hours = 0;
    minutes = 0;
    seconds = 0
    display.textContent = "00:00:00";
    clearInterval(interval);
});


start.addEventListener('click',(e)=>{

    clearInterval(interval);


    interval = setInterval(()=>{
        seconds ++;

        if(seconds == 60){
            seconds = 0;
            minutes++;
        }

        if(minutes == 60){
            minutes = 0;
            hours++;
        }
        display.textContent = (hours < 10 ? "0" + hours : hours) + ":" +
                              (minutes < 10 ? "0" + minutes : minutes) + ":" +
                              (seconds < 10 ? "0" + seconds : seconds);
        

    },1000);

});


stops.addEventListener('click',()=>{
   clearInterval(interval);
});
