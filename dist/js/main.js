let x = document.getElementById('login');
let y = document.getElementById('register');
let z = document.getElementById('btn');

function login(){
    x.scrollIntoView({ behavior: 'smooth'});
}

function register(){
    y.scrollIntoView({ behavior: 'smooth'});
}

const formScroll = document.getElementById('form-scroll');

// formScroll.addEventListener("scroll", (event) => {
//     let scroll = document.querySelector('#login').scrollLeft;
//     console.log(scroll)
// });

function scrollFunction (){
    var elm = document.getElementById('login')
    var p = elm.parentNode,
        pos = (elm.scrollLeft || p.scrollLeft) / (p.scrollWidth - p.clientWidth ) * 100;
        
    adjustButton(pos);
}

function adjustButton(x){
    let btn = document.getElementById('btn');
    var m = (x/2) + '%';
    btn.style.marginLeft = m;
}