// MENU
let navbar = document.querySelector('.navbar')

document.querySelector('#menu-bar').onclick = () => {
    navbar.classList.toggle('active');
}
document.querySelector('#close').onclick = () => {
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    if(window.scrollY > 100){
        document.querySelector('header').classList.add('active');
    }else{
        document.querySelector('header').classList.remove('active');

    }
}

//DARK NIGTH MODE LIGTH MODE
let themeToggler = document.querySelector('#theme-toggler')

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
        if(themeToggler.classList.contains('fa-sun')){
            document.querySelector('body').classList.add('active');
        }else{
            document.querySelector('body').classList.remove('active');
        }
}

//IMAGES SELECTOR FEATURED
document.querySelectorAll('.small-image-1').forEach(images =>{
    images.onclick = () => {
        document.querySelector('.big-image-1').src = images.getAttribute('src')
    }
})

document.querySelectorAll('.small-image-2').forEach(images =>{
    images.onclick = () => {
        document.querySelector('.big-image-2').src = images.getAttribute('src')
    }
})

document.querySelectorAll('.small-image-3').forEach(images =>{
    images.onclick = () => {
        document.querySelector('.big-image-3').src = images.getAttribute('src')
    }
})

document.querySelectorAll('.small-image-4').forEach(images =>{
    images.onclick = () => {
        document.querySelector('.big-image-4').src = images.getAttribute('src')
    }
})

document.querySelectorAll('.small-image-5').forEach(images =>{
    images.onclick = () => {
        document.querySelector('.big-image-5').src = images.getAttribute('src')
    }
})

document.querySelectorAll('.small-image-6').forEach(images =>{
    images.onclick = () => {
        document.querySelector('.big-image-6').src = images.getAttribute('src')
    }
})

//COUNT

let countDate = new Date('nov, 2022 00:00:00').getTime()

function countDown(){
    let now = new Date().getTime()
    gap = - now + countDate

    let seconds = 1000
    let minutes = seconds * 60
    let hours = minutes * 60
    let day = hours * 24

    let d = Math.floor(gap / (day))
    let h = Math.floor((gap % (day)) / (hours))
    let m = Math.floor((gap % (hours)) / (minutes))
    let s = Math.floor((gap % (minutes)) / (seconds))

    document.getElementById('days').innerText = d
    document.getElementById('hours').innerText = h
    document.getElementById('minutes').innerText = m
    document.getElementById('seconds').innerText = s
}

setInterval(function(){
    countDown()
},1000)