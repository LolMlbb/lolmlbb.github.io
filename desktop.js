const lang = navigator.language;
let datename = document.getElementsByClassName("datename")[0];
let datenum = document.getElementsByClassName("datenum")[0];
let monthname = document.getElementsByClassName("monthname")[0];
let clock = document.getElementsByClassName("clock")[0];


const showTime = () =>{
const today = new Date();
let h = today.getHours();
let m = today.getMinutes();
let s = today.getSeconds();
m = checkTime(m);
s = checkTime(s);
clock.innerHTML = `${h}:${m}:${s}`;
setTimeout(showTime,500);
datenum.innerHTML = today.getDate();
datename.innerHTML = today.toLocaleString(lang,{weekday: 'long'});
monthname.innerHTML = today.toLocaleString(lang,{month: 'long'});
}
const checkTime = (i) => {
	if(i<10){
		i = "0"+i;
	}
	return i;
}
const logo = document.getElementsByClassName("logo")[0];
const about = document.getElementById("about");
const quitabout = document.getElementById("quitabout");
const clicklogo = () =>{
	about.classList.toggle("cssabout");
	about.classList.toggle("cssno");
}
const quitx = () =>{
	about.classList.toggle("cssabout");
	about.classList.toggle("cssno");
}

const filexit = document.getElementById("filexit");
const main = document.getElementsByClassName("main")[0];
const picfolder = document.getElementsByClassName("picfolder")[0];
const navipoint = document.getElementsByClassName("navipoint")[0];
const filexitclick = () =>{
	main.classList.toggle("maincl");
	main.classList.toggle("mainop");
}
const picopen = () =>{
	main.classList.toggle("maincl");
	main.classList.toggle("mainop");
	navipoint.innerHTML = "Pictures";
}
const vidopen = () =>{
	main.classList.toggle("maincl");
	main.classList.toggle("mainop");
	navipoint.innerHTML = "Videos";
}
const muopen = () =>{
	main.classList.toggle("maincl");
	main.classList.toggle("mainop");
	navipoint.innerHTML = "Music";
}
const downopen = () =>{
	main.classList.toggle("maincl");
	main.classList.toggle("mainop");
	navipoint.innerHTML = "Downloads";
}
const docopen = () =>{
	main.classList.toggle("maincl");
	main.classList.toggle("mainop");
	navipoint.innerHTML = "Documents";
}