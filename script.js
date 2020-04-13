var input = document.getElementById("inputitems");
var button = document.getElementById("btn_add");
var ol = document.getElementsByClassName("ol")[0];
var clear_button = document.getElementById("clear_data");

function inputlength(){
	return input.value.length;
}
var item = [
	{
		item_name : "apple",
		price : "400Ks"
	},
	{
		code : "clear"
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

