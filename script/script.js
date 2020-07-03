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
            
            (timer.hours.toString().length === 1) ? timerHours.textContent = '0' + timer.hours :
            timerHours.textContent = timer.hours;

            (timer.minutes.toString().length === 1) ? timerMinutes.textContent = '0' + timer.minutes :
                timerMinutes.textContent = timer.minutes;

            (timer.seconds.toString().length === 1) ? timerSeconds.textContent = '0' + timer.seconds :
                timerSeconds.textContent = timer.seconds;
            
            if (timer.timeRemaining <= 0) {
                clearInterval(timeInterval);
                timerHours.textContent = '0' + 0;
                timerMinutes.textContent = '0' + 0;
                timerSeconds.textContent = '0' + 0;
            }

        }, 1000);
        
    }

    countTimer('4 july 2020');
});