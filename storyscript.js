let cname = document.getElementsByClassName("cname")[0];
let choosec = document.getElementsByClassName("choosec")[0];
const charconfirm = document.getElementById("charconfirm");
let intropage = document.getElementsByClassName("intropage")[0];
let charr = document.querySelectorAll(".charr");
let storypage1 = document.getElementsByClassName("storypage1")[0];
let storyhero = document.querySelector(".storypage1 #charhero");


const onloadresume = () =>{
	setTimeout(()=>{
	localStorage.getItem("storyresume").style.opacity = "1";
	localStorage.getItem("storyresume").style.zIndex = "1";
},500);
}
const inputchar = (index) =>{
	if(typeof(Storage) !== "undefined"){
	cname.innerHTML = charr[index].value;
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
	storyhero.innerHTML = localStorage.getItem("choosehero");
	storypage1.style.opacity = "1";
	storypage1.style.zIndex = "1";
}
});
