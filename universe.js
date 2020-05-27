const selectname = document.getElementById("selectname");
const rangebar = document.getElementById("myrange");
const rangenum = document.getElementById("rangenum");
const button = document.getElementById("mainbtn");
const QnA = document.getElementById("main");
const about = document.getElementById("about");
function rangefunction(){
	rangenum.innerHTML=rangebar.value;
}
rangebar.addEventListener("input",rangefunction);
 
const decide = () =>{
	if(selectname.value === "empty"){
		alert("\nနာမည်ကိုရွေးပေးပါဦးခင်ဗျ");
	}
	if(selectname.value === "kaungsithu"){
		QnA.style.display = "none";
		about.innerHTML = "<div class='animated delay-1s flipInX'><br><br><br><br><h1 align=center>ကောင်းစည်သူ</h1><div align=center><img style='border-radius:25px' src=kst.jpg width=220 height=320></div><p>သူ့အကြောင်းပြောရမယ်ဆိုရင် ပထမအချက်အနေနဲ့သူက စော်အရမ်းလိုချင်နေတဲ့လူသားတစ်ယောက်ပါ။</p><p>ဒါပေမယ့်သူက အဖြစ်မရှိပါဘူး စော်တွေက သူ့ကိုမချစ်ကြဘူး ဘာညာပဲ ညည်းနေသူတစ်ယောက်ပေါ့ဗျာ</p><p>သူ crush တဲ့သူတွေကို ရေတွက်ကြည့်မယ်ဆို အယောက်၂၀၀ မကပါဘူး။ ဒါပေမယ့် အဝေးကနေထိုင်ကြည့်ပီး feel နေတတ်သူတစ်ယောက်ပါ။</p><p>သူက ညစ်ညမ်းဗီဒီယိုတွေကိုလဲ များစွာကြည့်ရှုပါတယ် တစ်ကိုယ်ရည်အာသာဖြေခြင်းများကိုလဲ လုပ်ဆောင်နေသူတစ်ယောက်ပါ။</p><div align=center><a href='https://myintkokooo.github.io'>HOME</a><br><br></div></div>";
	}
}
button.addEventListener("click",decide);
