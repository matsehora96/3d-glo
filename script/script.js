window.addEventListener('DOMContentLoaded', function(){
    'use stcrict';
    
    //Timer
    const countTimer = (deadline) => {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');
        
        const getTimeRemaining = () => {
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

    countTimer('6 july 2020');

    //Menu
    const toggleMenu = () =>{
        const btnMenu = document.querySelector('.menu'),
              menu = document.querySelector('menu');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        }

        menu.addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('close-btn')) {
                handlerMenu();
            } else if (target.matches('menu > ul > li > a')) {
                handlerMenu();
            }
        });

        btnMenu.addEventListener('click', handlerMenu);
    }

    toggleMenu();

    //popup

    const togglePopup = () => {
        const popup = document.querySelector('.popup'),
              popupBtn = document.querySelectorAll('.popup-btn'),
              screenWidth = document.documentElement.clientWidth;
        
        const fadeIn = () => {
            popup.style.opacity = '0';
            popup.style.display = 'block';
            let interval = setInterval(function(){
                if (+popup.style.opacity >= 1) {
                    clearInterval(interval);
                }
                popup.style.opacity = +popup.style.opacity + 0.01;
            }, 0.01);
        }
        
        popupBtn.forEach((elem) => {
            if (screenWidth < 768) {
                elem.addEventListener('click', () => {
                    popup.style.display = 'block';
                });
            } else {
                elem.addEventListener('click', fadeIn);
            }  
        });

        popup.addEventListener('click', (event) => {
            let target = event.target;

            if (target.classList.contains('popup-close')) {
                popup.style.display = 'none';
                popup.style.opacity = '0';
            } else {
                target = target.closest('.popup-content');
            
                if (!target) {
                    popup.style.display = 'none';
                    popup.style.opacity = '0';
                }
            }
           
        });
    }

    togglePopup();

    //Tabs
    
    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
              tab = tabHeader.querySelectorAll('.service-header-tab'),
              tabContent = document.querySelectorAll('.service-tab');
        
        const toggleTabContent = (index) => {
            for (let i = 0; i<tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        } 
        
        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.service-header-tab');

            if (target) {
                tab.forEach((item,i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }
        });
    }   

    tabs();

    //Slider

    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            dot = document.querySelectorAll('.dot'),
            slider = document.querySelector('.portfolio-content'),
            dots = document.querySelector('.portfolio-dots');

        let currentSlide = 0,
            interval;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const createDots = () => {
            while (currentSlide < slide.length) {
                let li = document.createElement('li');
                li.classList.add('dot');
                dots.appendChild(li);
                currentSlide++;
            }
            
            dot[0].classList.add('dot-active');
        }

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };

        const startSlide = (time = 3000) => {
            createDots();
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) =>{
            event.preventDefault();

            let target = event.target;
            
            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn') || 
            event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn') || 
            event.target.matches('.dot')) {
                startSlide();
            }
        });
        startSlide(150000);
    }

    slider();
});