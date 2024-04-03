let about = document.querySelector('.about');
let support = document.querySelector('.help');
let help = document.querySelector('.support');

document.querySelector('.agree-btn')
.addEventListener('click', () => {
    about.style.display = 'block';
    support.style.display = 'block';
    help.style.display = 'block';
})