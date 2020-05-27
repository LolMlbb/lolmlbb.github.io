const selectname = document.getElementById("selectname");
const rangebar = document.getElementById("myrange");
const rangenum = document.getElementById("rangenum");
const button = document.getElementById("mainbtn");
function rangefunction(){
	rangenum.innerHTML=rangebar.value;
}
rangebar.addEventListener("input",rangefunction);
 
const decide = () =>{
	if(selectname.value === "empty"){
		alert("\nနာမည်ကိုရွေးပေးပါဦးခင်ဗျ");
	}
}
button.addEventListener("click",decide);
