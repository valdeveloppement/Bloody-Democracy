///////////////////////////Sylvain//////////////////////////////////////////

//SliderGeneral
var generalSlider = tns({
	container: "#bonusTemporaire",
	item: 5,
	fixedWidth: 50,
	touch: true,
	mouseDrag: true,
});


//Bouton selection slider General
document.getElementById("bonusTemporaire").style.display = "block";
document.getElementById("settings").style.display = "none";
document.getElementById("ranking").style.display = "none";
document.getElementById("achievement").style.display = "none";
document.getElementById("possession").style.display = "none";
document.getElementById("iconeBonusTemp").style.border = "3px solid black";

function showBonusTemp(){
	document.getElementById("bonusTemporaire").style.display = "block";
	document.getElementById("settings").style.display = "none";
	document.getElementById("ranking").style.display = "none";
	document.getElementById("achievement").style.display = "none";
	document.getElementById("possession").style.display = "none";
	
	document.getElementById("iconeBonusTemp").style.border = "3px solid black";
	document.getElementById("iconeSettings").style.border = "none";
	document.getElementById("iconeRanking").style.border = "none";
	document.getElementById("iconeAchievement").style.border = "none";
	document.getElementById("iconePossession").style.border = "none";
}

function showSettings(){
	document.getElementById("bonusTemporaire").style.display = "none";
	document.getElementById("settings").style.display = "block";
	document.getElementById("ranking").style.display = "none";
	document.getElementById("achievement").style.display = "none";
	document.getElementById("possession").style.display = "none";
	
	document.getElementById("iconeBonusTemp").style.border = "none";
	document.getElementById("iconeSettings").style.border = "3px solid black";
	document.getElementById("iconeRanking").style.border = "none";
	document.getElementById("iconeAchievement").style.border = "none";
	document.getElementById("iconePossession").style.border = "none";
}

function showRanking(){
	document.getElementById("bonusTemporaire").style.display = "none";
	document.getElementById("settings").style.display = "none";
	document.getElementById("ranking").style.display = "block";
	document.getElementById("achievement").style.display = "none";
	document.getElementById("possession").style.display = "none";
	
	document.getElementById("iconeBonusTemp").style.border = "none";
	document.getElementById("iconeSettings").style.border = "none";
	document.getElementById("iconeRanking").style.border = "3px solid black";
	document.getElementById("iconeAchievement").style.border = "none";
	document.getElementById("iconePossession").style.border = "none";
}

function showAchievement(){
	document.getElementById("bonusTemporaire").style.display = "none";
	document.getElementById("settings").style.display = "none";
	document.getElementById("ranking").style.display = "none";
	document.getElementById("achievement").style.display = "block";
	document.getElementById("possession").style.display = "none";
	
	document.getElementById("iconeBonusTemp").style.border = "none";
	document.getElementById("iconeSettings").style.border = "none";
	document.getElementById("iconeRanking").style.border = "none";
	document.getElementById("iconeAchievement").style.border = "3px solid black";
	document.getElementById("iconePossession").style.border = "none";
}

function showPossession(){
	document.getElementById("bonusTemporaire").style.display = "none";
	document.getElementById("settings").style.display = "none";
	document.getElementById("ranking").style.display = "none";
	document.getElementById("achievement").style.display = "none";
	document.getElementById("possession").style.display = "block";
	
	document.getElementById("iconeBonusTemp").style.border = "none";
	document.getElementById("iconeSettings").style.border = "none";
	document.getElementById("iconeRanking").style.border = "none";
	document.getElementById("iconeAchievement").style.border = "none";
	document.getElementById("iconePossession").style.border = "3px solid black";
}

//SliderStore
var storeSlider1 = tns({
	container: ".argent",
	item: 1,
	controls: false,
	navContainer: "#customize-thumbnails1",
	touch: true,
	mouseDrag: true,
});

var storeSlider2 = tns({
	container: ".vote",
	item: 1,
	controls: false,
	navContainer: "#customize-thumbnails2",
	touch: true,
	mouseDrag: true,
});

var storeSlider3 = tns({
	container: ".gestion",
	item: 1,
	controls: false,
	navContainer: "#customize-thumbnails3",
	touch: true,
	mouseDrag: true,
});


//Bouton selection slider Store
document.getElementById("sliderArgent").style.display = "block";
document.getElementById("sliderVote").style.display = "none";
document.getElementById("sliderGestion").style.display = "none";
document.getElementById("iconeArgent").style.border = "3px solid black";

function showArgent(){
	document.getElementById("sliderArgent").style.display = "block";
	document.getElementById("sliderVote").style.display = "none";
	document.getElementById("sliderGestion").style.display = "none";
	
	document.getElementById("iconeArgent").style.border = "3px solid black";
	document.getElementById("iconeVote").style.border = "none";
	document.getElementById("iconeGestion").style.border = "none";
}
function showVote(){
	document.getElementById("sliderArgent").style.display = "none";
	document.getElementById("sliderVote").style.display = "block";
	document.getElementById("sliderGestion").style.display = "none";
	
	document.getElementById("iconeArgent").style.border = "none";
	document.getElementById("iconeVote").style.border = "3px solid black";
	document.getElementById("iconeGestion").style.border = "none";
}
function showGestion(){
	document.getElementById("sliderArgent").style.display = "none";
	document.getElementById("sliderVote").style.display = "none";
	document.getElementById("sliderGestion").style.display = "block";
	
	document.getElementById("iconeArgent").style.border = "none";
	document.getElementById("iconeVote").style.border = "none";
	document.getElementById("iconeGestion").style.border = "3px solid black";
}



///////////////////////////FinSylvain///////////////////////////////////////