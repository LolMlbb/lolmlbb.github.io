const result = document.getElementsByClassName("result")[0];
const chooseit = document.getElementById("chooseit");
const mainresult = document.querySelectorAll(".main_result");
const thing0 = document.querySelectorAll(".main_result .tabcontent .thing0");
const thing11 = document.querySelectorAll(".main_result .tabcontent .thing11");
const thing2 = document.querySelectorAll(".main_result .tabcontent .thing2");
const thing3 = document.querySelectorAll(".main_result .tabcontent .thing3");
const thing4 = document.querySelectorAll(".main_result .tabcontent .thing4");
const thing5 = document.querySelectorAll(".main_result .tabcontent .thing5");
const thing6 = document.querySelectorAll(".main_result .tabcontent .thing6");
const thing7 = document.querySelectorAll(".main_result .tabcontent .thing7");
const thing8 = document.querySelectorAll(".main_result .tabcontent .thing8");
const thing9 = document.querySelectorAll(".main_result .tabcontent .thing9");
const thing10 = document.querySelectorAll(".main_result .tabcontent .thing10");

const mainlabel = document.querySelectorAll(".main_result .main_label");

const letselect = (index) =>{
	mainresult.forEach((node)=>{
		node.style.display = "none";
	});
	mainresult[index].style.display = "block";
	mainlabel.forEach((node)=>{
		node.style.animation = "";
	});
	mainlabel[index].style.animation = "labelmove 1s ease forwards";

	thing0.forEach((node,index)=>{
			node.style.animation = "";
		setTimeout(()=>{
			node.style.animation = `appeareach .5s ease forwards ${index / 20}s`;
		},100);
	});

	thing2.forEach((node,index)=>{
			node.style.animation = "";
		setTimeout(()=>{
			node.style.animation = `appeareach .5s ease forwards ${index / 20}s`;
		},100);
	});

	thing3.forEach((node,index)=>{
			node.style.animation = "";
		setTimeout(()=>{
			node.style.animation = `appeareach .5s ease forwards ${index / 20}s`;
		},100);
	});

	thing4.forEach((node,index)=>{
			node.style.animation = "";
		setTimeout(()=>{
			node.style.animation = `appeareach .5s ease forwards ${index / 20}s`;
		},100);
	});

	thing5.forEach((node,index)=>{
			node.style.animation = "";
		setTimeout(()=>{
			node.style.animation = `appeareach .5s ease forwards ${index / 20}s`;
		},100);
	});

	thing6.forEach((node,index)=>{
			node.style.animation = "";
		setTimeout(()=>{
			node.style.animation = `appeareach .5s ease forwards ${index / 20}s`;
		},100);
	});

	thing7.forEach((node,index)=>{
			node.style.animation = "";
		setTimeout(()=>{
			node.style.animation = `appeareach .5s ease forwards ${index / 20}s`;
		},100);
	});

	thing8.forEach((node,index)=>{
			node.style.animation = "";
		setTimeout(()=>{
			node.style.animation = `appeareach .5s ease forwards ${index / 20}s`;
		},100);
	});

	thing9.forEach((node,index)=>{
			node.style.animation = "";
		setTimeout(()=>{
			node.style.animation = `appeareach .5s ease forwards ${index / 20}s`;
		},100);
	});

	thing10.forEach((node,index)=>{
			node.style.animation = "";
		setTimeout(()=>{
			node.style.animation = `appeareach .5s ease forwards ${index / 20}s`;
		},100);
	});

	thing11.forEach((node,index)=>{
			node.style.animation = "";
		setTimeout(()=>{
			node.style.animation = `appeareach .5s ease forwards ${index / 20}s`;
		},100);
	});

	
	
}
