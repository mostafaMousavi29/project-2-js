const hero = document.querySelector('.hero');
let text = hero.querySelector('h1');
const walk = 500  // for example pixle 


hero.addEventListener('mousemove' , function(event){

const { offsetWidth : width , offsetHeight : height } = hero;

//console.log(width , height)
let {offsetX : x , offsetY : y} = event; // position mouse

x += event.target.offsetLeft; // اندازه متن از چپ
y += event.target.offsetTop; // اندازه متن از بالا 

    const xwalk = Math.round(( x /width * walk) - (walk / 2))
    const ywalk = Math.round(( y /height * walk) - (walk / 2))
        console.log(xwalk , ywalk);

        text.style.textShadow = `
         ${xwalk}px ${ywalk}px 0 rgba(238 , 82 , 83 , .7),
         ${xwalk * -1}px ${ywalk}px 0 rgba(52 , 31 , 151 , .7),
         ${ywalk}px ${xwalk * -1}px 0 rgba(243 , 104 , 224 , .7),
         ${ywalk * -1}px  ${xwalk}px 0 rgba(254 , 207 , 87 , .7)
          `


})