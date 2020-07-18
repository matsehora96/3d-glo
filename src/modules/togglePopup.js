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

export default togglePopup;