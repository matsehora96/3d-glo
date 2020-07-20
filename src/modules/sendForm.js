const sendForm = () => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся';
    
    const form = document.getElementById('form1'),
        formPopup = document.getElementById('form3'),
        formQuestion = document.getElementById('form2'),
        formInput = form.querySelectorAll('input'),
        formPopupInput = formPopup.querySelectorAll('input'),
        formQuestionInput = formQuestion.querySelectorAll('input'),
        inputPhone = document.querySelectorAll('.form-phone'),
        userName = document.querySelectorAll('[name="user_name"]'),
        formMessage = document.getElementById('form2-message'),
        formEmail = document.querySelectorAll('.form-email');

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem; color: white;';

    inputPhone.forEach((item) =>{
        item.addEventListener('input', () =>{
            item.value = item.value.replace(/\D/g, '');  
        });
    });

    userName.forEach((item) =>{
        item.addEventListener('input', () =>{
            item.value = item.value.replace(/([0-9a-zA-Z])/g, '');  
        });
    });

    formMessage.addEventListener('input', () => {
        formMessage.value = formMessage.value.replace(/([0-9a-zA-Z])/g, '');
    });

    formEmail.forEach((item) =>{
        item.addEventListener('input', () =>{
            item.value = item.value.replace(/([а-яА-ЯіІєЄ])/g, '');  
        });
    });

    form.addEventListener('submit', (event) => { 
        event.preventDefault();

        if (form.querySelector('.form-phone').value.length > 4 && form.querySelector('.form-phone').value.length < 16 && form.querySelector('.form-email').value.length > 0 && form.querySelector('[name="user_name"]').value.length > 0) {
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(form);

            let body = {};

            formData.forEach((val, key) => {
                body[key] = val;
            });

            postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    statusMessage.textContent = successMessage;
                })
                .catch((error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                });

            formInput.forEach(item => {
                item.value = '';
            });

            setTimeout(() => {
                statusMessage.remove();
            }, 8000);
        }
    });

    formPopup.addEventListener('submit', (event) => {
        event.preventDefault();

        if (formPopup.querySelector('.form-phone').value.length > 4 && formPopup.querySelector('.form-phone').value.length < 16 && formPopup.querySelector('.form-email').value.length > 0 && formPopup.querySelector('[name="user_name"]').value.length > 0) {
            formPopup.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(formPopup);

            let body = {};

            formData.forEach((val, key) => {
                body[key] = val;
            });

            postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    statusMessage.textContent = successMessage;
                })
                .catch((error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                });

            formPopupInput.forEach(item => {
                item.value = '';
            });

            setTimeout(() => {
                statusMessage.remove();
            }, 8000);
        }
    });

    formQuestion.addEventListener('submit', (event) => {
        event.preventDefault();

        if (formQuestion.querySelector('.form-phone').value.length > 4 && formQuestion.querySelector('.form-phone').value.length < 16 && formQuestion.querySelector('.form-email').value.length > 0 && formQuestion.querySelector('[name="user_name"]').value.length > 0 && formMessage.value.length > 0) {
            formQuestion.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            const formData = new FormData(formQuestion);

            let body = {};

            formData.forEach((val, key) => {
                body[key] = val;
            });

            postData(body)
                .then((response) => {
                    if (response.status !== 200) {
                        throw new Error('status network not 200');
                    }
                    statusMessage.textContent = successMessage;
                })
                .catch((error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                });

            formQuestionInput.forEach(item => {
                item.value = '';
            });

            setTimeout(() => {
                statusMessage.remove();
            }, 8000);
        }
    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    }
};

export default sendForm;