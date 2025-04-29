window.addEventListener('scroll', () => {
    const buttonUp = document.querySelector('#btnUp');
    console.log(window.screenY);
    buttonUp.classList.toggle('btn-up-show', window.scrollY > 100);
});