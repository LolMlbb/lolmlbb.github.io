const logo = document.getElementsByClassName("logo")[0];
const logolabel = document.getElementsByClassName("logo_label")[0];
const rocketlaunch = document.getElementById("rocket_launch");
const linkcontainer = document.querySelector(".link_container");
const links = document.querySelectorAll(".link_container li")
const burger = document.getElementById("humburger");
const rocket = () =>{
	logolabel.classList.toggle("label_active");
	setTimeout(()=>{
	rocketlaunch.play();
	logo.classList.toggle("rocket_active");
	},1000);
	setTimeout(()=>{
		logo.classList.toggle("rocket_active");
		logolabel.classList.toggle("label_active");
	},2000);
}
logo.addEventListener("click",rocket);

const showbar = () =>{
	linkcontainer.classList.toggle("showbar");
	links.forEach((node,index) =>{
		if(node.style.animation){
			node.style.animation = "";
		}
		else{
			
			node.style.animation = `lilabel .5s ease forwards ${index /8}s`;

		
		}
	});
}
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











