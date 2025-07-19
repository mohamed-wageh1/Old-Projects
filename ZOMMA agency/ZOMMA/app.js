const ass = document.querySelector('.header .nav-bar .nav-list .ass');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

ass.addEventListener('click',()=>{
    ass.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});


document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){    
        header.style.backgroundColor = '#29323c';
    }else{
        header.style.backgroundColor = 'transparent';
    }
})

menu_item.forEach(item=>{
    item.addEventListener('click',()=>{
        ass.classList.toggle('active');
        mobile_menu.classList.toggle('active'); 
    })
})

//email JS

const contactForm = document.getElementById('contact-form')
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    //serviceID - templateID - #form - publickey
    emailjs.sendForm('service_dxncbdp', 'template_sc3nmuv', '#contact-form', 'NuVyTlW8Fx-KIyGce')
    .then(() =>{ 
        //show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        //clear input
        contactForm.reset()

    }, () =>{
        //show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })

}

contactForm.addEventListener('submit', sendEmail)

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }else{
            reveals[i].classList.remove('active');
        }
    }
}