
(()=>{
    
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
