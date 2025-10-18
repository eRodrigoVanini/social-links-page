const html01 = document.querySelector('html');
const botao01 = document.getElementById("switchbutton");


botao01.addEventListener("click", () => {html01.classList.toggle('light')});



//capture tag image
const img = document.querySelector("#profile img")






//replace image
if(html01.classList.contains('light')) {
//if light mode
img.setAttribute('src', './assets/avatar-light.svg')
} else {
img.setAttribute('src', './assets/avatar.svg')
}
//if dark mode


