const panels = document.querySelectorAll('.panel');

let toggleOpen = (e) => {
    if(e.target.nodeName === 'P'){
        e.target.parentNode.classList.toggle('open');
    }
    e.target.classList.toggle('open');
};

let toggleActive = (e) => {
    if(e.propertyName.includes('flex')){
        e.target.classList.toggle('open-active');
    }
};

panels.forEach((panel) => {
    panel.addEventListener('click', toggleOpen);
});

panels.forEach((panel) => {
    panel.addEventListener('transitionend', toggleActive);
});