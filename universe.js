const rangebar = document.getElementById("myrange");
const rangenum = document.getElementById("rangenum");
function rangefunction(){
	rangenum.innerHTML=rangebar.value;
}
rangebar.addEventListener("input",rangefunction);