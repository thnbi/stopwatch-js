let seconds = 0;
let minutes = 0;
let pause = 0;

const second = 1000;

const sec = document.querySelector(".seconds");
const min = document.querySelector(".minutes");

const buttons = document.querySelectorAll("button");
const buttonStart = document.getElementById("start");
const buttonStop = document.getElementById("stop");
const buttonClear = document.getElementById("clear");

buttonStart.addEventListener("click", startTimer);
buttonStop.addEventListener("click", stopTimer);
buttonClear.addEventListener("click", clearTimer);

const checkbox = document.querySelector(`#checkbox`);
const body = document.querySelector("body");

checkbox.addEventListener("click", lightmode);

function lightmode(){
    if(checkbox.checked == true){
        body.classList.add("light-mode");
        for(let i = 0; i < buttons.length; i++){
            buttons[i].classList.add("buttons-light-mode")
        }
    }else{
        body.classList.remove("light-mode");
        for(let i = 0; i < buttons.length; i++){
            buttons[i].classList.remove("buttons-light-mode")
        }
    }
}

function startTimer(){
    if(seconds == 0 && minutes == 0 || pause == 1){
        timerInterval = setInterval(timer, second);
        pause = 0
    }

}

function stopTimer(){
    clearInterval(timerInterval);
    pause = 1
}

function clearTimer(){
    clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    pause = 0;
    sec.innerHTML = "00";
    min.innerHTML = "00";
    console.clear();
}

function timer(){
    seconds++;
    if(seconds <= 9){
        sec.innerHTML = `0${seconds}`;
    }else{
        sec.innerHTML = seconds;
    }

    if(minutes <= 9){
        min.innerHTML = `0${minutes}`;
    }else{
        min.innerHTML = minutes;
    }

    if(seconds == 60){
        seconds = 0;
        minutes++;
        console.log(minutes);

    }
    console.log(seconds);
}
