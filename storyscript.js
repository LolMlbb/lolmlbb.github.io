let cname = document.getElementsByClassName("cname")[0];
let choosec = document.getElementsByClassName("choosec")[0];
const charconfirm = document.getElementById("charconfirm");
let intropage = document.getElementsByClassName("intropage")[0];
let charr = document.querySelectorAll(".charr");
let storypage1 = document.getElementsByClassName("storypage1")[0];
let storyhero = document.querySelector(".storypage1 #charhero");
let storyline = document.querySelector(".storypage1 #storyline .storypg");
let chooselabel1 = document.getElementById("choose1label");
let chooselabel2 = document.getElementById("choose2label");
let storyok = document.getElementById("storyok");
let realchoice = document.querySelectorAll(".choice #realchoice");
let buttonalter = document.getElementById("buttonalter");

	localStorage.setItem("clabel1","");
	localStorage.setItem("clabel2","");
	localStorage.setItem("choosehero","");
	localStorage.setItem("userchoice","");
if(typeof(Storage) !== "undefined"){
	localStorage.setItem("ayemya1","<div align='center'><iframe class='iframeedit' src='ayemya1.html' frameborder=0></div>");
	localStorage.setItem("kaungkaung1.1.1","<div align='center'><iframe class='iframeedit' src='kaungkaung1.1.1.html' frameborder=0></div>");
	localStorage.setItem("kokong1","<div align='center'><iframe class='iframeedit' src='kokonaing1.html' frameborder=0></div>");
	localStorage.setItem("kaungkaung1","<div align='center'><iframe class='iframeedit' src='kaungkaung1.html' frameborder=0></div>");
	localStorage.setItem("kaungkaung1.1","<div align='center'><iframe class='iframeedit' src='kaungkaung1.1.html' frameborder=0></div>");
	localStorage.setItem("ayemya1.1","<div align='center'><iframe class='iframeedit' src='ayemya1.1.html' frameborder=0></div>");
	localStorage.setItem("ayemya1.2","<div align='center'><iframe class='iframeedit' src='ayemya1.2.html' frameborder=0></div>");
}
const inputchar = (index) =>{
	if(typeof(Storage) !== "undefined"){
	if(charr[index].value === "am"){
		cname.innerHTML = "အေးမြ";
	}
	if(charr[index].value === "kgkg"){
		cname.innerHTML = "ကောင်းကောင်း";
	}
	if(charr[index].value === "kng"){
		cname.innerHTML = "ကိုကိုနိုင်";
	}
	choosec.style.visibility = "visible";
	choosec.style.opacity = "1";
	localStorage.setItem("choosehero",charr[index].value);
}
}
charconfirm.addEventListener("click",()=>{
	chooselabel1.style.opacity = "0";
	chooselabel2.style.opacity = "0";
	setTimeout(()=>{
		chooselabel1.style.opacity = "1";
		chooselabel2.style.opacity = "1";
	},8000);
	if(typeof(Storage) !== "undefined"){
	intropage.style.opacity = "0";
	intropage.style.zIndex = "-1";
	localStorage.setItem("storyresume",storypage1);
	storyhero.innerHTML = cname.textContent;
	if(localStorage.getItem("choosehero") === "kgkg"){
		storyline.innerHTML = localStorage.getItem("kaungkaung1");
		localStorage.setItem("clabel1","အချစ်ကိုသူသိအောင်ပြမယ်");
		localStorage.setItem("clabel2","စိတ်ထဲကနေပဲချစ်သွားတော့မယ်");
		chooselabel1.innerHTML = localStorage.getItem("clabel1");
		chooselabel2.innerHTML = localStorage.getItem("clabel2");
	}
	else if(localStorage.getItem("choosehero") === "am"){
		storyline.innerHTML = localStorage.getItem("ayemya1");
		chooselabel1.innerHTML = "အပတ်စဥ်စာမေးပွဲမှာ ပထမဆင့်ရအောင်လုပ်ပြမယ်";
		chooselabel2.innerHTML = "ကျောင်းလစ်မယ်";
	}
	else if(localStorage.getItem("choosehero") === "kng"){
		storyline.innerHTML = localStorage.getItem("kokong1");
	}
	setTimeout(()=>{
	storypage1.style.transition = "3s";
	storypage1.style.opacity = "1";
	storypage1.style.zIndex = "1";
},500);
}
});
const ingamechoose = (index) =>{
	if(typeof(Storage) !=="undefined"){
		localStorage.setItem("userchoice",realchoice[index].value);
		}
	}

