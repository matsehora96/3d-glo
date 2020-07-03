window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    let dateNow = new Date();
    let stopDate = new Date('1 january 2021').getTime();
    let body = document.querySelector('body');
    let timeRemaining = (stopDate - dateNow) / 1000;
    let date = dateNow.getDay();
    let hours = dateNow.getHours();
    let minutes = dateNow.getMinutes();
    let seconds = dateNow.getSeconds();
    let time = dateNow.toTimeString();
    
    function getTextDay() {
        let newDiv = document.createElement('div');
        body.appendChild(newDiv);
        (hours > 4) && (hours <= 10)  ?  newDiv.textContent = 'Доброе утро' :
                (hours > 10) && (hours <= 16) ? newDiv.textContent = 'Добрый день' :
                (hours > 16) && (hours <= 22) ? newDiv.textContent = 'Добрый вечер':
                                                newDiv.textContent = 'Доброй ночи';
    }
    
    function getDayWeek() {
        let newDiv = document.createElement('div');
        body.appendChild(newDiv);
        let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
        let dayName = days[date];
        newDiv.textContent = `Сегодня: ${dayName}`;
    }

    function getTimeDay() {
        let newDiv = document.createElement('div');
        body.appendChild(newDiv);
        newDiv.textContent = `Текущее время: ${time.substr(0,8)}`;
    }

    function getNewYearDay() {
        let newDiv = document.createElement('div');
        let newYearDay = Math.floor((timeRemaining / 60 / 60 / 24));
        body.appendChild(newDiv);
        newDiv.textContent = `До нового года осталось ${newYearDay}`;
        
    }
    
    getTextDay();
    getDayWeek(); 
    getTimeDay();
    getNewYearDay();
});