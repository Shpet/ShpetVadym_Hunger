function timer() {
    let minutes = 15,
        seconds = 0,
        time = (minutes * 60 + seconds) * 1000,

        displayMin = document.querySelector('.timer .timer__min'),
        displaySec = document.querySelector('.timer .timer__sec'),

        timerId = setInterval(() => {
            if (time > 0) {
                let minutes = Math.floor(time / 1000 / 60) % 60,
                    seconds = Math.floor(time / 1000) % 60;

                displayMin.innerText = minutes;
                displaySec.innerText = seconds;

                time -= 1000;
            }
            else {
                displayMin.innerText = '0';
                displaySec.innerText = '0';
                clearInterval(timerId);
            }
        }, 1000);
}

document.addEventListener('DOMContentLoaded', timer);