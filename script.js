var input = document.getElementById("inputitems");
var button = document.getElementById("btn_add");
var ol = document.getElementsByClassName("ol")[0];
var clear_button = document.getElementById("clear_wave");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body_bg = document.getElementById("main");
var text = document.querySelectorAll(".h1color")[0];
var text2 = document.querySelectorAll(".h1color")[1];
var text3 = document.querySelectorAll(".h1color")[2];
var text4 = document.querySelectorAll(".h1color")[3];
var text5 = document.querySelectorAll(".h1color")[4];
var text6 = document.querySelectorAll(".h1color")[5];
var text7 = document.querySelectorAll(".h1color")[6];
var text8 = document.querySelectorAll(".h1color")[7];
var text9 = document.querySelectorAll(".h1color")[8];
var text10 = document.querySelectorAll(".h1color")[9];
var text11 = document.querySelectorAll(".h1color")[10];
var text12 = document.querySelectorAll(".h1color")[11];
var text13 = document.querySelectorAll(".h1color")[12];
var text14 = document.querySelectorAll(".h1color")[13];
var choose = document.querySelector("select");
var colory = document.querySelector(".bgcolory");
var colorg = document.querySelector(".bgcolorg");
var colorr = document.querySelector(".bgcolorr");
var colorb = document.querySelector(".bgcolorb");
var colorw = document.querySelector(".bgcolorw");
var h4 = document.querySelector("h4");

clear_button.addEventListener("click", function(){
	input.value = "";
});
function customChangew(){
	body_bg.style.background = colorw.value;
	h4.textContent = "Current background color is "+body_bg.style.background+".";
	text.style.color = "black";
	text2.style.color = "black";
	text3.style.color = "black";
	text4.style.color = "black";
	text5.style.color = "black";
	text6.style.color = "black";
	text7.style.color = "black";
	text8.style.color = "black";
	text9.style.color = "black";
	text10.style.color = "black";
	text11.style.color = "black";
	text12.style.color = "black";
	text13.style.color = "black";
	text14.style.color = "black";
}
function customChangey(){
	body_bg.style.background = colory.value;
	h4.textContent = "Current background color is "+body_bg.style.background+".";
	text.style.color = "red";
	text2.style.color = "red";
	text3.style.color = "red";
	text4.style.color = "red";
	text5.style.color = "red";
	text6.style.color = "red";
	text7.style.color = "red";
	text8.style.color = "red";
	text9.style.color = "red";
	text10.style.color = "red";
	text11.style.color = "red";
	text12.style.color = "red";
	text13.style.color = "red";
	text14.style.color = "red";
}
function customChangeg(){
	body_bg.style.background = colorg.value;
	h4.textContent = "Current background color is "+body_bg.style.background+".";
	text.style.color = "purple";
	text2.style.color = "purple";
	text3.style.color = "purple";
	text4.style.color = "purple";
	text5.style.color = "purple";
	text6.style.color = "purple";
	text7.style.color = "purple";
	text8.style.color = "purple";
	text9.style.color = "purple";
	text10.style.color = "purple";
	text11.style.color = "purple";
	text12.style.color = "purple";
	text13.style.color = "purple";
	text14.style.color = "purple";
}
function customChanger(){
	body_bg.style.background = colorr.value;
	h4.textContent = "Current background color is "+body_bg.style.background+".";
	text.style.color = "blue";
	text2.style.color = "blue";
	text3.style.color = "blue";
	text4.style.color = "blue";
	text5.style.color = "blue";
	text6.style.color = "blue";
	text7.style.color = "blue";
	text8.style.color = "blue";
	text9.style.color = "blue";
	text10.style.color = "blue";
	text11.style.color = "blue";
	text12.style.color = "blue";
	text13.style.color = "blue";
	text14.style.color = "blue";
}
function customChangeb(){
	body_bg.style.background = colorb.value;
	h4.textContent = "Current background color is "+body_bg.style.background+".";
	text.style.color = "white";
	text2.style.color = "white";
	text3.style.color = "white";
	text4.style.color = "white";
	text5.style.color = "white";
	text6.style.color = "white";
	text7.style.color = "white";
	text8.style.color = "white";
	text9.style.color = "white";
	text10.style.color = "white";
	text11.style.color = "white";
	text12.style.color = "white";
	text13.style.color = "white";
	text14.style.color = "white";
}
function changeColor(){
	text.style.color = choose.value;
	text2.style.color = choose.value;
	text3.style.color = choose.value;
	text4.style.color = choose.value;
	text5.style.color = choose.value;
	text6.style.color = choose.value;
	text7.style.color = choose.value;
	text8.style.color = choose.value;
	text9.style.color = choose.value;
	text10.style.color = choose.value;
	text11.style.color = choose.value;
	text12.style.color = choose.value;
	text13.style.color = choose.value;
	text14.style.color = choose.value;

}

function setGradient(){
	body_bg.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")";
	h4.textContent = body_bg.style.background;
}
function inputlength(){
	return input.value.length;
}
var item = [
	{
		item_name : "KhaingNiNiNaingHtwe",
		price : "MyintKoKoOo's wife"
	},
	{
		code : "clear()"
	},
	{
		enter : "login()"
	}
];
function click_function(){
	if(inputlength()>0 && input.value !== item[0].item_name && input.value !== item[1].code && input.value !== item[2].enter){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.setAttribute("class", "li_part");
	ol.appendChild(li);
	input.value = "";
}
	if(inputlength()>0 && input.value === item[0].item_name && input.value !== item[1].code){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(item[0].item_name+" : "+item[0].price));
	li.setAttribute("class", "li_part");
	ol.appendChild(li);
	input.value = "";
	}
	if(inputlength()>0 && input.value === item[1].code){
	input.value = "";
	ol.innerHTML = "";
	}
	if(input.value === item[2].enter){
		input.value = "";
		call();
	}
}
function keypress_function(event){
	if(inputlength()>0 && event.which === 13 && input.value !== item[0].item_name && input.value !== item[1].code && input.value !== item[2].enter){
	var li = document.createElement("li");
	li.setAttribute("class", "li_part");
	li.appendChild(document.createTextNode(input.value));
	ol.appendChild(li);
	input.value = "";
}
	if(inputlength()>0 && input.value === item[0].item_name && event.which === 13 && input.value !== item[1].code){
	var li = document.createElement("li");
	li.setAttribute("class", "li_part");
	li.appendChild(document.createTextNode(item[0].item_name+" : "+item[0].price));
	ol.appendChild(li);
	input.value = "";
	}
	if(inputlength()>0 && input.value === item[1].code && event.which === 13){
	input.value = "";
	ol.innerHTML = "";
	}
	if(input.value === item[2].enter){
		input.value = "";
		call();
	}
}

button.addEventListener("click", click_function);
input.addEventListener("keypress", keypress_function);

var keys = [
	{
		password : "288160"
	}
];
var timeline = {
	no1 : "I love you Khaing Ni Ni Naing Htwe.",
	no2 : "You are my world.",
	no3 : "Marry me pleaseeee.",
	no4 : "You are the most beautiful girl in the world.",
	no5 : "I ❤️ U ."
}
function login(password){
	if(password === keys[0].password){
		alert(timeline.no1+"\n"+timeline.no2+"\n"+timeline.no3+"\n"+timeline.no4+"\n"+timeline.no5);
	}
	else if(password.length<1){
		alert("please type something!");
	}
	else{
		alert("Sorry! wrong password");
	}
}

function call(){
var t = prompt("Type the password!");
login(t);
}
// clear_button.addEventListener("click", function(){
// 	return ol.innerHTML = "";
// });

