
(()=>{

    // TODO кількість елементів
    const numbers = [3, 2, 1];

    // TODO розміри екрану
    const media = [1100, 776, 410];
    
    A('.lfs-left').click( e => {
        e.preventDefault();

        const wrap = A('.lfs-wrap').el;
        const el = wrap.removeChild(wrap.firstElementChild);

        wrap.append(el);
    });

    A('.lfs-right').click( e => {
        e.preventDefault();

        const wrap = A('.lfs-wrap').el;
        const el = wrap.removeChild(wrap.lastElementChild);

        wrap.prepend(el);
    });

})();


