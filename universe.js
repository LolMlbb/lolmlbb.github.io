const selectname = document.getElementById("selectname");
const rangebar = document.getElementById("myrange");
const rangenum = document.getElementById("rangenum");
const button = document.getElementById("mainbtn");
const QnA = document.getElementById("main");
const qage = document.getElementById("qage");
const about = document.getElementById("about");
const song = document.getElementById("515");
const fart = document.getElementById("fart");
function rangefunction(){
	rangenum.innerHTML=rangebar.value;
}
rangebar.addEventListener("input",rangefunction);
 
const agebtn = document.getElementById("agebtn");
function QnAage(){
	if(rangebar.value<18){
		fart.play();
		qage.style.display = "none";
		about.innerHTML = "<div><h1 align=center>Sorry, You're not allowed!</h1></div>";
	}
	if(rangebar.value >17){
		song.play();
		qage.style.display = "none";
		QnA.style.visibility = "visible";
		QnA.style.opacity = "1";
		QnA.style.transition = "2.5s";
	}
}
agebtn.addEventListener("click",QnAage);
const decide = () =>{
	if(selectname.value === "empty"){
		alert("\nနာမည်ကိုရွေးပေးပါဦးခင်ဗျ");
	}
	if(selectname.value === "kaungsithu"){
		QnA.style.visibility = "hidden";
		QnA.style.opacity = "0";
		about.style.zIndex = "1";
		about.style.display = "block";
		about.innerHTML = "<div class='animated delay-1s flipInY'><h1 align=center><br><br><br><br><br>ကောင်းစည်သူ</h1><div align=center><img style='border-radius:25px' src=kst.jpg width=220 height=320></div><p>သူ့အကြောင်းပြောရမယ်ဆိုရင် ပထမအချက်အနေနဲ့သူက အရမ်းကိုချစ်တတ်သူတစ်ဦးပါ</p><p>ဒါပေမယ့်သူက အဖြစ်မရှိပါဘူး သူကြိုက်တဲ့ကောင်မလေးကိုဖွင့်မပြောရဲပါဘူး။ယောကျ်ားရသွားလဲ ထိုင်ကြည့်နေမယ့်လူစားမျိုးပါ။</p><p>သူ့ဘဝကြီးကိုအလွမ်းတွေနဲ့နှစ်မြှုပ်ထားပီး ဖေ့ဘုတ်ပေါ်လဲ တစ်ပြားမှမတန်တဲ့ ကဗျာတွေတင်နေတတ်သူတစ်ဦးပါ။ သဘောထားကြီးပီး စိတ်ရှည်တတ်သူမို့ သည်းခံခွင့်လွှတ်တတ်တဲ့သဘောရှိပါတယ်။ Mobile Legendsဆော့ရင်တော့ ဖုန်းကိုကိုင်ပေါက်တတ်ပါတယ်</p><p>သူ့ဘဝကြီးမှာအဖြစ်ချင်ဆုံးဆန္ဒကိုပြောပါဆိုရင် GTCကျောင်းကြီးမီးရှို့ပီး စာမေးပွဲကင်းလွတ်ခွင့်ကိုရချင်တာပါ။ အခုကိုဗစ်ကာလအတွင်းမှာ အသက်ရှင်လျှက်ရှိလို့နေပါတယ်။ အချစ်စစ်ကိုရှာဖွေနေသူတစ်ယောက်ပါ။</p><div align=center><p onclick='rehome()' style='cursor:pointer; color:blue;'>ထပ်ကြည့်မယ်</p><br><br></div></div>";
	}
	if(selectname.value === "myintkokooo"){
		QnA.style.visibility = "hidden";
		QnA.style.opacity = "0";
		about.style.zIndex = "1";
		about.style.display = "block";
		about.innerHTML = "<div class='animated delay-1s flipInY'><h1 align=center><br><br><br>မြင့်ကိုကိုဦး</h1><div align=center><img style='border-radius:25px' src=mkko.jpg width=220 height=320></div><p>ခင်ဗျားသူ့အကြောင်းသိသွားရင်တော့ ဝေးဝေးကရှောင်ဖယ်သွားလောက်တယ် အဲ့ကောင်က လူမိုက်ဗျ</p><p>သူ့အကြောင်းသေချာတော့မသိရပေမယ့် တော်တော်အကျင့်မကောင်းတဲ့ကောင် အချစ်စစ်နဲ့ချစ်တတ်သူတစ်ဦးပေ့ါဗျာ</p><p>လူအများပေါ်ကိုကူညီတတ်သလို အနိုင်လဲကျင့်တတ်ပါသေးသဗျ သူ့အကြောင်းသိချင်ရင်တော့ သူ့မိန်းမသာ မေးကြည့်တော့။ ဟင် အထင်မသေးနဲ့သူ့မိန်းမက ချစ်စရာလေးဗျ</p><p>စောက်လုပ်စောက်ကိုင်မရှိ လျှောက်သွားနေတတ်ပေမယ့် တကယ်ကိုလူကောင်းတစ်ဦးပါ။</p><div align=center><p onclick='rehome()' style='cursor:pointer; color:blue;'>ထပ်ကြည့်မယ်</p><br><br></div></div>";
	}
	if(selectname.value === "khinyatizaw"){
		QnA.style.visibility = "hidden";
		QnA.style.opacity = "0";
		about.style.zIndex = "1";
		about.style.display = "block";
		about.innerHTML = "<div class='animated delay-1s flipInY'><h1 align=center><br><br><br>ခင်ရတီဇော်</h1><div align=center><img style='border-radius:25px' src=kytz.jpg width=320 height=240></div><p>သူမက အရမ်းကိုချစ်စရာကောင်းတဲ့ ကောင်မလေးတစ်ယောက်ပါ။ သိုင်းပညာကိုလဲကျွမ်းကျွမ်းကျင်ကျင်တတ်မြောက်သူလဲဖြစ်ပါတယ်ခင်ဗျ</p><p>သူမရဲ့ အိပ်မက်က ကိုရီးယားနိုင်ငံမှာ အခြေချနေထိုင်ဖို့ဖြစ်ပီး သူမကတော့ BTS တုတ်တံကို လိုချင်နေသူတစ်ဦးလဲဖြစ်ပါတယ်။</p><p>BlackPinkအဖွဲ့ကို အရမ်းကြိုက်နှစ်သက်ပီးတော့ ကြုံရာနေရာမှာလဲ ကခုန်နေတတ်သူတစ်ဦးပါ။</p><p>TikTokမှာ ဆယ်လီမလေးဖြစ်ပီး tiktokဗီဒီယိုရိုက်ရတာကို ပျော်ရွှင်နေတတ်သူပါ။</p><div align=center><p onclick='rehome()' style='cursor:pointer; color:blue;'>ထပ်ကြည့်မယ်</p><br><br></div></div>";
	}
	if(selectname.value === "khaingnininainghtwe"){
		QnA.style.visibility = "hidden";
		QnA.style.opacity = "0";
		about.style.zIndex = "1";
		about.style.display = "block";
		about.innerHTML = "<div class='animated delay-1s flipInY'><h1 align=center><br><br><br>ခိုင်နီနီနိုင်ထွေး</h1><div align=center><img style='border-radius:25px' src=knnnh.jpg width=220 height=320></div><p>သူမအကြောင်းပြောရရင် ပြောလို့ကိုကုန်မှာမဟုတ်ပါဘူးဗျာ သူမက ကမ္ဘာမှာ အလှပဆုံးနတ်သမီးလေးဆိုလဲ မမှားဘူးဗျ </p><p>သူမရဲ့ အပြုံးလေးတစ်ခုက လောကကြီးတစ်ခုလုံးကို ကိုင်လှုပ်နိုင်တယ် အရမ်းချစ်ဖို့ကောင်းတဲ့ ကောင်မလေးပါ</p><p>Anime ဇာတ်လမ်းတွဲတွေ နှစ်ခြိုက်ပီးတော့ ခလေးလေးတစ်ယောက်လို မုန့်လေးတွေစားရတာကိုကြိက်နှစ်သက်သူပါ။</p><p>ဂျပန်နိုင်ငံမှာ အခြေချဖို့ စိတ်ကူးရှိပီး  အားကိုးထိုက်လောက်တဲ့ယောက်ျားကိုပိုင်ဆိုင်ထားသူပါ။ အသားအရမ်းဖြူပီး စိတ်ထားကောင်းသူလေးတစ်ယောက်ပါဗျ။</p><div align=center><p onclick='rehome()' style='cursor:pointer; color:blue;'>ထပ်ကြည့်မယ်</p><br><br></div></div>";
	}
	if(selectname.value === "bhonenaylazaw"){
		QnA.style.visibility = "hidden";
		QnA.style.opacity = "0";
		about.style.zIndex = "1";
		about.style.display = "block";
		about.innerHTML = "<div class='animated delay-1s flipInY'><h1 align=center><br><br><br>ဘုန်းနေလဇော်</h1><div align=center><img style='border-radius:25px' src=bnlz.jpg width=300 height=240></div><p>သူက ချီးထုပ်ကြီးပါ။ သူလိုချင်ရာ မရရင် အသံဗြဲကြီးနဲ့အော်ငိုတတ်သူဖြစ်ပီး ဖုန်းကိုင်ရတာ မတအားကြိုက်သူပါ။ </p><p>ဖုန်းကို ဘယ်သူ့ဆီကနေနေ လုကိုင်တတ်ပီး လူတိုင်းကိုလဲ အနိုင်ကျင့်တတ်သူတစ်ဦးပါ။</p><p>ဘနားနား ကာတွန်းကို ခနတိုင်းဖွင့်ခိုင်းပီး အီးပါရင်လဲ ချီးတုံးအကြီးကြီးတွေ ပါတတ်ပါတယ်</p><p>သူမရတဲ့ သီချင်းတွေကို လျှောက်ဆိုတတ်ပီး ဝါးချနေတတ်သူလဲဖြစ်ပါတယ်။မုန့်တွေအမြဲစားချင်နေသူ ပုဂ္ဂိုလ်တစ်ဦးပါ။BTSသီချင်းတွေကိုလဲ လျှောက်ဆိုတတ်ပါသေးတယ်။</p><div align=center><p onclick='rehome()' style='cursor:pointer; color:blue;'>ထပ်ကြည့်မယ်</p><br><br></div></div>";
	}
	if(selectname.value === "kyawswarwin"){
		QnA.style.visibility = "hidden";
		QnA.style.opacity = "0";
		about.style.zIndex = "1";
		about.style.display = "block";
		about.innerHTML = "<div class='animated delay-1s flipInY'><h1 align=center><br><br><br><br><br><br>ကျော်စွာဝင်း</h1><div align=center><img style='border-radius:25px' src=ksw.jpg width=320 height=230></div><p>သူ့နာမည်ကိုပြောလိုက်တာနဲ့ အရပ်မောင်းကောင်းကောင်းနဲ့အားကိုးထိုက်သူကို ခင်ဗျားတို့တန်းမြင်သွားမှာပါပဲ။ </p><p>သူက အေးချမ်းပီး  တိတ်ဆိတ်စွာနေတတ်တဲ့ ရေခဲတုံးကြီးတစ်တုံးပါ။သူ့အတွက် Mobile Legendsဆော့တယ်ဆိုတာ ကြယ်တွေလျှော့ဖို့ဆော့တာပါ။ Mythicလဲ ရောက်ဖူးမယ့်ပုံမပေါ်ပါဘူး။</p><p>သဘောလဲကောင်းသလို ညှာတာစိတ်တွေက သူ့ရင်ဘတ်ထဲမှာကိန်းအောင်းနေပါတယ် အပြင်မှာတော့ထွက်မလာပါဘူး။</p><p>ညညဆို စူပါကပ်တစ်စီးနဲ့ မြို့တစ်ပတ်ပတ်ပီး လမ်းသလားနေတတ်ပါတယ်။ ည ၁၂လောက်ကြီး စူပါကပ်နဲ့အအေးသောက်နေတဲ့လူကိုမြင်မိတယ်ဆိုရင် အဲ့ဒါသူပါပဲ။စော်လဲမရှိဘူး</p><div align=center><p onclick='rehome()' style='cursor:pointer; color:blue;'>ထပ်ကြည့်မယ်</p><br><br></div></div>";
	}
	if(selectname.value === "minthwinkhant"){
		QnA.style.visibility = "hidden";
		QnA.style.opacity = "0";
		about.style.zIndex = "1";
		about.style.display = "block";
		about.innerHTML = "<div class='animated delay-1s flipInY'><h1 align=center><br><br><br><br><br><br><br><br>မင်းသွင်ခန့်</h1><div align=center><img style='border-radius:25px' src=mtk.jpg width=220 height=320></div><p>သူ့ဘဝရဲ့အစကိုပြောပါဆိုရင် သူ့အချစ်ဦးကိုပဲစပြောရမလားမသိတော့ပါဘူးခင်ဗျ။ အချစ်ဦးနဲ့ပြတ်ပီးကတည်းက မိန်းခလေးတွေကို အယုံအကြည်မရှိတော့သူတစ်ဦးပါ။ ရုပ်ချောပေမယ့်သဘောမကောင်းပါဘူး ။ပိုက်ဆံသွားမချေးပါနဲ့ ဆဲလွှတ်ပါလိမ့်မယ်။</p><p>သူက အဖော်မက်သူတစ်ဦးပီပီ သူငယ်ချင်းတွေအပေါ်သံယောဇဥ်အပြည့်ရှိပါတယ်။ပက်ဆံတော့မချေးပါဘူး။</p><p>မိဘတွေအပေါ်သိတတ်တဲ့လူငယ်တစ်ဦးပီပီ အိမ်မကပ်ပါဘူး ။ လူတိုင်းနဲ့ခင်အောင်ပေါင်းတတ်ပါတယ်ခင်ဗျ။ သူ့ကိုခင်ချင်ရင်အလွယ်တကူမိတ်ဆွေဖြစ်နိုင်ပါတယ်ခင်ဗျ။ပက်ဆံတော့မချေးပါဘူး။</p><p>ဘောလုံးအကန်ကောင်းပေမယ့် လူငယ်ထိပ်သီးကောင်းစည်သူကို ခြေစွမ်းမမှီသေးတာတော့အမှန်ပါ။ ယခုထိ အချစ်စစ်ကို ရှာဖွေနေသူတစ်ဦးပါ။</p><div align=center><p onclick='rehome()' style='cursor:pointer; color:blue;'>ထပ်ကြည့်မယ်</p><br><br></div></div>";
	}
	if(selectname.value === "kyawhtaketinmaung"){
		QnA.style.visibility = "hidden";
		QnA.style.opacity = "0";
		about.style.zIndex = "1";
		about.style.display = "block";
		about.innerHTML = "<div class='animated delay-1s flipInY'><h1 align=center><br><br><br><br><br><br>ကျော်ထိပ်တင်မောင်</h1><div align=center><img style='border-radius:25px' src=khtm.jpg width=220 height=310></div><p>သူ့ဘဝကြီးကို ဘီယာနဲ့အသက်ဆက်နေသူတစ်ဦးပါ။ ဘီယာအရမ်းကြိုက်သလို အပျော်အပါးလဲခုံမင်သူတစ်ဦးဖြစ်ပါတယ်။</p><p>လူတစ်ယောက်နားကပ်လိုက်ရင် ပျော်သွားချင်တယ်ဆို သူ့နားသာကပ်လိုက်ပါ။ ဘီယာတော့တူတူထိုင်သောက်ပေးရပါမယ်။</p><p>KTVမှာ ဘော်ဒါတွေစုံလို့ သီချင်းတွေဟဲရင် မျက်ဖြူကြီးစိုက်ပီး rockသီချင်းတွေကုန်းအော်တတ်ပါတယ်။ သဘောကောင်းတဲ့လူငယ်တစ်ယောက်မို့ စော်ကြွေစရာအကွက်တွေချည်းပါပဲ</p><p>ဆံပင်ရှည်ကြီးထားပီး အလန်းဆုံးပုံစံနဲ့နေနေပေမယ့် ရပ်ကွက်ထဲကလူတွေက ဆံပင်ရှည်ကြီးနဲ့ ယောကျ်ားရတော့မှာဆိုပီး မကြာခဏ စွပ်စွဲခံရပါတယ်။ အချစ်စစ်ကိုရှာဖွေနေသူတစ်ဦးပါ။</p><div align=center><p onclick='rehome()' style='cursor:pointer; color:blue;'>ထပ်ကြည့်မယ်</p><br><br></div></div>";
	}
	if(selectname.value === "soewinhtun"){
		QnA.style.visibility = "hidden";
		QnA.style.opacity = "0";
		about.style.zIndex = "1";
		about.style.display = "block";
about.innerHTML = "<div class='animated delay-1s flipInY'><h1 align=center><br><br><br><br><br><br>စိုးဝင်းထွန်း</h1><div align=center><img style='border-radius:25px' src=swh.jpg width=320 height=230></div><p>သူ့အကြောင်းပြောပါဆိုရင် မသေချာမရေရာကနေ စရပါလိမ့်မယ်။ အသဲကွဲနေတာလား ဝမ်းနည်းနေတာလား ပျော်နေတာလားမသိရပဲ မျက်နှာကတစ်မျိုးတည်းဖြစ်နေတတ်တဲ့ဘစိုင်းလိုလူမျိုးပါ။</p><p>သူက ကျောင်းမှာစာအတော်ဆုံးအဖြစ်သတ်မှတ်ခံရသလို မိဘအပေါ်လဲသိတတ်သူတစ်ဦးပါ။</p><p>သူ့ရဲ့ရည်မှန်းချက်က သူကြိုက်နေတဲ့ကောင်မလေး သတိထားမိလာပီး သူ့ကိုပြန်ကြိုက်လာစေချင်တာပါ။</p><p>နေရာတကာမှာ ငံတတ်သလို လူတိုင်းနဲ့လဲတည့်အောင်ပေါင်းတတ်သူတစ်ဦးပါ။</p><p> Exo big fanဖြစ်ပီး ဖေ့ဘုတ်မှာ အသည်းကွဲစာတွေလျှောက်ရေးနေသူတစ်ဦးပါ။ အချစ်စစ်ကိုရှာဖွေနေတဲ့ပုဂ္ဂိုလ်တစ်ဦးဖြစ်ပါတယ်ခင်ဗျ။</p><div align=center><p onclick='rehome()' style='cursor:pointer; color:blue;'>ထပ်ကြည့်မယ်</p><br><br></div></div>";	}
}
button.addEventListener("click",decide);
const warninghey = () =>{
	alert("\nဟိတ်! ဘာတွေလျှောက်ကူးနေတာလဲ?");
}
function rehome(){
	QnA.style.visibility = "visible";
	QnA.style.opacity = "1";
	about.style.display = "none";
	about.style.transition = "1s";
}
