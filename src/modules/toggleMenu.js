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

export default toggleMenu;
