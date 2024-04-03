let availableKeywords = [
    'HTML',
    'CSS',
    'Easy Tutorials',
    'Web design tutorials',
    'Where to learn coding online',
    'Where to learn web design',
    'How to create a website',
    'Have a problem Logging in?',
    'Is match prediction monetized',
    'How do i create free account',
    'Can i meet your engeneers',
    'Javascript',
    'Play games',
    'Can i support',
    'What is this website all about',

    'I cant contact you',
    'when is the match prediction site going to be activated',
    'review',
    'how can i give a review',
    

];

const resultBox = document.querySelector('.result-box');
const  inputBox = document.getElementById("input-box");

inputBox.onkeyup = function() {
    let result = [];
    let input = inputBox.value;
    if(input.length) {
        result = availableKeywords.filter((keyword) => {
            return keyword.toLocaleLowerCase().includes(input.toLowerCase());
        });
    }
    display(result);

    if(!result.length) {
        resultBox.innerHTML = '';
    }
}

function display(result) {
    const content = result.map((list) => {
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>"
}

function selectInput(list) {
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = "";
}

let btn = document.querySelector('.search-btn')
let ansDiv = document.querySelector('.ans-div')
btn.addEventListener('click', ()=> {
    if(inputBox.value === 'Have a problem Logging in?') {
        ansDiv.innerHTML = `
        <b>${inputBox.value}</b><br />
        Sorry for the problem you're <br />
         encountering, it might be of network issues, <br />
         or incorrect logging details <br />
         please check your details and try again. <br />
         <button class="gotit-btn">got it</button>
         `  
         inputBox.value = '';
    } else if(inputBox.value === 'HTML') {
        ansDiv.innerHTML = `
        <b>${inputBox.value}</b><br />
        Yes HTML is one of the hypertext language <br />
        used for this website <br />
        Our community offers a plateform <br />
        where you can learn the <br />
        HyperText Markup Langauge in a simple style. <br />
         <button class="gotit-btn">got it</button>
        `  
         inputBox.value = '';
    } else if(inputBox.value === 'CSS') {
        ansDiv.innerHTML = `
        <b>${inputBox.value}</b><br />
            CSS offers us the necessary styles <br />
            needed to cascade this sheet <br />
            You can find help here with <br />
            easy Css tutorial. <br />
            <button class="gotit-btn">got it</button>
        `  
         inputBox.value = ''; 
    } else if(inputBox.value === 'Easy Tutorials') {
        ansDiv.innerHTML = `
        <b>${inputBox.value}</b><br />
            With the help of our skilled programmers, <br />
            We make tech and programming <br />
            easy for anyone. <br />
            Enroll for our online lectures coming soon <br />
         <button class="gotit-btn">got it</button>
        `  
         inputBox.value = '';
    } else if(inputBox.value === 'Web design tutorials') {
        ansDiv.innerHTML = `
        <b>${inputBox.value}</b><br />
        <b>Making tech easy for everyone !!!</b>
        get ready for our soon to come <br />
        free <br />
        online programming classes <br /> 
         <button class="gotit-btn">got it</button>
        `  
         inputBox.value = '';
    } else if(inputBox.value === 'Where to learn coding online') {
        ansDiv.innerHTML = `
        <b>${inputBox.value}</b><br />
        You can learn coding online in this sites
        1. Code pro <br />
        2. Gommy Code <br />
        3. FreeCode Camp <br />
        4. Sololearn <br />
         <button class="gotit-btn">got it</button>
        `  
         inputBox.value = '';
    } else if(inputBox.value === 'Where to learn web design') {
        ansDiv.innerHTML = `
        <b>${inputBox.value}</b><br />
        feel free to enroll <br /> 
        for our free online web design tutorials <br />
        powered by AI <br />
        Comming soon <br /> 
        or  see 
        . freecode camp <br />
        . sololearn.com <br />
        . supersimpledev <br />
        . gommycode.com <br />
        . codepro.com <br />
        . we3school.com <br />
         <button class="gotit-btn">got it</button>
        `  
         inputBox.value = '';
    } else if(inputBox.value === 'How to create a website') {
        ansDiv.innerHTML = `
        <b>${inputBox.value}</b><br />
            With the advancement of technology, <br />
            there have been an emergence of automated <br />
            intelligent machines <br />
            designed to help in the development of softwares. <br />
            However the knowledge of atleast <br />
            one programming language is essential. <br />
            see
            freecodecamp.com <br />
            codepro.com <br />
            gommycode.com <br />
         <button class="gotit-btn">got it</button>
        `  
         inputBox.value = '';
    } else if(inputBox.value === 'Is match prediction monetized') {
        ansDiv.innerHTML = `
        <b>${inputBox.value}</b><br />
        The answer is simply No, <br />
        But one need to have an account <br />
        to view the daily match prediction odds. <br />
        <a href="Predict.html">Check prediction</a>
         <button class="gotit-btn">got it</button>
        `  
         inputBox.value = '';
    } else if(inputBox.value === 'How do i create free account') {
        ansDiv.innerHTML = `
        <b>${inputBox.value}</b><br />
            follow the link to create a free account <br />
            <a href="register.html">Create Account</a>
            <br />
         <button class="gotit-btn">got it</button>
        `  
         inputBox.value = '';
    } else if(inputBox.value === 'Can i meet your engeneers') {
        ansDiv.innerHTML = `
        <b>${inputBox.value}</b><br />
            Absolutely Yes !!! <br />
            clik the link below to meet us now <br />
            <a href="meet.html">Meet Us</a>
            <br />
         <button class="gotit-btn">got it</button>
        `  
         inputBox.value = '';
    } else if(inputBox.value === 'Javascript') {
        ansDiv.innerHTML = `
        <b>${inputBox.value}</b><br />
            Java script was used to design this webpage <br />
            Get a  more knolwege of Javascript to <br />
            with the latest practices and proffesional approaches </Br>
            in our forthcoming free <br />
            online web design tutorials <br />
         <button class="gotit-btn">got it</button>
        `  
         inputBox.value = '';
    } else if(inputBox.value === 'Play games') {
        ansDiv.innerHTML = `
        <b>${inputBox.value}</b><br />
            Click the link below <br />
            to be redirected to our game page <br />
            Soon there are will be limitless games <br />
            resereved for you to imporve the user experience  <br />
             <a href="games.html">Go to game Page</a>
             <br />
         <button class="gotit-btn">got it</button>
        `  
         inputBox.value = '';
    } else if(inputBox.value === 'Can i support') {
        ansDiv.innerHTML = `
        <b>${inputBox.value}</b><br />
            Thanks for the wonderful request <br />
            Here every support is always welcomed <br />
            as this is a platform to help <br />
            improve our world in tech and other <br />
            Scientific advancement. <br />
            <a href="support.html">Support Us</a> <br />
            You can also join our DEVs community <br />
         <button class="gotit-btn">got it</button>
        `  
         inputBox.value = '';
    } else if(inputBox.value === 'What is this website all about')  {
        ansDiv.innerHTML = `
        <b>${inputBox.value}</b><br />
        This is a simple website designed to <br />
        help bring developers together <br />
        share views and many more stunning things <br />
        to find intresting as you explore the  <br />
        Eistein City <br />
        Want to know More about this page? <br />
        Click the link here to learn more <br />
        <a href="about.html">Learn More</a>
        <br />
         <button class="gotit-btn">got it</button>
        `  
         inputBox.value = '';
    }
    document.querySelectorAll('.gotit-btn')
    .forEach((btn) => {
        btn.addEventListener('click', ()=> {
            ansDiv.innerHTML = '';
        })
    })
});