const confirmclick = () =>{
	storyline.style.visibility = "hidden";
	storyline.style.opacity = "0";
	chooselabel1.style.opacity = "0";
	chooselabel2.style.opacity = "0";

	setTimeout(()=>{
		storyline.style.transition = "2s";
		storyline.style.visibility = "visible";
		storyline.style.opacity = "1";
	},500);
	setTimeout(()=>{
		storyline.style.transition = "none";
	},2000);
	setTimeout(()=>{
		chooselabel1.style.opacity = "1";
		chooselabel2.style.opacity = "1";
	},8000);
	if(typeof(Storage) !== "undefined"){
		if(localStorage.getItem("choosehero") === "kgkg"){
					if(localStorage.getItem("userchoice") === "ans1"){
						storyline.innerHTML = localStorage.getItem("kaungkaung1.1");
						buttonalter.innerHTML = "<button onclick='kgkg11click()' id='kgkg11' class='storybutton'>အိုခေ</button>";
						const kgkg11 = document.getElementById("kgkg11");
						chooselabel1.innerHTML = "အတန်းထဲရည်းစားစာသွားပေးမယ်";
						chooselabel2.innerHTML = "ပြန်တဲ့အချိန်လမ်းမှာလိုက်ပြောမယ်";
			}
		}
		else if(localStorage.getItem("choosehero") === "am"){
			if(localStorage.getItem("userchoice") === "ans1"){
				storyline.innerHTML = localStorage.getItem("ayemya1.1");
				buttonalter.innerHTML = "<button onclick='am11click()' id='kgkg11' class='storybutton'>အိုခေ</button>";
				chooselabel1.innerHTML = "သူ့အချစ်ကိုငြင်းမယ်";
				chooselabel2.innerHTML = "သူ့ကိုချစ်မိသွားပီ အပြာရောင်ဝတ်လာမယ်";
			}
			if(localStorage.getItem("userchoice") === "ans2"){
				storyline.innerHTML = localStorage.getItem("ayemya1.2");
				buttonalter.innerHTML = "<button onclick='am11click()' id='kgkg11' class='storybutton'>အိုခေ</button>";
				chooselabel1.innerHTML = "ဘေးမှာရှိတဲ့ ဓါးနဲ့ထိုးသတ်မယ်";
				chooselabel2.innerHTML = "မရတော့ဘူး ထန်လာပီ အလိုးခံလိုက်တော့မယ်";
			}
		}
		else if(localStorage.getItem("choosehero") === "kng"){
			
		}
	}
}
// const kgkg11 = document.getElementById("kgkg11");

const kgkg11click = () =>{
		storyline.style.opacity = "0";
		chooselabel1.style.opacity = "0";
		chooselabel2.style.opacity = "0";

	setTimeout(()=>{
		storyline.style.transition = "2s";
		storyline.style.visibility = "visible";
		storyline.style.opacity = "1";
	},500);
	setTimeout(()=>{
		chooselabel1.style.opacity = "1";
		chooselabel2.style.opacity = "1";
	},8000);
	if(localStorage.getItem("userchoice") === "ans1"){
		storyline.innerHTML = localStorage.getItem("kaungkaung1.1.1");
		chooselabel1.innerHTML = "အေးမြဆီက ဖုန်းနံပါတ်တောင်းမယ်";
		chooselabel2.innerHTML = "အရေးမလုပ်ပဲ အေးတိအေးစက်နေမယ်";
	}
	else{
				alert("တစ်ခုခုတော့ရွေးအုံးလေ");
			}
}
const am11click = () =>{
		storyline.style.opacity = "0";
		chooselabel1.style.opacity = "0";
		chooselabel2.style.opacity = "0";

	setTimeout(()=>{
		storyline.style.transition = "2s";
		storyline.style.visibility = "visible";
		storyline.style.opacity = "1";
	},500);
	setTimeout(()=>{
		chooselabel1.style.opacity = "1";
		chooselabel2.style.opacity = "1";
	},8000);
	if(localStorage.getItem("userchoice") === "ans1"){
		storyline.innerHTML = localStorage.getItem("ayemya1.1.1");
		chooselabel1.innerHTML = "သူ့အချစ်ကိုငြင်းမယ်";
		chooselabel2.innerHTML = "သူ့ကိုချစ်မိသွားပီ။အပြာရောင်အင်္ကျီဝတ်လာမယ်";
	}
	else if(localStorage.getItem("userchoice") === "ans2"){

	}
	else{
				alert("တစ်ခုခုတော့ရွေးအုံးလေ");
			}
}
