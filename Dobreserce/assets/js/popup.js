let popup = document.querySelector('.popup');
let popupback =document.querySelector('.popup_bg');
let popuptrigger = document.querySelectorAll('.Types');
let body = document.querySelector('html');
let close =document.querySelectorAll('.close_popup')

popuptrigger.forEach((div) =>{
    div.addEventListener('click',(e) =>{
        e.preventDefault();
        popupback.classList.add('active')
        popup.classList.add('active')
        body.classList.add('active')
    })
});
close.forEach((img) =>{
    img.addEventListener('click',(e) =>{
        e.preventDefault();
        popupback.classList.remove('active')
        popup.classList.remove('active')
        body.classList.remove('active')
    })
});

let homepoptrigger = document.querySelectorAll('.how');
let button = document.querySelectorAll('.button');
button.forEach((div) =>{
    div.addEventListener('click',(e) =>{
        e.preventDefault();
        popupback.classList.add('active')
        popup.classList.add('active')
        body.classList.add('active')
    })
});
homepoptrigger.forEach((div) =>{
    div.addEventListener('click',(e) =>{
        e.preventDefault();
        popupback.classList.add('active')
        popup.classList.add('active')
        body.classList.add('active')
    })
});