const wlan1 = document.getElementsByClassName("wlan1")[0];
const wifinames1 = document.getElementsByClassName("wifinames1")[0];
const wlanlabel1 = document.getElementsByClassName("wlanlabel1")[0];
const switchwifi = document.getElementsByClassName("switchwifi")[0];
const panel = document.getElementById("panel");
const clickswitch1 = () =>{
if(wlan1.checked == true){
		wifinames1.style.maxHeight = wifinames1.scrollHeight+"px";
		wlanlabel1.innerHTML = "ON";
}
else{
	wifinames1.style.maxHeight = 0;
	wlanlabel1.innerHTML = "OFF";
}
}
const panelclick = () =>{
	switchwifi.classList.toggle("scrollhigh");
}

const wlan2 = document.getElementsByClassName("wlan2")[0];
const wifinames2 = document.getElementsByClassName("wifinames2")[0];
const wlanlabel2 = document.getElementsByClassName("wlanlabel2")[0];
const switchwifi1 = document.getElementsByClassName("switchwifi1")[0];
const panel2 = document.getElementById("panel2");
const clickswitch2 = () =>{
if(wlan2.checked == true){
		wifinames2.style.maxHeight = wifinames1.scrollHeight+"px";
		wlanlabel2.innerHTML = "ON";
}
else{
	wifinames2.style.maxHeight = 0;
	wlanlabel2.innerHTML = "OFF";
}
}
const panelclick1 = () =>{
	switchwifi1.classList.toggle("scrollhigh");
}