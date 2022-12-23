console.log(document.querySelectorAll('input[type = checkbox]'));
document.querySelector('.add').addEventListener('click', () => {
    let inpt = document.querySelector('input[type = text]');
    if (inpt.value != '') {
        let newBlock = document.createElement('div')
        newBlock.className = 'item'
        newBlock.innerHTML = `<input type="checkbox" class="ddd"><span>${inpt.value}</span>`
        document.querySelector('.wrapper').append(newBlock)
        newBlock.addEventListener('click', addp)
        inpt.value = ""
    } else {
        document.querySelector('.nul').style.display = 'flex'
        document.querySelector('body').style.backgroundColor = "lightgray"
    }
})
let mas = document.querySelectorAll('.item');
mas.forEach(element => {
    element.addEventListener('click', addp)})
function addp() {
    let proverka = document.querySelectorAll('.item')
    if (event.target.className == 'ddd') {
        if (proverka.length > 1) {
            this.remove()
        } else {
            document.querySelector('.last').style.display = "flex"
            document.querySelector('body').style.backgroundColor = "lightgray"
        }
    }
}
document.querySelector('.last span').addEventListener('click', () => {
    document.querySelector('.last').style.display = "none"
    document.querySelector('body').style.backgroundColor = "white"
})
document.querySelector('.nul span').addEventListener('click', () => {
    document.querySelector('.nul').style.display = "none"
    document.querySelector('body').style.backgroundColor = "white"
})