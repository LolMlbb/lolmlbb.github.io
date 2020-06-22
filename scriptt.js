const result = document.getElementsByClassName("result")[0];
const chooseit = document.getElementById("chooseit");
const mainresult = document.querySelectorAll(".main_result");
const thing = document.querySelectorAll(".main_result .tabcontent");
const mainlabel = document.querySelectorAll(".main_result .main_label")

const letselect = (index) =>{
	mainresult.forEach((node)=>{
		node.style.display = "none";
	});
	mainresult[index].style.display = "block";
	mainlabel.forEach((node)=>{
		node.style.animation = "";
	});
	mainlabel[index].style.animation = "labelmove 1s ease forwards";
	thing.forEach((node)=>{
		node.style.animation = "";
	});
	thing[index].style.animation = "appeareach 1s ease forwards";
}
