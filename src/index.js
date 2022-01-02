import './reset.css'
import './style.css'

let prjContainer = document.querySelector('.project_container')
let skillContainer = document.querySelector('.skills')
let contactContainer = document.querySelector('.contact')

let navBar = document.querySelector('.navbar')
let navProject = document.querySelector('.nav_projects')
let navSkills = document.querySelector('.nav_skills')
let navContact = document.querySelector('.nav_contact')
let navAbout = document.querySelector('.nav_about')

let prjItems = [
`<div class="project_item">
    <img src="../src/ebp.png" alt="ecopark bicycle parking">
    <figcaption>Ecopark Bicycle Parking</figcaption>
    <div class="link_button">
        <div>
            <a href="https://ecopark-bicycle-parking.herokuapp.com/admin" target="_blank">Live Project</a>
        </div>
        <div>
            <a href="https://github.com/TienNg21/EcoPark-Bicycle-Parking" target="_blank">Source Code</a>
        </div>
    </div>
</div>`,
`<div class="project_item">
    <img src="../src/tnw.png" alt="tnw">
    <figcaption>TNW Clone</figcaption>
    <div class="link_button">
        <div>
            <a href="https://chinhquoc01.github.io/TNW-Clone/" target="_blank">Live Project</a>
            
        </div>
        <div>
            <a href="https://github.com/chinhquoc01/TNW-Clone" target="_blank">Source Code</a>
        </div>
    </div>
</div>`,
`<div class="project_item">
    <img src="../src/weatherapp.png" alt="weatherapp">
    <figcaption>Weather App</figcaption>
    <div class="link_button">
        <div>
            <a href="https://chinhquoc01.github.io/weather_app/" target="_blank">Live Project</a>
        </div>
        <div>
            <a href="https://github.com/chinhquoc01/weather_app" target="_blank">Source Code</a>
        </div>
    </div>
</div>`,
`<div class="project_item" >
    <img src="../src/calculator.png" alt="calculator">
    <figcaption>Calculator</figcaption>
    <div class="link_button">
        <div>
            <a href="https://chinhquoc01.github.io/Calculator/" target="_blank">Live Project</a>
        </div>
        <div>
            <a href="https://github.com/chinhquoc01/Calculator" target="_blank">Source Code</a>
        </div>
    </div>
</div>`,
`<div class="project_item">
    <img src="../src/library.png" alt="library">
    <figcaption>Library</figcaption>
    <div class="link_button">
        <div>
            <a href="https://chinhquoc01.github.io/Local-Library/" target="_blank">Live Project</a>
        </div>
        <div>
            <a href="https://github.com/chinhquoc01/Local-Library" target="_blank">Source Code</a>
        </div>
    </div>
</div>`,
`<div class="project_item">
    <img src="../src/rps.png" alt="rockpaperscissors">
    <figcaption>Rock Paper Scissors</figcaption>
    <div class="link_button">
        <div>
            <a href="https://chinhquoc01.github.io/Rock-Paper-Scissors/" target="_blank">Live Project</a>
        </div>
        <div>
            <a href="https://github.com/chinhquoc01/Rock-Paper-Scissors" target="_blank">Source Code</a>
        </div>
    </div>
</div>`,
`<div class="project_item">
    <img src="../src/etchaketch.png" alt="etchasketch">
    <figcaption>Etch a Sketch</figcaption>
    <div class="link_button">
        <div>
            <a href="https://chinhquoc01.github.io/Etch-a-Sketch/" target="_blank">Live Project</a>
        </div>
        <div>
            <a href="https://github.com/chinhquoc01/Etch-a-Sketch" target="_blank">Source Code</a>
        </div>
    </div>
</div>`]

let show = document.querySelector('.show')
let left = document.querySelector('.left')
let right = document.querySelector('.right')
let mid = 1, l = 0, r = 2
show.innerHTML =  prjItems[mid]
left.innerHTML = prjItems[l]
right.innerHTML = prjItems[r]


left.addEventListener('click', ()=>{
    (l - 1 == -1) ? (l = prjItems.length-1) : l--
    (r - 1 == -1) ? (r = prjItems.length-1) : r--
    (mid - 1 == -1) ? (mid = prjItems.length-1) : mid-- 
    
    show.innerHTML =  prjItems[mid]
    left.innerHTML = prjItems[l]
    right.innerHTML = prjItems[r]
})
right.addEventListener('click', ()=>{
    (l + 1 == prjItems.length) ? (l = 0) : l++
    (r + 1 == prjItems.length) ? (r = 0) : r++
    (mid + 1 == prjItems.length) ? (mid = 0) : mid++ 
    
    show.innerHTML =  prjItems[mid]
    left.innerHTML = prjItems[l]
    right.innerHTML = prjItems[r]
})

// console.log(prjContainer.getBoundingClientRect().top);
// console.log(window.innerHeight);
let heightPrj = 0, heightSkill = 0
window.addEventListener('scroll', ()=>{
    heightPrj = prjContainer.getBoundingClientRect().top-window.innerHeight
    heightSkill = skillContainer.getBoundingClientRect().top-window.innerHeight
    // heightContact = contactContainer.getBoundingClientRect().top - window.innerHeight

    // console.log('skill: ' + prjContainer.getBoundingClientRect().top);
   
    if(window.scrollY == 0){
        navAbout.classList.add('active')
    }

    if(heightSkill < -window.innerHeight/3){
        skillContainer.classList.add('appear_skills')
        navSkills.classList.add('active')
        navAbout.classList.remove('active')
    }
    else{
        navSkills.classList.remove('active')
        skillContainer.classList.remove('appear_skills')
    }
    if(skillContainer.getBoundingClientRect().top < -skillContainer.offsetHeight*6.5/10){
        navSkills.classList.remove('active')
    }

    if(heightPrj < -window.innerHeight/2) {
        // console.log('oke');
        prjContainer.classList.add('appear')
        navProject.classList.add('active')
    }
    else{
        navProject.classList.remove('active')
        prjContainer.classList.remove('appear')
    }
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        navProject.classList.remove('active')
        navContact.classList.add('active')
    }
    else{
        navContact.classList.remove('active')
    }

    // if(heightContact)
})