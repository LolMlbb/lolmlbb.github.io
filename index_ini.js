var users = [
	{
		email : "myintkokooo@icloud.com",
		password : "root"
	},
	{
		email : "zarni.winkabar@gmail.com",
		password : "electronics"
	},
	{
		email : "oookoktniym@gmail.com",
		password : "forestman199"
	}
];
var timeline_up = [
	{
		name : "Kaung Si Thu"
	},
	{
		name : "Wai Phyo Thu"
	},
	{
		name : "Soe Win Htun"
	}
];
var timeline_down = [
	{
		detail : "what the hell is g'ngon"
	},
	{
		detail : "what the fuck?"
	},
	{
		detail : "Exo Sehun?"
	}
];
function rent(j){
	console.log(j);
}
function progress_state(u , i){
	for(var t = 0; t<users.length; t++){
		if(users[t].email === u &&
			users[t].password === i){
			return true;
		}
	}
	return false;
}
function login(username, password){
	if(progress_state(username, password)){
		console.log("SuperUser alert!!!!!!");
	for( var y=0; y<timeline_up.length; y++){
		console.log(timeline_up[y].name+" : "+timeline_down[y].detail);
		}
		window.alert("Welcome Superuser");
	}
	else{
		// alert ("Welcome to my page");
		console.log("***Normal User***");
	}
}
function come(){
var ema = prompt("Email");
var pwd = prompt("Password?");
login(ema, pwd);
}