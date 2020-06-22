const buttons = document.querySelectorAll(".panel .paneltab button");
const contents = document.querySelectorAll(".panel .panelcontent");
const panel = document.getElementsByClassName("panel")[0];

const clicks = (index,colorcode,txtcolor) =>{
	buttons.forEach((node)=>{
		node.style.backgroundColor = "";
		node.style.color = "";
		node.style.boxShadow = "";
	});
	buttons[index].style.backgroundColor = "lightgreen";
	buttons[index].style.color = "black";
	buttons[index].style.boxShadow = "inset 0 0 17px #333";

	contents.forEach((node)=>{
		node.style.display = "none";
		node.style.animation = "";
	});
	contents[index].style.animation = "lilabel 1s ease forwards";
	contents[index].style.display = "block";
	panel.style.backgroundColor = colorcode;
	contents[index].style.color = txtcolor;
}