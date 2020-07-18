const changeImages = () => {
    const imageTeams = document.querySelectorAll('.command__photo');

    imageTeams.forEach((item) =>{
        const src = item.src;

        item.addEventListener('mouseenter', (e) =>{
            e.target.src = e.target.dataset.img;
        });

        item.addEventListener('mouseleave', (e) =>{
            e.target.src = src;
        });
    });

};

export default changeImages;