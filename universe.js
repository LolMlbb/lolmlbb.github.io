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
	if(selectname.value === "khinyatizaw"){
		QnA.style.display = "none";
		about.innerHTML = "<div class='animated delay-1s flipInY'><h1 align=center><br><br><br>ခင်ရတီဇော်</h1><div align=center><img style='border-radius:25px' src=kytz.jpg width=320 height=240></div><p>သူမက အရမ်းကိုချစ်စရာကောင်းတဲ့ ကောင်မလေးတစ်ယောက်ပါ။ သိုင်းပညာကိုလဲကျွမ်းကျွမ်းကျင်ကျင်တတ်မြောက်သူလဲဖြစ်ပါတယ်ခင်ဗျ</p><p>သူမရဲ့ အိပ်မက်က ကိုရီးယားနိုင်ငံမှာ အခြေချနေထိုင်ဖို့ဖြစ်ပီး သူမကတော့ BTS တုတ်တံကို လိုချင်နေသူတစ်ဦးလဲဖြစ်ပါတယ်။</p><p>BlackPinkအဖွဲ့ကို အရမ်းကြိုက်နှစ်သက်ပီးတော့ ကြုံရာနေရာမှာလဲ ကခုန်နေတတ်သူတစ်ဦးပါ။</p><p>TikTokမှာ ဆယ်လီမလေးဖြစ်ပီး tiktokဗီဒီယိုရိုက်ရတာကို ပျော်ရွှင်နေတတ်သူပါ။</p><div align=center><a href='https://myintkokooo.github.io'>HOME</a><br><br></div></div>";
	}
	if(selectname.value === "khaingnininainghtwe"){
		QnA.style.display = "none";
		about.innerHTML = "<div class='animated delay-1s flipInY'><h1 align=center><br><br><br>ခိုင်နီနီနိုင်ထွေး</h1><div align=center><img style='border-radius:25px' src=knnnh.jpg width=220 height=320></div><p>သူမအကြောင်းပြောရရင် ပြောလို့ကိုကုန်မှာမဟုတ်ပါဘူးဗျာ သူမက ကမ္ဘာမှာ အလှပဆုံးနတ်သမီးလေးဆိုလဲ မမှားဘူးဗျ </p><p>သူမရဲ့ အပြုံးလေးတစ်ခုက လောကကြီးတစ်ခုလုံးကို ကိုင်လှုပ်နိုင်တယ် အရမ်းချစ်ဖို့ကောင်းတဲ့ ကောင်မလေးပါ</p><p>Anime ဇာတ်လမ်းတွဲတွေ နှစ်ခြိုက်ပီးတော့ ခလေးလေးတစ်ယောက်လို မုန့်လေးတွေစားရတာကိုကြိက်နှစ်သက်သူပါ။</p><p>ဂျပန်နိုင်ငံမှာ အခြေချဖို့ စိတ်ကူးရှိပီး  အားကိုးထိုက်လောက်တဲ့ယောက်ျားကိုပိုင်ဆိုင်ထားသူပါ။ အသားအရမ်းဖြူပီး စိတ်ထားကောင်းသူလေးတစ်ယောက်ပါဗျ။</p><div align=center><a href='https://myintkokooo.github.io'>HOME</a><br><br></div></div>";

	}
}
button.addEventListener("click",decide);
