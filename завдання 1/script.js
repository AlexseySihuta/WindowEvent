let text = document.querySelector('.text')
window.addEventListener('scroll', () =>{
    if (scrollY <= 100 && scrollY >= 20){
        text.style.fontSize = scrollY + 'px'
    }
})
window.addEventListener('scroll', ()=>{
    console.log(window.scrollY);
})
let slide = document.querySelector('.slide')
window.addEventListener('scroll', () =>{
    if(scrollY >= 600 && scrollY <= 800) {
        slide.style.width = scrollY - 430 + 'px'
        slide.style.marginLeft = scrollY - 600 + 'px'
    }
})
let img = document.querySelector('.img')
window.addEventListener('scroll', ()=>{
    if (scrollY >= 800 && scrollY <= 1000){
        img.style.right = scrollY - 800 + 'px'
    }
})
let textD = document.querySelector('.textDown')
window.addEventListener('scroll', ()  =>{
    if (scrollY >= 1100 && scrollY <= 1300) {
        textD.style.fontSize = 1200 - (scrollY - 200) + 'px'
    }
})
textD.addEventListener('click', () =>{
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
})
text.addEventListener('click', () =>{
    slide.scrollIntoView({
        behavior: 'smooth'
    })
})