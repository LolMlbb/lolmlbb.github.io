let cname = document.getElementsByClassName("cname")[0];
let choosec = document.getElementsByClassName("choosec")[0];
const charconfirm = document.getElementById("charconfirm");
let intropage = document.getElementsByClassName("intropage")[0];
let charr = document.querySelectorAll(".charr");
let storypage1 = document.getElementsByClassName("storypage1")[0];
let storyhero = document.querySelector(".storypage1 #charhero");
let storyline = document.querySelector(".storypage1 #storyline .storypg");
let choose1label = document.getElementById("choose1label");
let choose2label = document.getElementById("choose2label");


if(typeof(Storage) !== "undefined"){
	localStorage.setItem("ayemya1","အေးမြအိပ်ရာနိုးပီ");
	localStorage.setItem("kokong1","<div align='center'><iframe class='iframeedit' src='kokonaing1.html' frameborder=0></div>");
	localStorage.setItem("kaungkaung1","တော်ဝင်မင်းသားတစ်ပါးလို ချမ်းသာကြွယ်ဝခြင်းနှင့်အတူ ကိုကောင်းကောင်းတစ်ယောက် ဇိမ်ခံရသည့်အခိုက်အတန့်ဆိုသည်မှာ ဘယ်တုန်းကမှမရှိ။ ကြွက်တွင်းလောက်တောင်မခမ်းနား၊ မိုးရွာရင်တောင်မိုးမလုံသည့်ခေါင်းမိုးတစ်စုံ၊ ထိုကဲ့သို့သောနေရာတွင် နေထိုင်ရသည့်ကိုကောင်းအတွက် မနက်စာ စားစရာဆိုရာမှာလည်း ပေါင်မုန့်ခြောက်နှင့် နက်စ်ပလိန်းတစ်ခွက်မျှသာ");
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
	setTimeout(()=>{
	storypage1.style.transition = "6s";
	storypage1.style.opacity = "1";
	storypage1.style.zIndex = "1";
},500);
}
});
