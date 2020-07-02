window.addEventListener('DOMContentLoaded', function(){
    'use stcrict';

    function countTimer (deadline) {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');
        
        function getTimeRemaining() {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            
            return {timeRemaining, hours, minutes, seconds};
        }
        
        let timeInterval = setInterval(() => {
            let timer = getTimeRemaining();
            
            if (timer.hours.toString().length === 1) {
                timerHours.textContent = '0' + timer.hours;
            } else {
                timerHours.textContent = timer.hours;
            }

            if (timer.minutes.toString().length === 1) {
                timerMinutes.textContent = '0' + timer.minutes;
            } else {
                timerMinutes.textContent = timer.minutes;
            }

            if (timer.seconds.toString().length === 1) {
                timerSeconds.textContent = '0' + timer.seconds;
            } else {
                timerSeconds.textContent = timer.seconds;
            }
            
            if (timer.timeRemaining <= 0) {
                clearInterval(timeInterval);
                timerHours.textContent = '0' + 0;
                timerMinutes.textContent = '0' + 0;
                timerSeconds.textContent = '0' + 0;
            }

        }, 1000);
        
    }

    countTimer('3 july 2020');
});