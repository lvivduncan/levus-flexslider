
(()=>{

    // TODO кількість елементів
    const numbers = [3, 2, 1];

    // TODO розміри екрану
    const media = [1100, 776, 410];
    
    A('.lfs-left').click( e => {
        e.preventDefault();

        const wrap = A('.lfs-wrap').el;

        const el = wrap.firstElementChild;

        const newEl = wrap.removeChild(el);

        wrap.append(newEl);
        
    });

    A('.lfs-right').click( e => {
        e.preventDefault();

        const wrap = A('.lfs-wrap').el;

        const el = wrap.lastElementChild;

        const newEl = wrap.removeChild(el);

        wrap.prepend(newEl);

    });

})();


