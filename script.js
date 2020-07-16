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
			
			node.style.animation = `lilabel .5s ease forwards ${index /15}s`;

		
		}
	});
}












