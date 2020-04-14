var input = document.getElementById("inputitems");
var button = document.getElementById("btn_add");
var ol = document.getElementsByClassName("ol")[0];
var clear_button = document.getElementById("clear_data");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body_bg = document.getElementById("main");
var text = document.querySelectorAll(".h1color")[0];
var text2 = document.querySelectorAll(".h1color")[1];
var text3 = document.querySelectorAll(".h1color")[2];
var text4 = document.querySelectorAll(".h1color")[3];
var text5 = document.querySelectorAll(".h1color")[4];
var text6 = document.querySelectorAll(".h1color")[5];
var choose = document.querySelector("select");

function changeColor(){
	text.style.color = choose.value;
	text2.style.color = choose.value;
	text3.style.color = choose.value;
	text4.style.color = choose.value;
	text5.style.color = choose.value;
	text6.style.color = choose.value;
}

color1.addEventListener("input", function(){
	body_bg.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")";
});
color2.addEventListener("input", function(){
	body_bg.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")";
});

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
	}
];
function click_function(){
	if(inputlength()>0 && input.value !== item[0].item_name && input.value !== item[1].code){
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
}
function keypress_function(){
	if(inputlength()>0 && event.which === 13 && input.value !== item[0].item_name && input.value !== item[1].code){
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
}

button.addEventListener("click", click_function);
input.addEventListener("keypress", keypress_function);

// clear_button.addEventListener("click", function(){
// 	return ol.innerHTML = "";
// });

