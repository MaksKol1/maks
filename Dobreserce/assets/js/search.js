let search =document.querySelectorAll('.find');
let input =document.querySelector('.search');
let search_body =document.querySelector('.search_body')
let closes = document.querySelectorAll('.close_search')

search.forEach((div)=>{
    div.addEventListener('click',(e)=>{
        e.preventDefault();
        input.classList.add('active')
        search_body.classList.add('active')
    })
});

closes.forEach((img)=> {
    img.addEventListener('click', (e) => {
        e.preventDefault();
        search_body.classList.remove('active')
        input.classList.remove('active')

    })
});
