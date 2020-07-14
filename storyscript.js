let cname = document.getElementsByClassName("cname")[0];
let choosec = document.getElementsByClassName("choosec")[0];
const charconfirm = document.getElementById("charconfirm");
let intropage = document.getElementsByClassName("intropage")[0];
let charr = document.querySelectorAll(".charr");
let storypage1 = document.getElementsByClassName("storypage1")[0];
let storyhero = document.querySelector(".storypage1 #charhero");
let storyline = document.querySelector(".storypage1 #storyline");

if(typeof(Storage) !== "undefined"){
	localStorage.setItem("ayemya1","အေးမြအိပ်ရာနိုးပီ");
	localStorage.setItem("kokong1","ကိုကိုနိုင်အိပ်ရာနိုးပီ");
	localStorage.setItem("kaungkaung1","ကောင်းကောင်းအိပ်ရာနိုးပီ");
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
	if(typeof(Storage) !== "undefined"){
	intropage.style.opacity = "0";
	intropage.style.zIndex = "-1";
	localStorage.setItem("storyresume",storypage1);
	storyhero.innerHTML = cname.textContent;
	if(localStorage.getItem("choosehero") === "kgkg"){
		storyline.innerHTML = localStorage.getItem("kaungkaung1");
	}
	else if(localStorage.getItem("choosehero") === "am"){
		storyline.innerHTML = localStorage.getItem("ayemya1");
	}
	else if(localStorage.getItem("choosehero") === "kng"){
		storyline.innerHTML = localStorage.getItem("kokong1");
	}

	storypage1.style.opacity = "1";
	storypage1.style.zIndex = "1";
}
});
