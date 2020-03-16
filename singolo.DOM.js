const nav = document.querySelectorAll('.nlink');
const as = document.querySelectorAll('a[href*="#"]');

/*const services = document.getElementById('services');
const portfolio = document.querySelector('portfolio');
const about = document.getElementById('about');
const contact = document.getElementById('contact');

servicesH = services.offsetHeight;
    portfolioH = portfolio.offsetHeight;
    aboutH = about.offsetHeight;
    contactH = contact.offsetHeight;*/

nav.forEach(el => {
    el.addEventListener('click', () => {
        nav.forEach(el1 => { 
            el1.classList.remove('link-active');
        });
        el.classList.add('link-active');
    });
});
/*for (let temp of as) {
    temp.addEventListener('click', function (el) {
     // el.preventDefault()
      
      ID = temp.getAttribute('href').substr(1)
      
      document.getElementById(ID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }*/