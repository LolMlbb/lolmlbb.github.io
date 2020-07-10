const btn = document.querySelectorAll(".btn");
const btnaudio = document.getElementById("btnaudio");
const clickbtn = (index) =>{
	btnaudio.play();
	btn[index].classList.toggle("boxpopup");
	btn[index].classList.toggle("boxpressed");
}
const volumeslide = document.getElementById("volumeslide");
const brightslide = document.getElementById("brightslide");
const light = document.getElementsByClassName("light")[0];
const speak = document.getElementsByClassName("speak")[0];

const lightinput = () =>{
	light.innerHTML = `${brightslide.value}`;
}
const volinput = () =>{
	speak.innerHTML = `${volumeslide.value}`;
}
