const nav = document.querySelectorAll('.nlink');
const as = document.querySelectorAll('a[href*="#"]');

const collection = document.querySelectorAll('.js_temp');

console.log("!!!");

nav.forEach(el => {
    el.addEventListener('click', () => {
        nav.forEach(el1 => { 
            el1.classList.remove('link-active');
            console.log(el,"!!",el1);
        });
        el.classList.add('link-active');
        //console.log(el,el1);
        console.log("!");
    });
    
  
});
document.addEventListener('scroll',onScroll);
function onScroll(event){
    const curPos = window.scrollY;
collection.forEach(el => {
  //  el.getAttribute('id');
if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos)
nav.forEach(a => {
    a.classList.remove('link-active');
    console.log(el,a,curPos);
    if (el.getAttribute('id') === a.getAttribute('href').substring(1)){
    a.classList.add('link-active');

    }
}
    )
});
}