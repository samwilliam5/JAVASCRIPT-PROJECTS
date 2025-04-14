let displayTime = document.querySelector('h1');

function dynamicTime(){

    let today = new Date();

    let hrs = String(today.getHours()).padStart(2,0);
    let min = String(today.getMinutes()).padStart(2,0);
    let sec = String(today.getSeconds()).padStart(2,0);


    let html = `${hrs}:${min}:${sec}`
    console.log(html);

    displayTime.innerHTML = html;

    
}

setInterval(dynamicTime,1000);