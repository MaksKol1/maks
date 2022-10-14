document.querySelectorAll('.accordeon').forEach((el) =>{
    el.addEventListener('click',() =>{

        let accord_content = el.nextElementSibling;

        console.log(accord_content)
        if(accord_content.style.maxHeight){
            document.querySelectorAll('.accord_content').forEach((el)=>el.style.maxHeight = null)
        } else{
            document.querySelectorAll('.accord_content').forEach((el)=>el.style.maxHeight = null)
            accord_content.style.maxHeight = accord_content.scrollHeight + 'px'
        }
    })
})


