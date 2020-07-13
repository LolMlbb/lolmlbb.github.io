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
const desktop = document.getElementsByClassName("desktop")[0];
const filexitclick = () =>{
	main.classList.toggle("maincl");
	main.classList.toggle("mainop");
	desktop.classList.toggle("disabledesk");
}
const picopen = () =>{
	main.classList.toggle("maincl");
	main.classList.toggle("mainop");
	navipoint.innerHTML = "Pictures";
	desktop.classList.toggle("disabledesk");
	Mainclick(3);
}
const vidopen = () =>{
	main.classList.toggle("maincl");
	main.classList.toggle("mainop");
	navipoint.innerHTML = "Videos";
	desktop.classList.toggle("disabledesk");
	Mainclick(1);
}
const muopen = () =>{
	main.classList.toggle("maincl");
	main.classList.toggle("mainop");
	navipoint.innerHTML = "Music";
	desktop.classList.toggle("disabledesk");
	Mainclick(2);
}
const downopen = () =>{
	main.classList.toggle("maincl");
	main.classList.toggle("mainop");
	navipoint.innerHTML = "Downloads";
	desktop.classList.toggle("disabledesk");
	Mainclick(4);
}
const docopen = () =>{
	main.classList.toggle("maincl");
	main.classList.toggle("mainop");
	navipoint.innerHTML = "Documents";
	desktop.classList.toggle("disabledesk");
	Mainclick(0);
}

const contents = document.querySelectorAll(".tabcontent div");
const btns = document.querySelectorAll(".tabbtn div");
const realbtns = document.querySelectorAll(".tabbtn div button");

const Mainclick = (index) =>{
	contents.forEach((node)=>{
		node.style.maxHeight = "0";
	});
	btns.forEach((node)=>{
		node.style.backgroundColor = "";
		node.style.color = "";
	});
	realbtns.forEach((node)=>{
		node.style.backgroundColor = "";
		node.style.color = "";
	});
	if(index === 0){
		navipoint.innerHTML = "Document";
	}
	if(index === 1){
		navipoint.innerHTML = "Videos";
	}
	if(index === 2){
		navipoint.innerHTML = "Music";
	}
	if(index === 3){
		navipoint.innerHTML = "Pictures";
	}
	if(index === 4){
		navipoint.innerHTML = "Downloads";
	}
	realbtns[index].style.color = "white";
	realbtns[index].style.backgroundColor = "rgba(0,0,0,0)";
	btns[index].style.backgroundColor = "rgba(0,0,0,0.6)";
	contents[index].style.position = "absolute";
	contents[index].style.top = "-3%";
	contents[index].style.width = "100%";
	contents[index].style.maxHeight = `${contents[index].scrollHeight+20}`+"px";
}
