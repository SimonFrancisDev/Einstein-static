let paraElem = document.querySelector('.how-exp')
paraElem.innerHTML = '';
let btn = document.querySelector('.how-btn')
btn.addEventListener('click', () => {
    paraElem.innerHTML = `With thousands of codes and computations, <br>
    we make use of a given algorithm <br>
     that analyzise past events, <br> 
     check the present, <br> 
    and give the most probable next. <br>
    <button class="got-it-btn-js">Got it</button>
    `
    document.querySelector('.got-it-btn-js')
    .addEventListener('click', ()=> {
        paraElem.innerHTML = '';
})
})
