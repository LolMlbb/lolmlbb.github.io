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
		about.innerHTML = "<div class='animated delay-1s flipInY'><h1 align=center><br><br><br><br><br>ကောင်းစည်သူ</h1><div align=center><img style='border-radius:25px' src=kst.jpg width=220 height=320></div><p>သူ့အကြောင်းပြောရမယ်ဆိုရင် ပထမအချက်အနေနဲ့သူက စော်အရမ်းလိုချင်နေတဲ့လူသားတစ်ယောက်ပါ။</p><p>ဒါပေမယ့်သူက အဖြစ်မရှိပါဘူး စော်တွေက သူ့ကိုမချစ်ကြဘူး ဘာညာပဲ ညည်းနေသူတစ်ယောက်ပေါ့ဗျာ</p><p>သူ crush တဲ့သူတွေကို ရေတွက်ကြည့်မယ်ဆို အယောက်၂၀၀ မကပါဘူး။ ဒါပေမယ့် အဝေးကနေထိုင်ကြည့်ပီး feel နေတတ်သူတစ်ယောက်ပါ။</p><p>သူက ညစ်ညမ်းဗီဒီယိုတွေကိုလဲ များစွာကြည့်ရှုပါတယ် တစ်ကိုယ်ရည်အာသာဖြေခြင်းများကိုလဲ လုပ်ဆောင်နေသူတစ်ယောက်ပါ။</p><div align=center><a href='https://myintkokooo.github.io'>HOME</a><br><br></div></div>";
	}
	if(selectname.value === "myintkokooo"){
		QnA.style.display = "none";
		about.innerHTML = "<div class='animated delay-1s flipInY'><h1 align=center><br><br><br>မြင့်ကိုကိုဦး</h1><div align=center><img style='border-radius:25px' src=mkko.jpg width=220 height=320></div><p>ခင်ဗျားသူ့အကြောင်းသိသွားရင်တော့ ဝေးဝေးကရှောင်ဖယ်သွားလောက်တယ် အဲ့ကောင်က လူမိုက်ဗျ</p><p>သူ့အကြောင်းသေချာတော့မသိရပေမယ့် တော်တော်အကျင့်မကောင်းတဲ့ကောင် အချစ်စစ်နဲ့ချစ်တတ်သူတစ်ဦးပေ့ါဗျာ</p><p>လူအများပေါ်ကိုကူညီတတ်သလို အနိုင်လဲကျင့်တတ်ပါသေးသဗျ သူ့အကြောင်းသိချင်ရင်တော့ သူ့မိန်းမသာ မေးကြည့်တော့။ ဟင် အထင်မသေးနဲ့သူ့မိန်းမက ချစ်စရာလေးဗျ</p><p>စောက်လုပ်စောက်ကိုင်မရှိ လျှောက်သွားနေတတ်ပေမယ့် တကယ်ကိုလူကောင်းတစ်ဦးပါ။</p><div align=center><a href='https://myintkokooo.github.io'>HOME</a><br><br></div></div>";
	}
}
button.addEventListener("click",decide);
