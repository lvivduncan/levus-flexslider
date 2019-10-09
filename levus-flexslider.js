
(()=>{

    // TODO кількість елементів
    const numbers = [3, 2, 1];

    // TODO розміри екрану
    const media = [1100, 776, 410];

    // усі ліві кнопки
    const lfsLeft = document.querySelectorAll('.lfs-left');

    for(const item of lfsLeft){

        item.addEventListener('click', e =>{
            e.preventDefault();

            const wrap = item.parentNode.parentNode.querySelector('.lfs-wrap');
            
            const el = wrap.removeChild(wrap.firstElementChild);

            wrap.append(el);

        });

    }

    // усі праві кнопки
    const lfsRight = document.querySelectorAll('.lfs-right');

    for(const item of lfsRight){

        item.addEventListener('click', e =>{
            e.preventDefault();

            const wrap = item.parentNode.parentNode.querySelector('.lfs-wrap');
            
            const el = wrap.removeChild(wrap.lastElementChild);

            wrap.prepend(el);

        });

    }

})();


