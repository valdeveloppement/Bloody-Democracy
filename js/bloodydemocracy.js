/////////////////////////////////////// VALENTIN  /////////////////////////////////////////////


//declaration de tous les multiplicateurs des cartes
$multiBelleGueule=1;
$multiArticleJournal=1;                                                                                                         //changeHere
$multiGrenade=1;
var $compteurAffichageVote;
var $compteurAffichageArgent;



$clicker = document.getElementById('clicker');
$brasDessous = document.getElementById('brasDessous');
$brasDessus = document.getElementById('brasDessus');
$brasPaper = document.getElementById('brasPaper');
$nbClicks=0;
$nbClicks2=0;
$volumeMaster=1;
$MultiClickGlobal=1;    



function majMulti(){
  $MultiClickGlobal=1*$multiBelleGueule*$multiArticleJournal*$multiGrenade;    

}
setInterval(majMulti,50)

var $attenuationPertesGlobal;

if (localStorage.getItem("$attenuationPertesGlobal") === null) {
  $attenuationPertesGlobal =  1;
}else{
  $attenuationPertesGlobal = parseInt(localStorage.getItem("$attenuationPertesGlobal"));
}

var $compteurArgent;
var $compteurVote;
var $compteurVotesTotal;
var $compteurArgentTotal;
var $compteurArgentCaisseNoire;

if (!localStorage.getItem('boutonAchatBelleGueule')){
  localStorage.setItem('boutonAchatBelleGueule',"00")
}

if (!localStorage.getItem('boutonAchatBelleMeuf')){
  localStorage.setItem('boutonAchatBelleMeuf',"00")
}

if (!localStorage.getItem('boutonAchatarticleJournal')){
  localStorage.setItem('boutonAchatarticleJournal',"00")
}

if (!localStorage.getItem('boutonAchatphotoDeFamille')){
  localStorage.setItem('boutonAchatphotoDeFamille',"00")
}

if (!localStorage.getItem('boutonAchatGrenade')){
  localStorage.setItem('boutonAchatGrenade',"00")
}

if (!localStorage.getItem('boutonAchatAvocat')){
  localStorage.setItem('boutonAchatAvocat',"00")
}

if (!localStorage.getItem('boutonAchatChomage')){
  localStorage.setItem('boutonAchatChomage',"00")
}

if (!localStorage.getItem('boutonAchatrsa')){
  localStorage.setItem('boutonAchatrsa',"00")
}

if (!localStorage.getItem('boutonAchatCabinetAvocat')){
  localStorage.setItem('boutonAchatCabinetAvocat',"00")
}

if (!localStorage.getItem('boutonAchatVenteArme')){
  localStorage.setItem('boutonAchatVenteArme',"00")
}

if (!localStorage.getItem('boutonAchatJustice')){
  localStorage.setItem('boutonAchatJustice',"00")
}

if (!localStorage.getItem('boutonAchatbfntv')){
  localStorage.setItem('boutonAchatbfntv',"00")
}

if (!localStorage.getItem('boutonAchatPanem')){
  localStorage.setItem('boutonAchatPanem',"00")
}

if (!localStorage.getItem('boutonAchatEducation')){
  localStorage.setItem('boutonAchatEducation',"00")
}









//....................................CALENDRIER INTERSIDERAL....................................................

// localStorage.clear();


// 1jour dure 2 min
$ratioSecondesParJour=120;

var $tempsDeJeuSeconde;
var $tempsDeJeuJoursVirtuels;
var $jourDuMois;
var $tempsDeJeuMoisVirtuels;

if (localStorage.getItem("$tempsDeJeuSeconde") === null) {
  $tempsDeJeuSeconde =  0;
}else{
  $tempsDeJeuSeconde = parseInt(localStorage.getItem("$tempsDeJeuSeconde"));
}




function tempsQuiPasse(){
  $tempsDeJeuSeconde=$tempsDeJeuSeconde+1

}

setInterval( tempsQuiPasse, 1000)



function storageTempsDeJeuSeconde(){

  localStorage.setItem('$tempsDeJeuSeconde', $tempsDeJeuSeconde);


}
setInterval( storageTempsDeJeuSeconde, 5000)






function refreshCalendar(){
  $tempsDeJeuJoursVirtuels= Math.floor($tempsDeJeuSeconde/$ratioSecondesParJour);

  $jourDuMois=($tempsDeJeuJoursVirtuels % 28);
  
  $tempsDeJeuMoisVirtuels=1+($tempsDeJeuJoursVirtuels-$jourDuMois)/28;

  $moisDeLannee=($tempsDeJeuMoisVirtuels % 13);
  $tempsDeJeuAnneVirtuelle=1+($tempsDeJeuMoisVirtuels-$moisDeLannee)/13
  $jourDuMois=$jourDuMois+1;
  console.log("Jour:"+$jourDuMois+"  Mois:"+$moisDeLannee+ "   anne:"+$tempsDeJeuAnneVirtuelle);
  $calendarTxt = document.getElementById("calendarTxt");
  $calendarTxt.innerHTML="jour: "+$jourDuMois+" mois: "+$moisDeLannee+ "  année: "+$tempsDeJeuAnneVirtuelle;
}
setInterval(refreshCalendar,1000);




// ................................................FIN CALENDRIER....................................................................

//...............................MAJ CARTES ACTIVES ...............................................

$buffBelleGueule = document.getElementById("buffBelleGueule");
$buffArticle = document.getElementById("buffArticle");
$buffBelleMeuf = document.getElementById("buffBelleMeuf");
$buffPhoto = document.getElementById("buffPhoto");
$buffGrenade = document.getElementById("buffGrenade");
$buffAvocat = document.getElementById("buffAvocat");
$buffChomage = document.getElementById("buffChomage");
$buffRsa = document.getElementById("buffRsa");
$buffEducation = document.getElementById("buffEducation");
$buffCabinet = document.getElementById("buffCabinet");
$buffVenteArme = document.getElementById("buffVenteArme");
$buffJustice = document.getElementById("buffJustice");
$buffBfn = document.getElementById("buffBfn");
$buffPanem = document.getElementById("buffPanem");

$infoBelleGueule = document.getElementById("infoBelleGueule");
$infoArticle = document.getElementById("infoArticle");
$infoBelleMeuf = document.getElementById("infoBelleMeuf");
$infoPhoto = document.getElementById("infoPhoto");
$infoGrenade = document.getElementById("infoGrenade");
$infoAvocat = document.getElementById("infoAvocat");
$infoChomage = document.getElementById("infoChomage");
$infoRsa = document.getElementById("infoRsa");
$infoEducation = document.getElementById("infoEducation");
$infoCabinet = document.getElementById("infoCabinet");
$infoVenteArme = document.getElementById("infoVenteArme");
$infoJustice = document.getElementById("infoJustice");
$infoBfn = document.getElementById("infoBfn");
$infoPanem = document.getElementById("infoPanem");




$dureeBelleGueule =30;
$dureeArticle =21;
$dureeBelleMeuf =30;
$dureePhoto =7;
$dureeGrenade =60;
$dureeAvocat =10000000000;
$dureeChomage =120;
$dureeRsa =365;
$dureeEducation =180;
$dureeCabinet =100000000;
$dureeVenteArme =1000000000;
$dureeJustice =10000000000;
$dureeBfn =180;
$dureePanem =10000000000;




function majCartesActives(){

  if (localStorage.getItem("boutonAchatBelleGueule") === null || parseInt(localStorage.getItem("boutonAchatBelleGueule")) == 0) {
    $buffBelleGueule.classList.toggle("cacheCartesBuff",true);
  }
  else{
    $buffBelleGueule.classList.toggle("cacheCartesBuff",false);
    $infoBelleGueule.innerHTML =$dureeBelleGueule-$tempsDeJeuJoursVirtuels+parseInt(localStorage.getItem("boutonAchatBelleGueule").substr(1));

  }


  if (localStorage.getItem("boutonAchatBelleMeuf") === null || parseInt(localStorage.getItem("boutonAchatBelleMeuf")) == 0) {
    $buffBelleMeuf.classList.toggle("cacheCartesBuff",true);
  }
  else{
    $buffBelleMeuf.classList.toggle("cacheCartesBuff",false);
    $infoBelleMeuf.innerHTML =$dureeBelleMeuf-$tempsDeJeuJoursVirtuels+parseInt(localStorage.getItem("boutonAchatBelleMeuf").substr(1));

  }

  if (localStorage.getItem("boutonAchatphotoDeFamille") === null || parseInt(localStorage.getItem("boutonAchatphotoDeFamille")) == 0) {
    $buffPhoto.classList.toggle("cacheCartesBuff",true);
  }
  else{
    $buffPhoto.classList.toggle("cacheCartesBuff",false);
    $infoPhoto.innerHTML =$dureePhoto-$tempsDeJeuJoursVirtuels+parseInt(localStorage.getItem("boutonAchatphotoDeFamille").substr(1));

  }

  if (localStorage.getItem("boutonAchatGrenade") === null || parseInt(localStorage.getItem("boutonAchatGrenade")) == 0) {
    $buffGrenade.classList.toggle("cacheCartesBuff",true);
  }
  else{
    $buffGrenade.classList.toggle("cacheCartesBuff",false);
    $infoGrenade.innerHTML =$dureeGrenade-$tempsDeJeuJoursVirtuels+parseInt(localStorage.getItem("boutonAchatGrenade").substr(1));

  }

  if (localStorage.getItem("boutonAchatEducation") === null || parseInt(localStorage.getItem("boutonAchatEducation")) == 0) {
    $buffEducation.classList.toggle("cacheCartesBuff",true);
  }
  else{
    $buffEducation.classList.toggle("cacheCartesBuff",false);
    $infoEducation.innerHTML =$dureeEducation-$tempsDeJeuJoursVirtuels+parseInt(localStorage.getItem("boutonAchatEducation").substr(1));

  }

  if (localStorage.getItem("boutonAchatbfntv") === null || parseInt(localStorage.getItem("boutonAchatbfntv")) == 0) {
    $buffBfn.classList.toggle("cacheCartesBuff",true);
  }
  else{
    $buffBfn.classList.toggle("cacheCartesBuff",false);
    $infoBfn.innerHTML =$dureeBfn-$tempsDeJeuJoursVirtuels+parseInt(localStorage.getItem("boutonAchatbfntv").substr(1));

  }

  if (localStorage.getItem("boutonAchatPanem") === null || parseInt(localStorage.getItem("boutonAchatPanem")) == 0) {
    $buffPanem.classList.toggle("cacheCartesBuff",true);
  }
  else{
    $buffPanem.classList.toggle("cacheCartesBuff",false);
    $infoPanem.innerHTML ="Infini";

  }

  if (localStorage.getItem("boutonAchatChomage") === null || parseInt(localStorage.getItem("boutonAchatChomage")) == 0) {
    $buffChomage.classList.toggle("cacheCartesBuff",true);
  }
  else{
    $buffChomage.classList.toggle("cacheCartesBuff",false);
    $infoChomage.innerHTML =$dureeChomage-$tempsDeJeuJoursVirtuels+parseInt(localStorage.getItem("boutonAchatChomage").substr(1));

  }

  if (localStorage.getItem("boutonAchatrsa") === null || parseInt(localStorage.getItem("boutonAchatrsa")) == 0) {
    $buffRsa.classList.toggle("cacheCartesBuff",true);
  }
  else{
    $buffRsa.classList.toggle("cacheCartesBuff",false);
    $infoRsa.innerHTML =$dureeRsa-$tempsDeJeuJoursVirtuels+parseInt(localStorage.getItem("boutonAchatrsa").substr(1));

  }

  if (localStorage.getItem("boutonAchatarticleJournal") === null || parseInt(localStorage.getItem("boutonAchatarticleJournal")) == 0) {
    $buffArticle.classList.toggle("cacheCartesBuff",true);
  }
  else{
    $buffArticle.classList.toggle("cacheCartesBuff",false);
    $infoArticle.innerHTML =$dureeArticle-$tempsDeJeuJoursVirtuels+parseInt(localStorage.getItem("boutonAchatarticleJournal").substr(1));

  }

  if (localStorage.getItem("boutonAchatVenteArme") === null || parseInt(localStorage.getItem("boutonAchatVenteArme")) == 0) {
    $buffVenteArme.classList.toggle("cacheCartesBuff",true);
  }
  else{
    $buffVenteArme.classList.toggle("cacheCartesBuff",false);
    $infoVenteArme.innerHTML ="Infini";

  }


  if (localStorage.getItem("boutonAchatAvocat") === null || parseInt(localStorage.getItem("boutonAchatAvocat")) == 0) {
    $buffAvocat.classList.toggle("cacheCartesBuff",true);
  }
  else{
    $buffAvocat.classList.toggle("cacheCartesBuff",false);
    $infoAvocat.innerHTML ="Infini";

  }


  if (localStorage.getItem("boutonAchatCabinetAvocat") === null || parseInt(localStorage.getItem("boutonAchatCabinetAvocat")) == 0) {
    $buffCabinet.classList.toggle("cacheCartesBuff",true);
  }
  else{
    $buffCabinet.classList.toggle("cacheCartesBuff",false);
    $infoCabinet.innerHTML ="Infini";

  }


  if (localStorage.getItem("boutonAchatJustice") === null || parseInt(localStorage.getItem("boutonAchatJustice")) == 0) {
    $buffJustice.classList.toggle("cacheCartesBuff",true);
  }
  else{
    $buffJustice.classList.toggle("cacheCartesBuff",false);
    $infoJustice.innerHTML ="Infini";

  }


}
setInterval(majCartesActives,1000);





//...............................Fin MAJ CARTES ACTIVES ...............................................





///////////////////////////////////////////////// VALENTIN ///////////////////////////////////////////////////////////////////

//..........................................  WELCOME ............................................................
$welcome = document.getElementById("welcome");
$gauche = document.getElementById("gauche");
$droite = document.getElementById("droite");
$close = document.getElementById("close");
$close.onclick = closeWelcome;


if (localStorage.getItem("$nouveauUtilisateur") === null || parseInt(localStorage.getItem("$nouveauUtilisateur")) == 0) {

  $welcome.style.display= "flex";
  $gauche.classList.add("blur");
  $droite.classList.add("blur");

  localStorage.setItem('$nouveauUtilisateur', 1);
}

function closeWelcome(){
  $welcome.style.display= "none";
  $gauche.classList.remove("blur");
  $droite.classList.remove("blur");

}


// if ($welcome.offsetHeight != "0"){

//   document.getElementById("gauche").className = "blur"; 
//   document.getElementById("droite").className = "blur"; 
// }





//......................................... FIN WELCOME ......................................................

//....................... VOLUME MUTE ..................................

$volumeOn = document.getElementById("volumeOn");
$volumeMute = document.getElementById("volumeMute");
$volumeMute.classList.add('volumeInactif');


function changeMute(){
  $volumeOn.classList.toggle("volumeInactif");
  $volumeMute.classList.toggle("volumeInactif");

  if ($volumeMaster != 0){
    $volumeMaster =0;
  }
  else{
    $volumeMaster =1;
  }


}




//....................... VOLUME MUTE FIN...............................




////////////////////////////////////////////////////////FIN VALENTIN/////////////////////////////////////////////////////////////////////





/////////////////////// JULIEN ////////////////////////////////////
$containerCompteurVote = document.getElementById('vote');
$containerCompteurArgent = document.getElementById('argent');

// S'il n'y a pas de cookies compteur vote, le compteur est à 0 sinon on récupère le nombre de vote stocké
if (localStorage.getItem("compteurVote") === null) {
  $compteurVote =  0;
}else{
  $compteurVote = parseInt(localStorage.getItem("compteurVote"));
}
// S'il n'y a pas de cookies compteur argent, le compteur est à 0 sinon on récupère le nombre d'argent stocké
if (localStorage.getItem("compteurArgent") === null) {
  $compteurArgent =  0;
}else{
  $compteurArgent = parseInt(localStorage.getItem("compteurArgent"));
}

$containerCompteurVote.innerHTML = $compteurAffichageVote;
$containerCompteurArgent.innerHTML = $compteurAffichageArgent;
if (localStorage.getItem("compteurArgentTotal") === null) {
  $compteurArgentTotal =  0;
}else{
  $compteurArgentTotal = parseInt(localStorage.getItem("compteurArgentTotal"));
}
if (localStorage.getItem("compteurVotesTotal") === null) {
  $compteurVotesTotal = 0;
}else{
  $compteurVotesTotal = parseInt(localStorage.getItem("compteurVotesTotal"));
}


///////////////////////// FIN JULIEN //////////////////////////////////////////////////





/////////////////////////////////// VAL ///////////////////////////////////////
function majCompteurs (){
  $containerCompteurVote.innerHTML = $compteurAffichageVote;
  $containerCompteurArgent.innerHTML = $compteurAffichageArgent;
}
setInterval (majCompteurs, 100)


function storageRegulier(){
  localStorage.setItem('compteurVote', $compteurVote);
  localStorage.setItem('compteurArgent', $compteurArgent);
  localStorage.setItem('compteurVotesTotal', $compteurVotesTotal);
  localStorage.setItem('compteurArgentTotal', $compteurArgentTotal);
  localStorage.setItem('$compteurArgentCaisseNoire', $compteurArgentCaisseNoire);
  localStorage.setItem('$attenuationPertesGlobal', $attenuationPertesGlobal);
  localStorage.setItem('$compteurArgentCaisseNoire', $compteurArgentCaisseNoire);

}
setInterval (storageRegulier, 4000)

/////////////////////////////////// VAL ///////////////////////////////////////



// Cette fonction met à jour les positions quand on change la taille d'ecran.
function placeClicker() {

  $calendar=document.getElementById("calendar");
  $coeffs=document.getElementById("coeffs");
  $virgules=document.getElementById("virgules");
  $imgCrs=document.getElementById("imgCrs");
  $descriptionCrs=document.getElementById("descriptionCrs");

  // $largeurDescriptionCrs=document.getElementById("descriptionCrs").offsetWidth;
  // $hauteurDescriptionCrs=document.getElementById("descriptionCrs").offsetHeight;

  $hauteurCompteurs=document.getElementById("compteurs").offsetHeight;
  $calendarYPos=$hauteurCompteurs+40+20;
  $calendar.style.top = $calendarYPos+'px';
  $coeffs.style.height=$hauteurCompteurs+'px';
  $virgules.style.height=$hauteurCompteurs+'px';
  $largeurCompteurs=document.getElementById("compteurs").offsetWidth;
  $largeurCalendar=$calendar.offsetWidth;
  $calendarXPos=($largeurCompteurs*1.3333-$largeurCalendar)/2;
  $calendar.style.left = $calendarXPos-10+'px';


  // if (($largeurDescriptionCrs/2)<$hauteurDescriptionCrs){
  //  $imgCrs.style.width = ($largeurDescriptionCrs/2)+'px';
  // } 
  // else{
  //   $imgCrs.style.width =$hauteurDescriptionCrs
  //   $imgCrs.style.height =$hauteurDescriptionCrs

  // }

  $hauteurTable=document.getElementById("table").offsetHeight;
  $yPos= 0.75*$hauteurTable;

  $clicker.style.position = "absolute";
  $clicker.style.bottom = $yPos+'px';



  $yBrasPos= 0.6*$hauteurTable

  $brasPaper.style.bottom = $yBrasPos+'px';
  $brasDessus.style.bottom = $yBrasPos+'px';
  $brasDessous.style.bottom = $yBrasPos+'px';


}

setInterval( placeClicker, 15);




// Fonctions qui animent le click
var $boiteDessus=document.getElementById("boiteDessus");
var $boiteDessous=document.getElementById("boiteDessous");

$boiteDessus.onclick=click;


var $vitesseUp;
var $vitesseDownPaper;
var $vitesseDown;

$angle=0;

function downBras(){

  $angle=$angle+1;

  if ($angle<10){
    $brasDessus.style.transform = "rotate("+$angle+"deg)";
    $brasPaper.style.transform = "rotate("+$angle+"deg)";
    $brasDessous.style.transform = "rotate("+$angle+"deg)";
  }

  else{
    clearInterval($vitesseDown);
    $vitesseDownPaper =setInterval( downPaper, 7);
    $vitesseUp = setInterval( upBras, 6);
    

  }

}

$chute=0;

function downPaper(){

  $brasDessusPosition = $brasDessus.offsetTop;
  $hauteurBoiteDessus=$boiteDessus.offsetHeight;
  $chute=$chute+2;


  if($chute < 0.3*$hauteurBoiteDessus){
    $brasPaper.style.top = $brasDessusPosition+$chute+'px';
  }


  else{


 
    $brasPaper.style.transform = "rotate(-11deg)";
    $brasPaper.style.top = $brasDessusPosition+'px';
    
    clearInterval($vitesseDownPaper);


  }

}

function upBras(){

  $angle=$angle-1;

  if ($angle>-12){
    $brasDessus.style.transform = "rotate("+$angle+"deg)";
    $brasDessous.style.transform = "rotate("+$angle+"deg)";
  }

  else{


    clearInterval($vitesseUp);

  }

}

function clickAlgoBack(){
  ///////////////////////////////////// PARTIE JULIEN ////////////////////

  //// VAL //////
  $nbClicks=$nbClicks+1;
  // console.log($nbClicks)
  //// FIN VAL ///

  $compteurVote=$compteurVote+(1*$MultiClickGlobal);
  $compteurArgent=$compteurArgent+(5*$MultiClickGlobal);
  $compteurVotesTotal=$compteurVotesTotal+(1*$MultiClickGlobal);
  $compteurArgentTotal=$compteurArgentTotal+(5*$MultiClickGlobal);
  $containerCompteurVote.innerHTML = $compteurAffichageVote;
  $containerCompteurArgent.innerHTML = $compteurAffichageArgent;
 
  localStorage.setItem('compteurVote', $compteurVote);
  localStorage.setItem('compteurArgent', $compteurArgent);
  localStorage.setItem('compteurVotesTotal', $compteurVotesTotal);
  localStorage.setItem('compteurArgentTotal', $compteurArgentTotal);

  ////////////////////////////////////// FIN JULIEN /////////////////////

}



// Fonction du click sur la boite
function click() {
  $nbClicks2=$nbClicks2+1

  if($nbClicks+2>0){
    $chute=0;
    $angle=0;    
    clearInterval($vitesseUp);
    clearInterval($vitesseDownPaper);
    clearInterval($vitesseDown);

  }
  
  playBloup();

  $vitesseDown = setInterval( downBras, 6);

 clickAlgoBack();
 /////JULIEN VAL//////
 $audio = new Audio('sons/vote.mp3');
 $audio.volume = 0.2*$volumeMaster;
 $audio.play();
 /////JULIEN VAL//////

}



// Fonctions qui animent l'effet "bloop"
var $zoom=0;

var $bloupReverse;

$entropie=1;
function bloup(){
$zoom=$zoom+1;
if (($zoom<10/$entropie) & $entropie<=2){
$boiteDessus.style.transform="scale(1.0"+$zoom+")";
$boiteDessous.style.transform="scale(1.0"+$zoom+")";
}
else{
  clearInterval($bloup)
  $bloupReverse= setInterval( bloupReverse, 10);
}

}



  




function bloupReverse(){
  $zoom=$zoom-1;
  if ($zoom>=0){
  $boiteDessus.style.transform="scale(1.0"+$zoom+")";
  $boiteDessous.style.transform="scale(1.0"+$zoom+")";
  }
  else{
    clearInterval($bloupReverse);
    $entropie=$entropie+1;

    $bloup= setInterval( bloup, 10);
  }
  
}



$nbMouseEnter=0;
function playBloup(){
  $nbMouseEnter=$nbMouseEnter+1;

  if($nbMouseEnter>1){
    $zoom=0;
    $entropie=1;
    clearInterval($bloup)
    clearInterval($bloupReverse);
  }




  $bloup= setInterval( bloup, 10);
}



$boiteDessus.onmouseenter=playBloup;
$boiteDessus.onmouseleave=playBloup;
///////////////////////////Sylvain//////////////////////////////////////////


///////////////////////////VAL///////////////////////////////////////////

//...........................EVENTs.....................................


//......CRS......

$crs=document.getElementById("crs");
$texteCrs=document.getElementById("texteCrs");

$timeCrs=120000;
if (localStorage.getItem('$stopCrs') === null) {
  localStorage.setItem('$stopCrs', "0");
}

function cacheCrs(){
  $crs.classList.toggle("eventDisplay",true);

}
cacheCrs();

function afficheCrs(){
  $crs.classList.toggle("eventDisplay",false);
  localStorage.setItem('$stopCrs', "1");

}

if (parseInt(localStorage.getItem('$stopCrs')) != 1){
  setTimeout(afficheCrs,$timeCrs);
}





function achatBob(){
  $compteurVote=$compteurVote+10000;
  $texteCrs.innerHTML ="Bien joué, tout le monde est satisfait.<br>Vous gagnez 10000 votes";
  document.getElementById("boutonAchatBob").style.display = "none";
  document.getElementById("boutonAchatSylvie").style.display = "none";
  setTimeout(cacheCrs,6500);

  
}


function achatSylvie(){
  $compteurVote= $compteurVote-Math.ceil(0.1*$compteurVote);
  $texteCrs.innerHTML ="Mmmm...Vous auriez pu trouver un peu mieux.<br> Ça sera vite oublié mais vous perdez 10% de vos votes.";
  document.getElementById("boutonAchatSylvie").style.display = "none";
  document.getElementById("boutonAchatBob").style.display = "none";
  setTimeout(cacheCrs,6500);
}



//.......Migrants.....



$migrants=document.getElementById("migrants");
$texteMigrants=document.getElementById("texteMigrants");
// $boutonAchatAide=document.getElementById("boutonAchatAide");
// $boutonAchatSourd=document.getElementById("boutonAchatSourd");


$timeMigrants=300000;
if (localStorage.getItem('$stopMigrants') === null) {
  localStorage.setItem('$stopMigrants', "0");
}

function cacheMigrants(){
  $migrants.classList.toggle("eventDisplay",true);

}
cacheMigrants();

function afficheMigrants(){
  $migrants.classList.toggle("eventDisplay",false);
  localStorage.setItem('$stopMigrants', "1");

}

if (parseInt(localStorage.getItem('$stopMigrants')) != 1){
  setTimeout(afficheMigrants,$timeMigrants);
}





function achatAide(){
  $compteurVote=$compteurVote+15000;
  $texteMigrants.innerHTML ="Bien joué, tout le monde est satisfait.<br>La tempête est arrivée à 23h06 et le bateau a chaviré à la première vague. Il n'y a pas de survivant.<br> Il suffira de feindre ne pas avoir été informé de la tempête et les ONG ne pourront rien vous reprocher.<br> Aucune arrivée de migrant ne viendra importuner ce matin les 56% de français qui ont une vision négative de l'immigration<br><br> Vous gagnez 15000 votes!";
  // $boutonAchatAide.classList.toggle("eventDisplay",true);
  // $boutonAchatSourd.classList.toggle("eventDisplay",true);
  document.getElementById("boutonAchatAide").style.display = "none";
  document.getElementById("boutonAchatSourd").style.display = "none";
  setTimeout(cacheMigrants,23000);

  
}


function achatSourd(){
  $texteMigrants.innerHTML ="C'est pas grave, vos concitoyens non plus.<br><br>Votre décision n'aura aucune répercussion sur votre mandat.";
  document.getElementById("boutonAchatAide").style.display = "none";
  document.getElementById("boutonAchatSourd").style.display = "none";

  // $boutonAchatAide.classList.toggle("eventDisplay",true);
  // $boutonAchatSourd.classList.toggle("eventDisplay",true);
  setTimeout(cacheMigrants,6500);
}




//...........................FIN EVENTs.....................................

///////////////////////////FINVAL///////////////////////////////////////////














//SliderGeneral


//Bouton selection slider General
function showBonusTemp(){
	var slideGenListe = document.getElementsByClassName("menuGen");
	for (let entry of slideGenListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("buffTemporaire").classList.replace("notSelect", "select");
}

function showParametres(){
	var slideGenListe = document.getElementsByClassName("menuGen");
	for (let entry of slideGenListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("parametres").classList.replace("notSelect", "select");
}

function showStatistique(){
	var slideGenListe = document.getElementsByClassName("menuGen");
	for (let entry of slideGenListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("statistique").classList.replace("notSelect", "select");
}

function showRanking(){
	var slideGenListe = document.getElementsByClassName("menuGen");
	for (let entry of slideGenListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("ranking").classList.replace("notSelect", "select");
}

function showAchievement(){
	var slideGenListe = document.getElementsByClassName("menuGen");
	for (let entry of slideGenListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("achievement").classList.replace("notSelect", "select");
}
function showPossession(){
	var slideGenListe = document.getElementsByClassName("menuGen");
	for (let entry of slideGenListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("possession").classList.replace("notSelect", "select");
}
//SliderStore

//Bouton selection slider Store


////////////VAL//////////
$colorOnglet= "#941b12";
$colorOngletPop="#19749f";

//////////////////////


	document.getElementById("slideVote").classList.replace("notSelect", "select");
	document.getElementById("thumbnailsVote").classList.replace("notSelect", "select");
	var carteListeVote = document.getElementsByClassName("carteVote");
	var carteListeArgent = document.getElementsByClassName("carteArgent");
	var carteListeGestion = document.getElementsByClassName("carteGestion");
	carteListeVote[0].classList.replace("notSelect", "select");
	document.getElementById("id1Vote").checked = "true"
	document.getElementById("id1Gestion").checked = "true"
	document.getElementById("id1Argent").checked = "true"
	document.getElementById("selectBuffTemporaire").checked = "true"


function showVote(){
  $pop1.classList.toggle("popDisplay",true)
	var slideStoreListe = document.getElementsByClassName("storeChoice");
	for (let entry of slideStoreListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	var thumbListe = document.getElementsByClassName("thumbnails");
	for (let entry of thumbListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("slideVote").classList.replace("notSelect", "select");
	document.getElementById("thumbnailsVote").classList.replace("notSelect", "select");
	document.getElementById("miniatureMenuVote").style.backgroundColor= $colorOnglet;
	var carteListeVote = document.getElementsByClassName("carteVote");
	carteListeVote[0].classList.replace("notSelect", "select");
	document.getElementById("id1Vote").checked = "true"
}

function showArgent(){
  $pop2.classList.toggle("popDisplay",true)
	var slideStoreListe = document.getElementsByClassName("storeChoice");
	for (let entry of slideStoreListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
			var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	var thumbListe = document.getElementsByClassName("thumbnails");
	for (let entry of thumbListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("slideArgent").classList.replace("notSelect", "select");
	document.getElementById("thumbnailsArgent").classList.replace("notSelect", "select");
	document.getElementById("miniatureMenuArgent").style.backgroundColor= $colorOnglet;
	var carteListeArgent = document.getElementsByClassName("carteArgent");
	carteListeArgent[0].classList.replace("notSelect", "select");
	document.getElementById("id1Argent").checked = "true"
}

function showGestion(){
  $pop3.classList.toggle("popDisplay",true)
	var slideStoreListe = document.getElementsByClassName("storeChoice");
	for (let entry of slideStoreListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
			var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	var thumbListe = document.getElementsByClassName("thumbnails");
	var thumbListe = document.getElementsByClassName("thumbnails");
	for (let entry of thumbListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("slideGestion").classList.replace("notSelect", "select");
	document.getElementById("thumbnailsGestion").classList.replace("notSelect", "select");
	document.getElementById("miniatureMenuGestion").style.backgroundColor= $colorOnglet;
	var carteListeGestion = document.getElementsByClassName("carteGestion");
	carteListeGestion[0].classList.replace("notSelect", "select");
	document.getElementById("id1Gestion").checked = "true"
}


//Carte affiche
function showBelleGueule(){
	var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("belleGueule").classList.replace("notSelect", "select");
}

function showBelleMeuf(){
	var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("belleMeuf").classList.replace("notSelect", "select");
}

function showbfntv(){
	var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("bfntv").classList.replace("notSelect", "select");
}
function showpanemCircenses(){
	var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("panemCircenses").classList.replace("notSelect", "select");
}
function showPhotoDeFamille(){
	var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("photoDeFamille").classList.replace("notSelect", "select");
}
function showArticleJournal(){
	var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("articleJournal").classList.replace("notSelect", "select");
}
function showgnr(){
	var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("gnr").classList.replace("notSelect", "select");
}
function showGrenade(){
	var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("grenade").classList.replace("notSelect", "select");
}
function showTeachers(){
	var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("teachers").classList.replace("notSelect", "select");
}
function showfmi(){
	var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("fmi").classList.replace("notSelect", "select");
}
function showrmi(){
	var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("rmi").classList.replace("notSelect", "select");
}
function showAvocat(){
	var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("avocat").classList.replace("notSelect", "select");
}
function showCabinetAvocat(){
	var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("cabinetAvocat").classList.replace("notSelect", "select");
}
function showJustice(){
	var carteListe = document.getElementsByClassName("carte");
	for (let entry of carteListe){
		entry.classList.add("notSelect");
		entry.classList.remove("select");
	}
	document.getElementById("justice").classList.replace("notSelect", "select");
}

//Statistique

function stat(){
	localStorage.setItem('timeFromStartAllPlay', $tempsDeJeuSeconde);
	localStorage.setItem('argentTotalAllPlay', $compteurArgentTotal);
	localStorage.setItem('voteTotalAllPlay', $compteurVotesTotal);
	if (isNaN($compteurArgentCaisseNoire)){}
	else { document.getElementById("caisseNoire").innerHTML = "Votre caisse noire: " + $compteurArgentCaisseNoire; }
	document.getElementById("voteTotalThisPlay").innerHTML = "Gain de vote cette partie: " + $compteurVote;
	document.getElementById("argentTotalThisPlay").innerHTML = "Gain d'argent cette partie: " + $compteurArgent;
	if (isNaN(localStorage.getItem('argentTotalAllPlay'))) {}
	else {document.getElementById("argentTotalAllPlay").innerHTML = "Gain d'Argent Total :" + localStorage.getItem('argentTotalAllPlay');}
	if (isNaN(localStorage.getItem('voteTotalAllPlay'))) {}
	else { document.getElementById("voteTotalAllPlay").innerHTML = "Gain de vote Total: " + localStorage.getItem('voteTotalAllPlay');}
	document.getElementById("timeFromStartThisPlay").innerHTML = "Temps de jeu cette Partie: " + Math.floor($tempsDeJeuSeconde/60) + "m";
	if (isNaN(localStorage.getItem('timeFromStartAllPlay'))) {}
	else {document.getElementById("timeFromStartAllPlay").innerHTML = "Temps de jeu Total: " + Math.floor(localStorage.getItem('timeFromStartAllPlay')/60) + "m";}
	document.getElementById("voteParClic").innerHTML = "Gain de Vote au Clic " + $MultiClickGlobal;
	document.getElementById("argentParClic").innerHTML = "Gain d'Argent au clic " + ($MultiClickGlobal*5);
	if (isNaN(localStorage.getItem("attenuationPertesGlobal"))){}
	else {
		document.getElementById("attenuationPertesGlobal").innerHTML = "Réduction des Pertes: " + ((1-$attenuationPertesGlobal)*10);
	}
}

setInterval(stat, 1000);

// Déclarations Cout des Cartes
var coutArgentBelleGueule = 1000;
var coutVoteBelleGueule = 0;
var coutArgentBelleMeuf = 10000;
var coutVoteBelleMeuf = 0;

$pop1=document.getElementById("pop1");
$pop2=document.getElementById("pop2");
$pop3=document.getElementById("pop3");

document.getElementById("prixBelleMeuf").innerHTML = coutArgentBelleMeuf;
document.getElementById("prixBelleGueule").innerHTML = coutArgentBelleGueule;
var coutArgentArticle = 5000;
var coutVoteArticle = 0;
var coutArgentPhoto = 20000;
var coutVotePhoto = 0;

document.getElementById("prixPhoto").innerHTML = coutArgentPhoto;
var coutArgentGrenade = 50000;
var coutVoteGrenade = 15000;

document.getElementById("prixGrenade").innerHTML = coutVoteGrenade + "<br>"+ coutArgentGrenade;
  
  document.getElementById("prixArticle").innerHTML = coutArgentArticle;

var coutArgentAvocat = 60000;
var coutVoteAvocat = 0;

document.getElementById("prixAvocat").innerHTML = coutArgentAvocat;
var coutArgentChomage = 100000;
var coutVoteChomage = 0;

document.getElementById("prixChomage").innerHTML = coutArgentChomage;
var coutArgentrsa = 130000;
var coutVotersa = 0;

document.getElementById("prixrsa").innerHTML = coutArgentrsa;
var coutArgentCabinetAvocat = 150000;
var coutVoteCabinetAvocat = 0;

document.getElementById("prixCabinetAvocat").innerHTML = coutArgentCabinetAvocat;
var coutArgentVentesArme = 200000;
var coutVoteVentesArme = 0;

document.getElementById("prixVenteArme").innerHTML = coutArgentVentesArme;
var coutArgentJustice = 500000;
var coutVoteJustice = 20000;

document.getElementById("prixJustice").innerHTML = coutVoteJustice + "<br>"+ coutArgentJustice;
var coutArgentbfntv = 250000;
var coutVotebfntv = 0;

document.getElementById("prixbfntv").innerHTML = coutArgentbfntv;
var coutArgentPanem = 400000;
var coutVotePanem = 0;

document.getElementById("prixPanem").innerHTML = coutArgentPanem;
var coutArgentEducation = 50000;
var coutVoteEducation = 5000;

document.getElementById("prixEducation").innerHTML = coutVoteEducation + "<br>"+ coutArgentEducation;

$incrHaut=0;
$incrMilieu=0;
$incrBas=0;
$incrHautBis=0;
$incrMilieuBis=0;
$incrBasBis=0;

$audioClink = new Audio('sons/clink.mp3');
$audioClink.volume = 0.1*$volumeMaster;


function checkHaut(){

  checkStatusBelleGueulle()
  checkStatusBelleMeuf()
  checkStatusPhoto()
  checkStatusGrenade()
  checkStatusEducation()
  if($incrHaut>$incrHautBis){
    $pop1.classList.toggle("popDisplay",false)
    $audioClink.play();
  }
  $incrHautBis=$incrHaut;

}
setInterval(checkHaut,1000);

function checkMilieu(){
  checkStatusPanem()
  checkStatusbfntv()
  checkStatusrsa()
  checkStatusChomage()
  if($incrMilieu>$incrMilieuBis){
    $pop2.classList.toggle("popDisplay",false)
    $audioClink.play();

  }
  $incrMilieuBis=$incrMilieu;

}
setInterval(checkMilieu,1000);

function checkBas(){
  checkStatusArticle()
  checkStatusJustice()
  checkStatusVentesArme()
  checkStatusAvocat()
  checkStatusCabinetAvocat()
  if($incrBas>$incrBasBis){
    $pop3.classList.toggle("popDisplay",false)
    $audioClink.play();

  }
  $incrBasBis=$incrBas;
  
}
setInterval(checkBas,1000);




  function checkStatusBelleGueulle(){
    if (localStorage.getItem("boutonAchatBelleGueule") === null || parseInt(localStorage.getItem("boutonAchatBelleGueule")) != 0) {
      document.getElementById("belleGueule").classList.add("notAvailable");
      document.getElementById("hideBelleGueule").classList.add("notAvailable");
      document.getElementById("belleGueule").classList.remove("flou");
      document.getElementById("miniatureBelleGueule").classList.remove("flouthumb");

    }
    else if ($compteurArgent < coutArgentBelleGueule || $compteurVote < coutVoteBelleGueule) {
      document.getElementById("belleGueule").classList.add("flou");
      document.getElementById("miniatureBelleGueule").classList.add("flouthumb");
      document.getElementById("belleGueule").classList.remove("notAvailable");
      document.getElementById("hideBelleGueule").classList.remove("notAvailable");
    }
    else if ($compteurArgent > coutArgentBelleGueule && $compteurVote > coutVoteBelleGueule){
      document.getElementById("belleGueule").classList.remove("flou", "notAvailable");
      document.getElementById("miniatureBelleGueule").classList.remove("flouthumb");
      document.getElementById("hideBelleGueule").classList.remove("notAvailable");
      $incrHaut=$incrHaut+1
    }		
  }






function checkStatusBelleMeuf(){
	if (localStorage.getItem("boutonAchatBelleMeuf") === null || parseInt(localStorage.getItem("boutonAchatBelleMeuf")) != 0) {
		document.getElementById("belleMeuf").classList.add("notAvailable");
		document.getElementById("hideBelleMeuf").classList.add("notAvailable");
		document.getElementById("belleMeuf").classList.remove("flou");
		document.getElementById("miniatureBelleMeuf").classList.remove("flouthumb");
	}
	else if ($compteurArgent < coutArgentBelleMeuf || $compteurVote < coutVoteBelleMeuf) {
		document.getElementById("belleMeuf").classList.add("flou");
		document.getElementById("miniatureBelleMeuf").classList.add("flouthumb");
		document.getElementById("belleMeuf").classList.remove("notAvailable");
		document.getElementById("hideBelleMeuf").classList.remove("notAvailable");
	}
	else if ($compteurArgent > coutArgentBelleMeuf && $compteurVote > coutVoteBelleMeuf){
		document.getElementById("belleMeuf").classList.remove("flou", "notAvailable");
		document.getElementById("miniatureBelleMeuf").classList.remove("flouthumb");
    document.getElementById("hideBelleMeuf").classList.remove("notAvailable");
    $incrHaut=$incrHaut+1

	}		
}








function checkStatusPhoto(){
	if (localStorage.getItem("boutonAchatphotoDeFamille") === null || parseInt(localStorage.getItem("boutonAchatphotoDeFamille")) != 0) {
		document.getElementById("photoDeFamille").classList.add("notAvailable");
		document.getElementById("hidePhoto").classList.add("notAvailable");
		document.getElementById("photoDeFamille").classList.remove("flou");
		document.getElementById("miniaturePhotoDeFamille").classList.remove("flouthumb");
		carteListeVote[0].classList.replace("notSelect", "select");
	}
	else if ($compteurArgent < coutArgentPhoto || $compteurVote < coutVotePhoto) {
		document.getElementById("photoDeFamille").classList.add("flou");
		document.getElementById("miniaturePhotoDeFamille").classList.add("flouthumb");
		document.getElementById("photoDeFamille").classList.remove("notAvailable");
		document.getElementById("hidePhoto").classList.remove("notAvailable");
	}
	else if ($compteurArgent > coutArgentPhoto && $compteurVote > coutVotePhoto){
		document.getElementById("photoDeFamille").classList.remove("flou", "notAvailable");
		document.getElementById("miniaturePhotoDeFamille").classList.remove("flouthumb");
    document.getElementById("hidePhoto").classList.remove("notAvailable");
    $incrHaut=$incrHaut+1

	}		
}





function checkStatusGrenade(){
	if (localStorage.getItem("boutonAchatGrenade") === null || parseInt(localStorage.getItem("boutonAchatGrenade")) != 0) {
		document.getElementById("grenade").classList.add("notAvailable");
		document.getElementById("hideGrenade").classList.add("notAvailable");
		document.getElementById("grenade").classList.remove("flou");
		document.getElementById("miniatureGrenade").classList.remove("flouthumb");
		carteListeVote[0].classList.replace("notSelect", "select");
	}
	else if ($compteurArgent < coutArgentGrenade || $compteurVote < coutVoteGrenade) {
		document.getElementById("grenade").classList.add("flou");
		document.getElementById("miniatureGrenade").classList.add("flouthumb");
		document.getElementById("grenade").classList.remove("notAvailable");
		document.getElementById("hideGrenade").classList.remove("notAvailable");
	}
	else if ($compteurArgent > coutArgentGrenade && $compteurVote > coutVoteGrenade){
		document.getElementById("grenade").classList.remove("flou", "notAvailable");
		document.getElementById("miniatureGrenade").classList.remove("flouthumb");
    document.getElementById("hideGrenade").classList.remove("notAvailable");
    $incrHaut=$incrHaut+1

	}		
}
function checkStatusEducation(){
	if (localStorage.getItem("boutonAchatEducation") === null || parseInt(localStorage.getItem("boutonAchatEducation")) != 0) {
		document.getElementById("teachers").classList.add("notAvailable");
		document.getElementById("hideEducation").classList.add("notAvailable");
		document.getElementById("teachers").classList.remove("flou");
		document.getElementById("miniatureEducation").classList.remove("flouthumb");
	}
	else if ($compteurArgent < coutArgentEducation || $compteurVote < coutVoteEducation) {
		document.getElementById("teachers").classList.add("flou");
		document.getElementById("miniatureEducation").classList.add("flouthumb");
		document.getElementById("teachers").classList.remove("notAvailable");
		document.getElementById("hideEducation").classList.remove("notAvailable");
	}
	else if ($compteurArgent > coutArgentEducation && $compteurVote > coutVoteEducation){
		document.getElementById("teachers").classList.remove("flou", "notAvailable");
		document.getElementById("miniatureEducation").classList.remove("flouthumb");
    document.getElementById("hideEducation").classList.remove("notAvailable");

	}		
}


function checkStatusArticle(){
	if (localStorage.getItem("boutonAchatarticleJournal") === null || parseInt(localStorage.getItem("boutonAchatarticleJournal")) != 0) {
		document.getElementById("articleJournal").classList.add("notAvailable");
		document.getElementById("hideArticle").classList.add("notAvailable");
		document.getElementById("articleJournal").classList.remove("flou");
		document.getElementById("miniatureArticleJournal").classList.remove("flouthumb");
	}
	else if ($compteurArgent < coutArgentArticle || $compteurVote < coutVoteArticle) {
		document.getElementById("articleJournal").classList.add("flou");
		document.getElementById("miniatureArticleJournal").classList.add("flouthumb");
		document.getElementById("articleJournal").classList.remove("notAvailable");
		document.getElementById("hideArticle").classList.remove("notAvailable");
	}
	else if ($compteurArgent > coutArgentArticle && $compteurVote > coutVoteArticle){
		document.getElementById("articleJournal").classList.remove("flou", "notAvailable");
		document.getElementById("miniatureArticleJournal").classList.remove("flouthumb");
    document.getElementById("hideArticle").classList.remove("notAvailable");
    $incrBas=$incrBas+1;
	}		
}


function checkStatusCabinetAvocat(){
	if (localStorage.getItem("boutonAchatCabinetAvocat") === null || parseInt(localStorage.getItem("boutonAchatCabinetAvocat")) != 0) {
		document.getElementById("cabinetAvocat").classList.add("notAvailable");
		document.getElementById("hideCabinetAvocat").classList.add("notAvailable");
		document.getElementById("cabinetAvocat").classList.remove("flou");
		document.getElementById("miniatureCabinetAvocat").classList.remove("flouthumb");
	}
	else if ($compteurArgent < coutArgentCabinetAvocat || $compteurVote < coutVoteCabinetAvocat) {
		document.getElementById("cabinetAvocat").classList.add("flou");
		document.getElementById("miniatureCabinetAvocat").classList.add("flouthumb");
		document.getElementById("cabinetAvocat").classList.remove("notAvailable");
		document.getElementById("hideCabinetAvocat").classList.remove("notAvailable");
	}
	else if ($compteurArgent > coutArgentCabinetAvocat && $compteurVote > coutVoteCabinetAvocat){
		document.getElementById("cabinetAvocat").classList.remove("flou", "notAvailable");
		document.getElementById("miniatureCabinetAvocat").classList.remove("flouthumb");
    document.getElementById("hideCabinetAvocat").classList.remove("notAvailable");
    $incrBas=$incrBas+1;
	}		
}


function checkStatusAvocat(){
	if (localStorage.getItem("boutonAchatAvocat") === null || parseInt(localStorage.getItem("boutonAchatAvocat")) != 0) {
		document.getElementById("avocat").classList.add("notAvailable");
		document.getElementById("hideAvocat").classList.add("notAvailable");
		document.getElementById("avocat").classList.remove("flou");
		document.getElementById("miniatureAvocat").classList.remove("flouthumb");
	}
	else if ($compteurArgent < coutArgentAvocat || $compteurVote < coutVoteAvocat) {
		document.getElementById("avocat").classList.add("flou");
		document.getElementById("miniatureAvocat").classList.add("flouthumb");
		document.getElementById("avocat").classList.remove("notAvailable");
		document.getElementById("hideAvocat").classList.remove("notAvailable");
	}
	else if ($compteurArgent > coutArgentAvocat && $compteurVote > coutVoteAvocat){
		document.getElementById("avocat").classList.remove("flou", "notAvailable");
		document.getElementById("miniatureAvocat").classList.remove("flouthumb");
    document.getElementById("hideAvocat").classList.remove("notAvailable");
    $incrBas=$incrBas+1;
	}		
}



function checkStatusChomage(){
	if (localStorage.getItem("boutonAchatChomage") === null || parseInt(localStorage.getItem("boutonAchatChomage")) != 0) {
		document.getElementById("fmi").classList.add("notAvailable");
		document.getElementById("hideChomage").classList.add("notAvailable");
		document.getElementById("fmi").classList.remove("flou");
		document.getElementById("miniatureChomage").classList.remove("flouthumb");
	}
	else if ($compteurArgent < coutArgentChomage || $compteurVote < coutVoteArticle) {
		document.getElementById("fmi").classList.add("flou");
		document.getElementById("miniatureChomage").classList.add("flouthumb");
		document.getElementById("fmi").classList.remove("notAvailable");
		document.getElementById("hideChomage").classList.remove("notAvailable");
	}
	else if ($compteurArgent > coutArgentChomage && $compteurVote > coutVoteArticle){
		document.getElementById("fmi").classList.remove("flou", "notAvailable");
		document.getElementById("miniatureChomage").classList.remove("flouthumb");
    document.getElementById("hideChomage").classList.remove("notAvailable");
    $incrMilieu=$incrMilieu+1;

	}		
}




function checkStatusrsa(){
	if (localStorage.getItem("boutonAchatrsa") === null || parseInt(localStorage.getItem("boutonAchatrsa")) != 0) {
		document.getElementById("rmi").classList.add("notAvailable");
		document.getElementById("hidersa").classList.add("notAvailable");
		document.getElementById("rmi").classList.remove("flou");
		document.getElementById("miniaturersa").classList.remove("flouthumb");
	}
	else if ($compteurArgent < coutArgentrsa || $compteurVote < coutVotersa) {
		document.getElementById("rmi").classList.add("flou");
		document.getElementById("miniaturersa").classList.add("flouthumb");
		document.getElementById("rmi").classList.remove("notAvailable");
		document.getElementById("hidersa").classList.remove("notAvailable");
	}
	else if ($compteurArgent > coutArgentrsa && $compteurVote > coutVotersa){
		document.getElementById("rmi").classList.remove("flou", "notAvailable");
		document.getElementById("miniaturersa").classList.remove("flouthumb");
    document.getElementById("hidersa").classList.remove("notAvailable");
    $incrMilieu=$incrMilieu+1;
	}		
}







function checkStatusVentesArme(){
	if (localStorage.getItem("boutonAchatVenteArme") === null || parseInt(localStorage.getItem("boutonAchatVenteArme")) != 0) {
		document.getElementById("gnr").classList.add("notAvailable");
		document.getElementById("hideVenteArme").classList.add("notAvailable");
		document.getElementById("gnr").classList.remove("flou");
		document.getElementById("miniatureVenteArme").classList.remove("flouthumb");
	}
	else if ($compteurArgent < coutArgentVentesArme || $compteurVote < coutVoteVentesArme) {
		document.getElementById("gnr").classList.add("flou");
		document.getElementById("miniatureVenteArme").classList.add("flouthumb");
		document.getElementById("gnr").classList.remove("notAvailable");
		document.getElementById("hideVenteArme").classList.remove("notAvailable");
	}
	else if ($compteurArgent > coutArgentVentesArme && $compteurVote > coutVoteVentesArme){
		document.getElementById("gnr").classList.remove("flou", "notAvailable");
		document.getElementById("miniatureVenteArme").classList.remove("flouthumb");
    document.getElementById("hideVenteArme").classList.remove("notAvailable");
    $incrBas=$incrBas+1;
	}		
}




function checkStatusJustice(){
	if (localStorage.getItem("boutonAchatJustice") === null || parseInt(localStorage.getItem("boutonAchatJustice")) != 0) {
		document.getElementById("justice").classList.add("notAvailable");
		document.getElementById("hideJustice").classList.add("notAvailable");
		document.getElementById("justice").classList.remove("flou");
		document.getElementById("miniatureJustice").classList.remove("flouthumb");
	}
	else if ($compteurArgent < coutArgentJustice || $compteurVote < coutVoteJustice) {
		document.getElementById("justice").classList.add("flou");
		document.getElementById("miniatureJustice").classList.add("flouthumb");
		document.getElementById("justice").classList.remove("notAvailable");
		document.getElementById("hideJustice").classList.remove("notAvailable");
	}
	else if ($compteurArgent > coutArgentJustice && $compteurVote > coutVoteJustice){
		document.getElementById("justice").classList.remove("flou", "notAvailable");
		document.getElementById("miniatureJustice").classList.remove("flouthumb");
    document.getElementById("hideJustice").classList.remove("notAvailable");
    $incrBas=$incrBas+1;
	}		
}




function checkStatusbfntv(){
	if (localStorage.getItem("boutonAchatbfntv") === null || parseInt(localStorage.getItem("boutonAchatbfntv")) != 0) {
		document.getElementById("bfntv").classList.add("notAvailable");
		document.getElementById("hidebfntv").classList.add("notAvailable");
		document.getElementById("bfntv").classList.remove("flou");
		document.getElementById("miniaturebfntv").classList.remove("flouthumb");
	}
	else if ($compteurArgent < coutArgentbfntv || $compteurVote < coutVotebfntv) {
		document.getElementById("bfntv").classList.add("flou");
		document.getElementById("miniaturebfntv").classList.add("flouthumb");
		document.getElementById("bfntv").classList.remove("notAvailable");
		document.getElementById("hidebfntv").classList.remove("notAvailable");
	}
	else if ($compteurArgent > coutArgentbfntv && $compteurVote > coutVotebfntv){
		document.getElementById("bfntv").classList.remove("flou", "notAvailable");
		document.getElementById("miniaturebfntv").classList.remove("flouthumb");
    document.getElementById("hidebfntv").classList.remove("notAvailable");
    $incrMilieu=$incrMilieu+1;
  }
    
}




function checkStatusPanem(){
	if (localStorage.getItem("boutonAchatPanem") === null || parseInt(localStorage.getItem("boutonAchatPanem")) != 0) {
		document.getElementById("panemCircenses").classList.add("notAvailable");
		document.getElementById("hidePanem").classList.add("notAvailable");
		document.getElementById("panemCircenses").classList.remove("flou");
		document.getElementById("miniaturePanem").classList.remove("flouthumb");
	}
	else if ($compteurArgent < coutArgentPanem || $compteurVote < coutVotePanem) {
		document.getElementById("panemCircenses").classList.add("flou");
		document.getElementById("miniaturePanem").classList.add("flouthumb");
		document.getElementById("panemCircenses").classList.remove("notAvailable");
		document.getElementById("hidePanem").classList.remove("notAvailable");
	}
	else if ($compteurArgent > coutArgentPanem && $compteurVote > coutVotePanem){
		document.getElementById("panemCircenses").classList.remove("flou", "notAvailable");
		document.getElementById("miniaturePanem").classList.remove("flouthumb");
    document.getElementById("hidePanem").classList.remove("notAvailable");
    $incrMilieu=$incrMilieu+1;
	}		
}




///////////////////////////FinSylvain///////////////////////////////////////

// Sinus qui s'attenue :  ((6+cos(x-3)-0.5(x-3))/6)^2




/////////////////////////////////////// FIN VALENTIN  /////////////////////////////////////////////


//.................................CHANGE COMPTEUR............................


$virguleVote1=document.getElementById("virguleVote1")
$virguleVote2=document.getElementById("virguleVote2")
$virguleVote3=document.getElementById("virguleVote3")
$virguleArgent1=document.getElementById("virguleArgent1")
$virguleArgent2=document.getElementById("virguleArgent2")
$virguleArgent3=document.getElementById("virguleArgent3")

$virguleVote1.classList.toggle("virguleVisible",true);
$virguleVote2.classList.toggle("virguleVisible",true);
$virguleVote3.classList.toggle("virguleVisible",true);
$virguleArgent1.classList.toggle("virguleVisible",true);
$virguleArgent2.classList.toggle("virguleVisible",true);
$virguleArgent3.classList.toggle("virguleVisible",true);




var $formatVote='d.d.d.d';
var $formatArgent='d.d.d.d';

function actualiseCompteursAffichage(){

$compteurFiltreVote=0;
$coeffVote="";

 if ($compteurVote<1000){
    $compteurFiltreVote=""+$compteurVote+"";
    $coeffVote=" ";
  }

  if ($compteurVote>=1000 & $compteurVote<1000000){
    $compteurFiltreVote=$compteurVote/1000;
    $compteurFiltreVote=""+$compteurFiltreVote+"";
    // $compteurFiltre=$compteurFiltre.substring(0,5);
    // $compteurFiltre=parseFloat($compteurFiltre);
    $coeffVote="K";
  }



  if ($compteurVote>=1000000 & $compteurVote<1000000000){
    $compteurFiltreVote=$compteurVote/1000000;
    $compteurFiltreVote=""+$compteurFiltreVote+"";
    // $compteurFiltre=$compteurFiltre.substring(0,5);
    // $compteurFiltre=parseFloat($compteurFiltre);
    $coeffVote="M";
  }

  if ($compteurVote>=1000000000 & $compteurVote<1000000000000){
    $compteurFiltreVote=$compteurVote/1000000000;
    $compteurFiltreVote=""+$compteurFiltreVote+"";
    // $compteurFiltre=$compteurFiltre.substring(0,5);
    // $compteurFiltre=parseFloat($compteurFiltre);
    $coeffVote="Md";
  }


$indexoffVote=$compteurFiltreVote.indexOf(".");

if ($indexoffVote==-1){
  $compteurAffichageVote=$compteurVote;
  $formatVote="' ddd'";

}

else{
  $compteurAffichageVote=(""+$compteurVote+"").substring(0,4);

}


if ($indexoffVote==1){
  $virguleVote1.classList.toggle("virguleVisible",false);
}
else{
  $virguleVote1.classList.toggle("virguleVisible",true);
}

if($indexoffVote==2){
  $virguleVote2.classList.toggle("virguleVisible",false);
}
else{
  $virguleVote2.classList.toggle("virguleVisible",true);

}

if($indexoffVote==3){
  $virguleVote3.classList.toggle("virguleVisible",false);
}

else{
  $virguleVote3.classList.toggle("virguleVisible",true);
}

// console.log($compteurAffichageVote+" "+$coeffVote+"  "+$indexoffVote)
document.getElementById("coeffsVote").innerHTML = $coeffVote;






$compteurFiltreArgent=0;
$coeffArgent="";

 if ($compteurArgent<1000){
    $compteurFiltreArgent=""+$compteurArgent+"";
    $coeffArgent=" ";
  }

  if ($compteurArgent>=1000 & $compteurArgent<1000000){
    $compteurFiltreArgent=$compteurArgent/1000;
    $compteurFiltreArgent=""+$compteurFiltreArgent+"";
    // $compteurFiltre=$compteurFiltre.substring(0,5);
    // $compteurFiltre=parseFloat($compteurFiltre);
    $coeffArgent="K";
  }



  if ($compteurArgent>=1000000 & $compteurArgent<1000000000){
    $compteurFiltreArgent=$compteurArgent/1000000;
    $compteurFiltreArgent=""+$compteurFiltreArgent+"";
    // $compteurFiltre=$compteurFiltre.substring(0,5);
    // $compteurFiltre=parseFloat($compteurFiltre);
    $coeffArgent="M";
  }

  if ($compteurArgent>=1000000000 & $compteurArgent<1000000000000){
    $compteurFiltreArgent=$compteurArgent/1000000000;
    $compteurFiltreArgent=""+$compteurFiltreArgent+"";
    // $compteurFiltre=$compteurFiltre.substring(0,5);
    // $compteurFiltre=parseFloat($compteurFiltre);
    $coeffArgent="Md";
  }


$indexoffArgent=$compteurFiltreArgent.indexOf(".")

if ($indexoffArgent==-1){
  $compteurAffichageArgent=$compteurArgent;
  $formatArgent="' ddd'";

}

else{
  $compteurAffichageArgent=(""+$compteurArgent+"").substring(0,4);

}


if ($indexoffArgent==1){
  $virguleArgent1.classList.toggle("virguleVisible",false);
}
else{
  $virguleArgent1.classList.toggle("virguleVisible",true);
}

if($indexoffArgent==2){
  $virguleArgent2.classList.toggle("virguleVisible",false);
}
else{
  $virguleArgent2.classList.toggle("virguleVisible",true);
}

if($indexoffArgent==3){
  $virguleArgent3.classList.toggle("virguleVisible",false);
}

else{
  $virguleArgent3.classList.toggle("virguleVisible",true);

}

// console.log($compteurAffichageArgent+" "+$coeffArgent+"  "+$indexoffArgent)
document.getElementById("coeffsArgent").innerHTML = $coeffArgent;

}
setInterval(actualiseCompteursAffichage, 50)



//........................................FIN CHANGE COMPTEUR................




//////////////////////////////// JULIEN ////////////////////////
//Création du compteur vote
od = new Odometer({
  el: $containerCompteurVote,
  value: $compteurAffichageVote,




  // Any option (other than auto and selector) can be passed in here


  format: $formatVote,
  theme: 'train-station',
  duration:200,
  //animation: 'count'
});


////Création du compteur argent
od1 = new Odometer({
  el: $containerCompteurArgent,
  value: $compteurAffichageArgent,


  // Any option (other than auto and selector) can be passed in here
 
 


  format: $formatArgent,
  theme: 'dollar',
  duration:200,
  //animation: 'count'
});


//////////////////////////////// FIN JULIEN ///////////////////////

//....................compteurs 0000000..................

$containerCompteurVote0 = document.getElementById('vote0');
$containerCompteurArgent0 = document.getElementById('argent0');

//Création du compteur vote 0
od2 = new Odometer({
  el: $containerCompteurVote0,

  format: 'd',
  theme: 'dollar',

});


////Création du compteur argent0
od3 = new Odometer({
  el: $containerCompteurArgent0,

  format: 'd',
  theme: 'dollar',

});

$containerCompteurVote00 = document.getElementById('vote00');
$containerCompteurArgent00 = document.getElementById('argent00');

//Création du compteur vote 0
od4 = new Odometer({
  el: $containerCompteurVote00,

  format: 'd',
  theme: 'dollar',

});


////Création du compteur argent0
od5 = new Odometer({
  el: $containerCompteurArgent00,

  format: 'd',
  theme: 'dollar',

});


//....................compteurs 0000000 FIN..................






/////////////////////////////// VALENTIN //////////////////////////////////


// ..................................................... CARTES BONUS ..................................................................

// //Variables relatives au dernier bouton d'achat survolé

var $iDBouton;                                           //
var $persistance;                                        //
var $disponible;                                         //
var $coutArgent;                                        //
var $coutVote;                                          //  NE PAS TOUCHER
var $mouvementArgentOneShot;                            //
var $mouvementVoteOneShot;                              //
var $mouvementArgentCaisseNoire;                        //
var $attenuationPertes;                                 //

// Ajouter ici les variables signifiant si une carte bonus est activee




// fonction de mise à jour des variables et du check de disponibilité
function checkAchat($iD){
  $iDBouton=$iD.id;

  if(0+0=="la tete à toto"){alert("LOL")}   // franchement, cherchez pas à comprendre, mais ne touchez pas XD

 
  //.........................  BELLE GUEULE  ................................
  else if($iDBouton== "boutonAchatBelleGueule"){                                                                                        // changeHere
    $persistance=1;         // TRES IMPORTANT: 0 si usage instantanné, 1 si a une durée ou doit persister à la fermeture de cession     // changeHere   
    $coutArgent=1000;                                                                                                                    // changeHere
    $coutVote=0;                                                                                                                        // changeHere
    $mouvementArgentOneShot=0;                                                                                                          // changeHere
    $mouvementVoteOneShot=0;                                                                                                            // changeHere
    $mouvementArgentCaisseNoire=0;                                                                                                      // changeHere
    $attenuationPertes=0;//le coefficient d'attenuation s'exprime en %, si on veut attenuer de 10% $attenuationPertes=10;               // changeHere

   
  }
  //.........................  FIN BELLE GUEULE  ................................




  //.........................  BELLE MEUF  ................................
  else if($iDBouton== "boutonAchatBelleMeuf"){                                                                                        // changeHere
    $persistance=1;         // TRES IMPORTANT: 0 si usage instantanné, 1 si a une durée ou doit persister à la fermeture de cession     // changeHere   
    $coutArgent=10000;                                                                                                                    // changeHere
    $coutVote=0;                                                                                                                        // changeHere
    $mouvementArgentOneShot=0;                                                                                                          // changeHere
    $mouvementVoteOneShot=0;                                                                                                            // changeHere
    $mouvementArgentCaisseNoire=0;                                                                                                      // changeHere
    $attenuationPertes=0;//le coefficient d'attenuation s'exprime en %, si on veut attenuer de 10% $attenuationPertes=10;               // changeHere

   
  }
  //.........................  FIN BELLE MEUF  ................................


    //......................... ARTICLE ................................
    else if($iDBouton== "boutonAchatarticleJournal"){                                                                                        // changeHere
      $persistance=1;         // TRES IMPORTANT: 0 si usage instantanné, 1 si a une durée ou doit persister à la fermeture de cession     // changeHere   
      $coutArgent=5000;                                                                                                                    // changeHere
      $coutVote=0;                                                                                                                        // changeHere
      $mouvementArgentOneShot=0;                                                                                                          // changeHere
      $mouvementVoteOneShot=0;                                                                                                            // changeHere
      $mouvementArgentCaisseNoire=0;                                                                                                      // changeHere
      $attenuationPertes=0;//le coefficient d'attenuation s'exprime en %, si on veut attenuer de 10% $attenuationPertes=10;               // changeHere
  
     
    }
    //.........................  FIN ARTICLE  ................................


    //......................... PHOTO FAMILLE ................................
    else if($iDBouton== "boutonAchatphotoDeFamille"){                                                                                        // changeHere
      $persistance=1;         // TRES IMPORTANT: 0 si usage instantanné, 1 si a une durée ou doit persister à la fermeture de cession     // changeHere   
      $coutArgent=20000;                                                                                                                    // changeHere
      $coutVote=0;                                                                                                                        // changeHere
      $mouvementArgentOneShot=0;                                                                                                          // changeHere
      $mouvementVoteOneShot=25000;                                                                                                            // changeHere
      $mouvementArgentCaisseNoire=0;                                                                                                      // changeHere
      $attenuationPertes=0;//le coefficient d'attenuation s'exprime en %, si on veut attenuer de 10% $attenuationPertes=10;               // changeHere
  
     
    }
    //.........................  FIN PHOTOFAMILLE  ................................


    //.........................  GRENADE  ................................
    else if($iDBouton== "boutonAchatGrenade"){                                                                                        // changeHere
      $persistance=1;         // TRES IMPORTANT: 0 si usage instantanné, 1 si a une durée ou doit persister à la fermeture de cession     // changeHere   
      $coutArgent=50000;                                                                                                                    // changeHere
      $coutVote=(15000*$attenuationPertesGlobal);                                                                                                                        // changeHere
      $mouvementArgentOneShot=0;                                                                                                          // changeHere
      $mouvementVoteOneShot=0;                                                                                                            // changeHere
      $mouvementArgentCaisseNoire=0;                                                                                                      // changeHere
      $attenuationPertes=0;//le coefficient d'attenuation s'exprime en %, si on veut attenuer de 10% $attenuationPertes=10;               // changeHere

    
    }
    //.........................  GRENADE  ................................

    //.........................  BELLE GUEULE  ................................
    else if($iDBouton== "boutonAchatAvocat"){                                                                                        // changeHere
      $persistance=1;         // TRES IMPORTANT: 0 si usage instantanné, 1 si a une durée ou doit persister à la fermeture de cession     // changeHere   
      $coutArgent=60000;                                                                                                                    // changeHere
      $coutVote=0;                                                                                                                        // changeHere
      $mouvementArgentOneShot=0;                                                                                                          // changeHere
      $mouvementVoteOneShot=0;                                                                                                            // changeHere
      $mouvementArgentCaisseNoire=0;                                                                                                      // changeHere
      $attenuationPertes=30;//le coefficient d'attenuation s'exprime en %, si on veut attenuer de 10% $attenuationPertes=10;               // changeHere

    
    }

    //.........................  FIN BELLE GUEULE  ................................

    //.........................  BELLE GUEULE  ................................
    else if($iDBouton== "boutonAchatChomage"){                                                                                        // changeHere
      $persistance=1;         // TRES IMPORTANT: 0 si usage instantanné, 1 si a une durée ou doit persister à la fermeture de cession     // changeHere   
      $coutArgent=100000;                                                                                                                    // changeHere
      $coutVote=0;                                                                                                                        // changeHere
      $mouvementArgentOneShot=0;                                                                                                          // changeHere
      $mouvementVoteOneShot=0;                                                                                                            // changeHere
      $mouvementArgentCaisseNoire=0;                                                                                                      // changeHere
      $attenuationPertes=0;//le coefficient d'attenuation s'exprime en %, si on veut attenuer de 10% $attenuationPertes=10;               // changeHere

   
    }
    //.........................  FIN BELLE GUEULE  ................................

    //.........................  BELLE GUEULE  ................................
    else if($iDBouton== "boutonAchatrsa"){                                                                                        // changeHere
      $persistance=1;         // TRES IMPORTANT: 0 si usage instantanné, 1 si a une durée ou doit persister à la fermeture de cession     // changeHere   
      $coutArgent=130000;                                                                                                                    // changeHere
      $coutVote=0;                                                                                                                        // changeHere
      $mouvementArgentOneShot=0;                                                                                                          // changeHere
      $mouvementVoteOneShot=0;                                                                                                            // changeHere
      $mouvementArgentCaisseNoire=0;                                                                                                      // changeHere
      $attenuationPertes=0;//le coefficient d'attenuation s'exprime en %, si on veut attenuer de 10% $attenuationPertes=10;               // changeHere

    
    }
    //.........................  FIN BELLE GUEULE  ................................


    //.........................  BELLE cabinet  ................................
    else if($iDBouton== "boutonAchatCabinetAvocat"){                                                                                        // changeHere
      $persistance=1;         // TRES IMPORTANT: 0 si usage instantanné, 1 si a une durée ou doit persister à la fermeture de cession     // changeHere   
      $coutArgent=150000;                                                                                                                    // changeHere
      $coutVote=0;                                                                                                                        // changeHere
      $mouvementArgentOneShot=0;                                                                                                          // changeHere
      $mouvementVoteOneShot=0;                                                                                                            // changeHere
      $mouvementArgentCaisseNoire=0;                                                                                                      // changeHere
      $attenuationPertes=50;//le coefficient d'attenuation s'exprime en %, si on veut attenuer de 10% $attenuationPertes=10;               // changeHere

    
    }
    //.........................  FIN cabinet  ................................


 //.........................  VENTE ARMES ................................
 else if($iDBouton== "boutonAchatVenteArme"){                                                                                        // changeHere
    $persistance=1;         // TRES IMPORTANT: 0 si usage instantanné, 1 si a une durée ou doit persister à la fermeture de cession     // changeHere   
    $coutArgent=200000;                                                                                                                    // changeHere
    $coutVote=0;                                                                                                                        // changeHere
    $mouvementArgentOneShot=350000-(100000*$attenuationPertesGlobal);                                                                                                          // changeHere
    $mouvementVoteOneShot=0;                                                                                                            // changeHere
    $mouvementArgentCaisseNoire=50000;                                                                                                      // changeHere
    $attenuationPertes=0;//le coefficient d'attenuation s'exprime en %, si on veut attenuer de 10% $attenuationPertes=10;               // changeHere

 
  }
  //.........................  FIN VENTE ARMES  ................................
    


  //.........................  justice  ................................
  else if($iDBouton== "boutonAchatJustice"){                                                                                        // changeHere
    $persistance=1;         // TRES IMPORTANT: 0 si usage instantanné, 1 si a une durée ou doit persister à la fermeture de cession     // changeHere   
    $coutArgent=500000;                                                                                                                    // changeHere
    $coutVote=(20000*$attenuationPertesGlobal);                                                                                                                        // changeHere
    $mouvementArgentOneShot=0;                                                                                                          // changeHere
    $mouvementVoteOneShot=0;                                                                                                            // changeHere
    $mouvementArgentCaisseNoire=0;                                                                                                      // changeHere
    $attenuationPertes=100;//le coefficient d'attenuation s'exprime en %, si on veut attenuer de 10% $attenuationPertes=10;               // changeHere

   
  }
  //.........................  justice  ................................



  //.........................  BFN tv  ................................
  else if($iDBouton== "boutonAchatbfntv"){                                                                                        // changeHere
  $persistance=1;         // TRES IMPORTANT: 0 si usage instantanné, 1 si a une durée ou doit persister à la fermeture de cession     // changeHere   
  $coutArgent=250000;                                                                                                                    // changeHere
  $coutVote=0;                                                                                                                        // changeHere
  $mouvementArgentOneShot=0;                                                                                                          // changeHere
  $mouvementVoteOneShot=0;                                                                                                            // changeHere
  $mouvementArgentCaisseNoire=0;                                                                                                      // changeHere
  $attenuationPertes=0;//le coefficient d'attenuation s'exprime en %, si on veut attenuer de 10% $attenuationPertes=10;               // changeHere

 
  }
  //.........................  FIN bfn tv  ................................


 
  //.........................  panem ................................
  else if($iDBouton== "boutonAchatPanem"){                                                                                        // changeHere
    $persistance=1;         // TRES IMPORTANT: 0 si usage instantanné, 1 si a une durée ou doit persister à la fermeture de cession     // changeHere   
    $coutArgent=400000;                                                                                                                    // changeHere
    $coutVote=0;                                                                                                                        // changeHere
    $mouvementArgentOneShot=0;                                                                                                          // changeHere
    $mouvementVoteOneShot=100000;                                                                                                            // changeHere
    $mouvementArgentCaisseNoire=0;                                                                                                      // changeHere
    $attenuationPertes=100;//le coefficient d'attenuation s'exprime en %, si on veut attenuer de 10% $attenuationPertes=10;               // changeHere

   
  }
  //.........................  ppanem................................

 
  //.........................  EDUCATION ................................
  else if($iDBouton== "boutonAchatEducation"){                                                                                        // changeHere
    $persistance=1;         // TRES IMPORTANT: 0 si usage instantanné, 1 si a une durée ou doit persister à la fermeture de cession     // changeHere   
    $coutArgent=50000;                                                                                                                    // changeHere
    $coutVote=5000;                                                                                                                        // changeHere
    $mouvementArgentOneShot=0;                                                                                                          // changeHere
    $mouvementVoteOneShot=0;                                                                                                            // changeHere
    $mouvementArgentCaisseNoire=0;                                                                                                      // changeHere
    $attenuationPertes=0;//le coefficient d'attenuation s'exprime en %, si on veut attenuer de 10% $attenuationPertes=10;               // changeHere

   
  }
  //.........................  fin educ...............................







  //.........................  NOUVELLE CARTE  ................................
    // else if($iDBouton== "boutonAchatNouvelleCarte"){
    // $persistance=1;         // TRES IMPORTANT: 0 si usage instantanné, 1 si a une durée ou doit persister à la fermeture de cession
    // $coutArgent=200;
    // $coutVote=0;
    // $mouvementArgentOneShot=0;
    // $mouvementVoteOneShot=0;
    // $mouvementArgentCaisseNoire=0;
    // $attenuationPertes=0;//le coefficient d'attenuation s'exprime en %, si on veut attenuer de 10% $attenuationPertes=10;

  //......................... FIN NOUVELLE CARTE  ................................






  // localStorage.setItem($iDBouton,"00");
  // console.log(localStorage.getItem($iDBouton).substr(0, 1))
  // console.log(localStorage.getItem($iDBouton).substr(1,2))
   



  if (localStorage.getItem($iDBouton)=== null){localStorage.setItem($iDBouton,"00")}
    
  if($compteurArgent>=$coutArgent & $compteurVote>=$coutVote & ( localStorage.getItem($iDBouton).substr(0, 1) ==0)  ){
    $disponible=1;

    $boutonSurvol=document.getElementById($iDBouton);
    $boutonSurvol.onmouseenter= putInBlue
    $boutonSurvol.onmouseleave= stopInBlue
    function putInBlue(){$boutonSurvol.style.backgroundColor = "#19749f"}
    function stopInBlue(){$boutonSurvol.style.backgroundColor = "#0c5d83" }

  }

  else{
    $disponible=0;

    $boutonSurvol=document.getElementById($iDBouton);
    $boutonSurvol.onmouseenter= putInRed
    $boutonSurvol.onmouseleave= stopInRed
    function putInRed(){$boutonSurvol.style.backgroundColor = "red"}
    function stopInRed(){$boutonSurvol.style.backgroundColor = "#19749f" }
    // $boutonSurvol.style.cursor= "not-allowed";

  }


  $attenuationPertes=(100-$attenuationPertes)/100;  // Ne pas toucher: Transforme la réduction% en coefficient


}



function achat(){

  if ($disponible==1 ){
    localStorage.setItem($iDBouton,10);



    $compteurArgent=$compteurArgent-$coutArgent;
    $compteurVote=$compteurVote-$coutVote;
    $compteurArgent=$compteurArgent+$mouvementArgentOneShot;
    $compteurVote=$compteurVote+$mouvementVoteOneShot;
    $compteurArgentTotal=$compteurArgentTotal+$mouvementArgentOneShot;
    $compteurVotesTotal=$compteurVotesTotal+$mouvementVoteOneShot;
    $compteurArgentCaisseNoire=$compteurArgentCaisseNoire+$mouvementArgentCaisseNoire;
    $attenuationPertesGlobal=$attenuationPertesGlobal*$attenuationPertes; 



    if ($persistance==1){
      
      localStorage.setItem($iDBouton,"1"+$tempsDeJeuJoursVirtuels);

      
    }

   

  }
}



// ............................................ FONCTION PERSISTANTE Belle Gueule..................................

                                                                                                               // changeHere

function belleGueule(){                                                                                      // changeHere

  let $intervalAutoClick=0;          //$intervalAutoClick est le temps en seconde entre deux auto clicks         // changeHere
  let $intervalMouvementArgent=0;
  let $intervalMouvementVote=0;
  let $mouvementArgentRecurrent=0;   //les $mouvements peuvent etre positifs (gain) ou negatifs (perte)          // changeHere
  let $mouvementVoteRecurrent=0;                                                                                // changeHere
  let $multi=2;                                                                                                 // changeHere
  let $duree=30;                     //$duree s'exprime en JOURS                                                // changeHere

  // ADAPTATION MATHEMATIQUE DES VARIABLES
   $intervalAutoClick=$intervalAutoClick*1000;       // Transforme les temps en ms





  let $onOff=0;
  function checkSiValable(){

    // check si la date limite n'est pas atteinte et si activée
    if (((parseInt(localStorage.getItem('boutonAchatBelleGueule').substr(1))+$duree) >= $tempsDeJeuJoursVirtuels) & (parseInt(localStorage.getItem('boutonAchatBelleGueule').substr(0, 1))==1)){
      $onOff=1;
    }

    else{
      $onOff=0;
      localStorage.setItem('boutonAchatBelleGueule',"00")

    }

  }
  setInterval( checkSiValable, 1000);

  // function testesttest (){
  //   console.log("actif=  "+$onOff)
  // }
  // setInterval( testesttest, 500);



  //Ici on mets les algos qu'execute la carte bonus
  



  //..................................AUTOCLICK.....................................

  if($intervalAutoClick!=0){

    function autoClick(){

      if($onOff==1){
        clickAlgoBack()
      }

    }
    setInterval( autoClick, $intervalAutoClick);


  }
  

    
  //..................................FIN AUTOCLICK...................................




  //..................................MULTICLICK.....................................
    if($multi!= 0){
      function multiActif (){
      $multiBelleGueule=Math.pow($multi, $onOff)                                                                                //changeHere

    }
    setInterval( multiActif, 100);

    }
  //..................................FIN MULTICLICK..................................





  //..................................MOUVEMENT ARGENT PERSISTANT................................

  if($intervalMouvementArgent!=0){

    function mouvementArgent(){

      if($onOff==1){
        

        $compteurArgent=$compteurArgent+$mouvementArgentRecurrent;
        

      }

    }

    setInterval( mouvementArgent, $intervalMouvementArgent);
  }

    
  //..................................FIN MOUVEMENT ARGENT PERSISTANT...................................







  //..................................MOUVEMENT VOTE PERSISTANT................................

  if($intervalMouvementVote!=0){

    function mouvementVote(){

      if($onOff==1){
        

        $compteurVote=$compteurVote+$mouvementVoteRecurrent;
        // $compteurVotesTotal=$compteurVotesTotal+$mouvementVoteRecurrent;
        

      }

    }

    setInterval( mouvementVote, $intervalMouvementVote);
  }

    
  //..................................FIN MOUVEMENT VOTE PERSISTANT...................................






    
  

}
belleGueule ();


//.................................................... FIN FONCTION PERSISTANTE BELLE Gueule......................................................





// ............................................ FONCTION PERSISTANTE Belle Meuf..................................

                                                                                                               // changeHere

function belleMeuf(){                                                                                      // changeHere

  let $intervalAutoClick=0.2;          //$intervalAutoClick est le temps en seconde entre deux auto clicks         // changeHere
  let $intervalMouvementArgent=0;
  let $intervalMouvementVote=0;
  let $mouvementArgentRecurrent=0;   //les $mouvements peuvent etre positifs (gain) ou negatifs (perte)          // changeHere
  let $mouvementVoteRecurrent=0;                                                                                // changeHere
  let  $multi=0;                                                                                                 // changeHere
  let $duree=30;                     //$duree s'exprime en JOURS                                                // changeHere

  // ADAPTATION MATHEMATIQUE DES VARIABLES
  $intervalAutoClick=$intervalAutoClick*1000;       // Transforme les temps en ms





  let $onOff=0;
  function checkSiValable(){

    // check si la date limite n'est pas atteinte et si activée
    if (((parseInt(localStorage.getItem('boutonAchatBelleMeuf').substr(1))+$duree) >= $tempsDeJeuJoursVirtuels) & (parseInt(localStorage.getItem('boutonAchatBelleMeuf').substr(0, 1))==1)){
      $onOff=1;
    }

    else{
      $onOff=0;
      localStorage.setItem('boutonAchatBelleMeuf',"00")

    }

  }
  setInterval( checkSiValable, 1000);

  // function testesttest (){
  //   console.log("actif=  "+$onOff)
  // }
  // setInterval( testesttest, 500);



  //Ici on mets les algos qu'execute la carte bonus
  



  //..................................AUTOCLICK.....................................

  if($intervalAutoClick!=0){

    function autoClick(){

      if($onOff==1){
        clickAlgoBack()
      }

    }
    setInterval( autoClick, $intervalAutoClick);


  }
  

    
  //..................................FIN AUTOCLICK...................................




  //..................................MULTICLICK.....................................
    if($multi!= 0){
      function multiActif (){
      $multiBelleMeuf=Math.pow($multi, $onOff)                                                                                //changeHere
    }
    setInterval( multiActif, 100);

    }
  //..................................FIN MULTICLICK..................................





  //..................................MOUVEMENT ARGENT PERSISTANT................................

  if($intervalMouvementArgent!=0){

    function mouvementArgent(){

      if($onOff==1){
        

        $compteurArgent=$compteurArgent+$mouvementArgentRecurrent;
        

      }

    }

    setInterval( mouvementArgent, $intervalMouvementArgent);
  }

    
  //..................................FIN MOUVEMENT ARGENT PERSISTANT...................................







  //..................................MOUVEMENT VOTE PERSISTANT................................

  if($intervalMouvementVote!=0){

    function mouvementVote(){

      if($onOff==1){
        

        $compteurVote=$compteurVote+$mouvementVoteRecurrent;
        // $compteurVotesTotal=$compteurVotesTotal+$mouvementVoteRecurrent;
        

      }

    }

    setInterval( mouvementVote, $intervalMouvementVote);
  }

    
  //..................................FIN MOUVEMENT VOTE PERSISTANT...................................






    
  

}
belleMeuf ();


// .................................................... FIN FONCTION PERSISTANTE belle meuf......................................................





// ............................................ FONCTION PERSISTANTE ARTICLE..................................

                                                                                                               // changeHere

function article(){                                                                                      // changeHere

  let $intervalAutoClick=0;          //$intervalAutoClick est le temps en seconde entre deux auto clicks         // changeHere
  let $intervalMouvementArgent=0;
  let $intervalMouvementVote=0;
  let $mouvementArgentRecurrent=0;   //les $mouvements peuvent etre positifs (gain) ou negatifs (perte)          // changeHere
  let $mouvementVoteRecurrent=0;                                                                                // changeHere
  let $multi=4;                                                                                                 // changeHere
  let $duree=21;                     //$duree s'exprime en JOURS                                                // changeHere

  // ADAPTATION MATHEMATIQUE DES VARIABLES
  $intervalAutoClick=$intervalAutoClick*1000;       // Transforme les temps en ms





  let $onOff=0;
  function checkSiValable(){

    // check si la date limite n'est pas atteinte et si activée
    if (((parseInt(localStorage.getItem('boutonAchatarticleJournal').substr(1))+$duree) >= $tempsDeJeuJoursVirtuels) & (parseInt(localStorage.getItem('boutonAchatarticleJournal').substr(0, 1))==1)){
      $onOff=1;
    }

    else{
      $onOff=0;
      localStorage.setItem('boutonAchatarticleJournal',"00")

    }

  }
  setInterval( checkSiValable, 1000);

  // function testesttest (){
  //   console.log("actif=  "+$onOff)
  // }
  // setInterval( testesttest, 500);



  //Ici on mets les algos qu'execute la carte bonus
  



  //..................................AUTOCLICK.....................................

  if($intervalAutoClick!=0){

    function autoClick(){

      if($onOff==1){
        clickAlgoBack()
      }

    }
    setInterval( autoClick, $intervalAutoClick);


  }
  

    
  //..................................FIN AUTOCLICK...................................




  //..................................MULTICLICK.....................................
    if($multi!= 0){
      function multiActif (){
      $multiArticleJournal=Math.pow($multi, $onOff)                                                                                //changeHere
    }
    setInterval( multiActif, 1000);

    }
  //..................................FIN MULTICLICK..................................





  //..................................MOUVEMENT ARGENT PERSISTANT................................

  if($intervalMouvementArgent!=0){

    function mouvementArgent(){

      if($onOff==1){
        

        $compteurArgent=$compteurArgent-$mouvementArgentRecurrent;
        

      }

    }

    setInterval( mouvementArgent, $intervalMouvementArgent);
  }

    
  //..................................FIN MOUVEMENT ARGENT PERSISTANT...................................







  //..................................MOUVEMENT VOTE PERSISTANT................................

  if($intervalMouvementVote!=0){

    function mouvementVote(){

      if($onOff==1){
        

        $compteurVote=$compteurVote+$mouvementVoteRecurrent;
        // $compteurVotesTotal=$compteurVotesTotal+$mouvementVoteRecurrent;
        

      }

    }

    setInterval( mouvementVote, $intervalMouvementVote);
  }

    
  //..................................FIN MOUVEMENT VOTE PERSISTANT...................................






    
  

}
article ();


// .................................................... FIN FONCTION PERSISTANTE ARTICLE......................................................


// ............................................ FONCTION PERSISTANTE PHOTO FAMILLE..................................

                                                                                                               // changeHere

function PhotoDeFamille(){                                                                                      // changeHere

  let $intervalAutoClick=0;          //$intervalAutoClick est le temps en seconde entre deux auto clicks         // changeHere
  let $intervalMouvementArgent=0;
  let $intervalMouvementVote=120/1200;
  let $mouvementArgentRecurrent=0;   //les $mouvements peuvent etre positifs (gain) ou negatifs (perte)          // changeHere
  let $mouvementVoteRecurrent=1200;                                                                                // changeHere
  let $multi=0;                                                                                                 // changeHere
  let $duree=7;                     //$duree s'exprime en JOURS                                                // changeHere

  // ADAPTATION MATHEMATIQUE DES VARIABLES
   $intervalAutoClick=$intervalAutoClick*1000;       // Transforme les temps en ms





  let $onOff=0;
  function checkSiValable(){

    // check si la date limite n'est pas atteinte et si activée
    if (((parseInt(localStorage.getItem('boutonAchatphotoDeFamille').substr(1))+$duree) >= $tempsDeJeuJoursVirtuels) & (parseInt(localStorage.getItem('boutonAchatphotoDeFamille').substr(0, 1))==1)){
      $onOff=1;
    }

    else{
      $onOff=0;
      localStorage.setItem('boutonAchatphotoDeFamille',"00")

    }

  }
  setInterval( checkSiValable, 1000);

  // function testesttest (){
  //   console.log("actif=  "+$onOff)
  // }
  // setInterval( testesttest, 500);



  //Ici on mets les algos qu'execute la carte bonus
  



  //..................................AUTOCLICK.....................................

  if($intervalAutoClick!=0){

    function autoClick(){

      if($onOff==1){
        clickAlgoBack()
      }

    }
    setInterval( autoClick, $intervalAutoClick);


  }
  

    
  //..................................FIN AUTOCLICK...................................


  //..................................MULTICLICK.....................................
    if($multi!= 0){
      function multiActif (){
      $multiPhotoDeFamille=Math.pow($multi, $onOff)                                                                                //changeHere

    }
    setInterval( multiActif, 100);

    }
  //..................................FIN MULTICLICK..................................





  //..................................MOUVEMENT ARGENT PERSISTANT................................

  if($intervalMouvementArgent!=0){

    function mouvementArgent(){

      if($onOff==1){
        

        $compteurArgent=$compteurArgent+$mouvementArgentRecurrent;
        

      }

    }

    setInterval( mouvementArgent, $intervalMouvementArgent);
  }

    
  //..................................FIN MOUVEMENT ARGENT PERSISTANT...................................







  //..................................MOUVEMENT VOTE PERSISTANT................................

  if($intervalMouvementVote!=0){

    function mouvementVote(){

      if($onOff==1){
        

        $compteurVote=$compteurVote+$mouvementVoteRecurrent;
        // $compteurVotesTotal=$compteurVotesTotal+$mouvementVoteRecurrent;
        

      }

    }

    setInterval( mouvementVote, $intervalMouvementVote);
  }

    
  //..................................FIN MOUVEMENT VOTE PERSISTANT...................................



}
PhotoDeFamille ();


//.................................................... FIN FONCTION PERSISTANTE famille......................................................




// ............................................ FONCTION PERSISTANTE grenade..................................

                                                                                                               // changeHere

function Grenade(){                                                                                      // changeHere

  let $intervalAutoClick=0;          //$intervalAutoClick est le temps en seconde entre deux auto clicks         // changeHere
  let $intervalMouvementArgent=0;
  let $intervalMouvementVote=0;
  let $mouvementArgentRecurrent=0;   //les $mouvements peuvent etre positifs (gain) ou negatifs (perte)          // changeHere
  let $mouvementVoteRecurrent=0;                                                                                // changeHere
  let $multi=10;                                                                                                 // changeHere
  let $duree=60;                     //$duree s'exprime en JOURS                                                // changeHere

  // ADAPTATION MATHEMATIQUE DES VARIABLES
   $intervalAutoClick=$intervalAutoClick*1000;       // Transforme les temps en ms





  let $onOff=0;
  function checkSiValable(){

    // check si la date limite n'est pas atteinte et si activée
    if (((parseInt(localStorage.getItem('boutonAchatGrenade').substr(1))+$duree) >= $tempsDeJeuJoursVirtuels) & (parseInt(localStorage.getItem('boutonAchatGrenade').substr(0, 1))==1)){
      $onOff=1;
    }

    else{
      $onOff=0;
      localStorage.setItem('boutonAchatGrenade',"00")

    }

  }
  setInterval( checkSiValable, 1000);

  // function testesttest (){
  //   console.log("actif=  "+$onOff)
  // }
  // setInterval( testesttest, 500);



  //Ici on mets les algos qu'execute la carte bonus
  



  //..................................AUTOCLICK.....................................

  if($intervalAutoClick!=0){

    function autoClick(){

      if($onOff==1){
        clickAlgoBack()
      }

    }
    setInterval( autoClick, $intervalAutoClick);


  }
  

    
  //..................................FIN AUTOCLICK...................................




  //..................................MULTICLICK.....................................
    if($multi!= 0){
      function multiActif (){
      $multiGrenade=Math.pow($multi, $onOff)                                                                                //changeHere

    }
    setInterval( multiActif, 100);

    }
  //..................................FIN MULTICLICK..................................





  //..................................MOUVEMENT ARGENT PERSISTANT................................

  if($intervalMouvementArgent!=0){

    function mouvementArgent(){

      if($onOff==1){
        

        $compteurArgent=$compteurArgent+$mouvementArgentRecurrent;
        

      }

    }

    setInterval( mouvementArgent, $intervalMouvementArgent);
  }

    
  //..................................FIN MOUVEMENT ARGENT PERSISTANT...................................







  //..................................MOUVEMENT VOTE PERSISTANT................................

  if($intervalMouvementVote!=0){

    function mouvementVote(){

      if($onOff==1){
        

        $compteurVote=$compteurVote+$mouvementVoteRecurrent;
        // $compteurVotesTotal=$compteurVotesTotal+$mouvementVoteRecurrent;
        

      }

    }

    setInterval( mouvementVote, $intervalMouvementVote);
  }

    
  //..................................FIN MOUVEMENT VOTE PERSISTANT...................................






    
  

}
Grenade ();


//.................................................... FIN FONCTION PERSISTANTE grenade......................................................






// ............................................ FONCTION PERSISTANTE Belle Gueule..................................

                                                                                                               // changeHere

function avocat(){                                                                                      // changeHere

  let $intervalAutoClick=0;          //$intervalAutoClick est le temps en seconde entre deux auto clicks         // changeHere
  let $intervalMouvementArgent=3360;
  let $intervalMouvementVote=0;
  let $mouvementArgentRecurrent=-10000;   //les $mouvements peuvent etre positifs (gain) ou negatifs (perte)          // changeHere
  let $mouvementVoteRecurrent=0;                                                                                // changeHere
  let $multi=0;                                                                                                 // changeHere
  let $duree=1000000000;                     //$duree s'exprime en JOURS                                                // changeHere

  // ADAPTATION MATHEMATIQUE DES VARIABLES
   $intervalAutoClick=$intervalAutoClick*1000;       // Transforme les temps en ms





  let $onOff=0;
  function checkSiValable(){

    // check si la date limite n'est pas atteinte et si activée
    if (((parseInt(localStorage.getItem('boutonAchatAvocat').substr(1))+$duree) >= $tempsDeJeuJoursVirtuels) & (parseInt(localStorage.getItem('boutonAchatAvocat').substr(0, 1))==1)){
      $onOff=1;
    }

    else{
      $onOff=0;
      localStorage.setItem('boutonAchatAvocat',"00")

    }

  }
  setInterval( checkSiValable, 1000);

  // function testesttest (){
  //   console.log("actif=  "+$onOff)
  // }
  // setInterval( testesttest, 500);



  //Ici on mets les algos qu'execute la carte bonus
  



  //..................................AUTOCLICK.....................................

  if($intervalAutoClick!=0){

    function autoClick(){

      if($onOff==1){
        clickAlgoBack()
      }

    }
    setInterval( autoClick, $intervalAutoClick);


  }
  

    
  //..................................FIN AUTOCLICK...................................




  //..................................MULTICLICK.....................................
    if($multi!= 0){
      function multiActif (){
      $multiAvocat=Math.pow($multi, $onOff)                                                                                //changeHere

    }
    setInterval( multiActif, 100);

    }
  //..................................FIN MULTICLICK..................................





  //..................................MOUVEMENT ARGENT PERSISTANT................................

  if($intervalMouvementArgent!=0){

    function mouvementArgent(){

      if($onOff==1){
        

        $compteurArgent=$compteurArgent+$mouvementArgentRecurrent;
        

      }

    }

    setInterval( mouvementArgent, $intervalMouvementArgent);
  }

    
  //..................................FIN MOUVEMENT ARGENT PERSISTANT...................................







  //..................................MOUVEMENT VOTE PERSISTANT................................

  if($intervalMouvementVote!=0){

    function mouvementVote(){

      if($onOff==1){
        

        $compteurVote=$compteurVote+$mouvementVoteRecurrent;
        // $compteurVotesTotal=$compteurVotesTotal+$mouvementVoteRecurrent;
        

      }

    }

    setInterval( mouvementVote, $intervalMouvementVote);
  }

    
  //..................................FIN MOUVEMENT VOTE PERSISTANT...................................






    
  

}
avocat ();


//.................................................... FIN FONCTION PERSISTANTE avocat......................................................





// ............................................ FONCTION PERSISTANTE chomage..................................

                                                                                                               // changeHere

function chomage(){                                                                                      // changeHere

  let $intervalAutoClick=0;          //$intervalAutoClick est le temps en seconde entre deux auto clicks         // changeHere
  let $intervalMouvementArgent=3360;
  let $intervalMouvementVote=8;
  let $mouvementArgentRecurrent=70000;   //les $mouvements peuvent etre positifs (gain) ou negatifs (perte)          // changeHere
  let $mouvementVoteRecurrent=(-1000*$attenuationPertesGlobal);                                                                                // changeHere
  let $multi=0;                                                                                                 // changeHere
  let $duree=4*30;                     //$duree s'exprime en JOURS                                                // changeHere

  // ADAPTATION MATHEMATIQUE DES VARIABLES
   $intervalAutoClick=$intervalAutoClick*1000;       // Transforme les temps en ms





  let $onOff=0;
  function checkSiValable(){

    // check si la date limite n'est pas atteinte et si activée
    if (((parseInt(localStorage.getItem('boutonAchatChomage').substr(1))+$duree) >= $tempsDeJeuJoursVirtuels) & (parseInt(localStorage.getItem('boutonAchatChomage').substr(0, 1))==1)){
      $onOff=1;
    }

    else{
      $onOff=0;
      localStorage.setItem('boutonAchatChomage',"00")

    }

  }
  setInterval( checkSiValable, 1000);

  // function testesttest (){
  //   console.log("actif=  "+$onOff)
  // }
  // setInterval( testesttest, 500);



  //Ici on mets les algos qu'execute la carte bonus
  



  //..................................AUTOCLICK.....................................

  if($intervalAutoClick!=0){

    function autoClick(){

      if($onOff==1){
        clickAlgoBack()
      }

    }
    setInterval( autoClick, $intervalAutoClick);


  }
  

    
  //..................................FIN AUTOCLICK...................................




  //..................................MULTICLICK.....................................
    if($multi!= 0){
      function multiActif (){
      $multichomage=Math.pow($multi, $onOff)                                                                                //changeHere

    }
    setInterval( multiActif, 100);

    }
  //..................................FIN MULTICLICK..................................





  //..................................MOUVEMENT ARGENT PERSISTANT................................

  if($intervalMouvementArgent!=0){

    function mouvementArgent(){

      if($onOff==1){
        

        $compteurArgent=$compteurArgent+$mouvementArgentRecurrent;
        

      }

    }

    setInterval( mouvementArgent, $intervalMouvementArgent);
  }

    
  //..................................FIN MOUVEMENT ARGENT PERSISTANT...................................







  //..................................MOUVEMENT VOTE PERSISTANT................................

  if($intervalMouvementVote!=0){

    function mouvementVote(){

      if($onOff==1){
        

        $compteurVote=$compteurVote+$mouvementVoteRecurrent;
        // $compteurVotesTotal=$compteurVotesTotal+$mouvementVoteRecurrent;
        

      }

    }

    setInterval( mouvementVote, $intervalMouvementVote);
  }

    
  //..................................FIN MOUVEMENT VOTE PERSISTANT...................................

}
chomage ();


//.................................................... FIN FONCTION PERSISTANTE chomage......................................................






// ............................................ FONCTION PERSISTANTE rsa..................................

                                                                                                               // changeHere

function rsa(){                                                                                      // changeHere

  let $intervalAutoClick=0;          //$intervalAutoClick est le temps en seconde entre deux auto clicks         // changeHere
  let $intervalMouvementArgent=3360;
  let $intervalMouvementVote=3360;
  let $mouvementArgentRecurrent=40000;   //les $mouvements peuvent etre positifs (gain) ou negatifs (perte)          // changeHere
  let $mouvementVoteRecurrent=(-2000*$attenuationPertesGlobal);                                                                                // changeHere
  let $multi=0;                                                                                                 // changeHere
  let $duree=365;                     //$duree s'exprime en JOURS                                                // changeHere

  // ADAPTATION MATHEMATIQUE DES VARIABLES
   $intervalAutoClick=$intervalAutoClick*1000;       // Transforme les temps en ms





  let $onOff=0;
  function checkSiValable(){

    // check si la date limite n'est pas atteinte et si activée
    if (((parseInt(localStorage.getItem('boutonAchatrsa').substr(1))+$duree) >= $tempsDeJeuJoursVirtuels) & (parseInt(localStorage.getItem('boutonAchatrsa').substr(0, 1))==1)){
      $onOff=1;
    }

    else{
      $onOff=0;
      localStorage.setItem('boutonAchatrsa',"00")

    }

  }
  setInterval( checkSiValable, 1000);

  // function testesttest (){
  //   console.log("actif=  "+$onOff)
  // }
  // setInterval( testesttest, 500);



  //Ici on mets les algos qu'execute la carte bonus
  



  //..................................AUTOCLICK.....................................

  if($intervalAutoClick!=0){

    function autoClick(){

      if($onOff==1){
        clickAlgoBack()
      }

    }
    setInterval( autoClick, $intervalAutoClick);


  }
  

    
  //..................................FIN AUTOCLICK...................................




  //..................................MULTICLICK.....................................
    if($multi!= 0){
      function multiActif (){
      $multiRsa=Math.pow($multi, $onOff)                                                                                //changeHere

    }
    setInterval( multiActif, 100);

    }
  //..................................FIN MULTICLICK..................................





  //..................................MOUVEMENT ARGENT PERSISTANT................................

  if($intervalMouvementArgent!=0){

    function mouvementArgent(){

      if($onOff==1){
        

        $compteurArgent=$compteurArgent+$mouvementArgentRecurrent;
        

      }

    }

    setInterval( mouvementArgent, $intervalMouvementArgent);
  }

    
  //..................................FIN MOUVEMENT ARGENT PERSISTANT...................................







  //..................................MOUVEMENT VOTE PERSISTANT................................

  if($intervalMouvementVote!=0){

    function mouvementVote(){

      if($onOff==1){
        

        $compteurVote=$compteurVote+$mouvementVoteRecurrent;
        // $compteurVotesTotal=$compteurVotesTotal+$mouvementVoteRecurrent;
        

      }

    }

    setInterval( mouvementVote, $intervalMouvementVote);
  }

    
  //..................................FIN MOUVEMENT VOTE PERSISTANT...................................






    
  

}
rsa ();


//.................................................... FIN FONCTION PERSISTANTE rsa......................................................

// ............................................ FONCTION PERSISTANTE cabinet..................................

                                                                                                               // changeHere

function cabinet(){                                                                                      // changeHere

  let $intervalAutoClick=0;          //$intervalAutoClick est le temps en seconde entre deux auto clicks         // changeHere
  let $intervalMouvementArgent=3360;
  let $intervalMouvementVote=0;
  let $mouvementArgentRecurrent=-20000;   //les $mouvements peuvent etre positifs (gain) ou negatifs (perte)          // changeHere
  let $mouvementVoteRecurrent=0;                                                                                // changeHere
  let $multi=0;                                                                                                 // changeHere
  let $duree=3000000;                     //$duree s'exprime en JOURS                                                // changeHere

  // ADAPTATION MATHEMATIQUE DES VARIABLES
   $intervalAutoClick=$intervalAutoClick*1000;       // Transforme les temps en ms





  let $onOff=0;
  function checkSiValable(){

    // check si la date limite n'est pas atteinte et si activée
    if (((parseInt(localStorage.getItem('boutonAchatCabinetAvocat').substr(1))+$duree) >= $tempsDeJeuJoursVirtuels) & (parseInt(localStorage.getItem('boutonAchatCabinetAvocat').substr(0, 1))==1)){
      $onOff=1;
    }

    else{
      $onOff=0;
      localStorage.setItem('boutonAchatCabinetAvocat',"00")

    }

  }
  setInterval( checkSiValable, 1000);

  // function testesttest (){
  //   console.log("actif=  "+$onOff)
  // }
  // setInterval( testesttest, 500);



  //Ici on mets les algos qu'execute la carte bonus
  



  //..................................AUTOCLICK.....................................

  if($intervalAutoClick!=0){

    function autoClick(){

      if($onOff==1){
        clickAlgoBack()
      }

    }
    setInterval( autoClick, $intervalAutoClick);


  }
  

    
  //..................................FIN AUTOCLICK...................................




  //..................................MULTICLICK.....................................
    if($multi!= 0){
      function multiActif (){
      $multiCabinetAvocat=Math.pow($multi, $onOff)                                                                                //changeHere

    }
    setInterval( multiActif, 100);

    }
  //..................................FIN MULTICLICK..................................





  //..................................MOUVEMENT ARGENT PERSISTANT................................

  if($intervalMouvementArgent!=0){

    function mouvementArgent(){

      if($onOff==1){
        

        $compteurArgent=$compteurArgent+$mouvementArgentRecurrent;
        

      }

    }

    setInterval( mouvementArgent, $intervalMouvementArgent);
  }

    
  //..................................FIN MOUVEMENT ARGENT PERSISTANT...................................







  //..................................MOUVEMENT VOTE PERSISTANT................................

  if($intervalMouvementVote!=0){

    function mouvementVote(){

      if($onOff==1){
        

        $compteurVote=$compteurVote+$mouvementVoteRecurrent;
        // $compteurVotesTotal=$compteurVotesTotal+$mouvementVoteRecurrent;
        

      }

    }

    setInterval( mouvementVote, $intervalMouvementVote);
  }

    
  //..................................FIN MOUVEMENT VOTE PERSISTANT...................................

}
cabinet ();


//.................................................... FIN FONCTION PERSISTANTE cabinet......................................................



// ............................................ FONCTION PERSISTANTE BFN TV..................................

                                                                                                               // changeHere

function bfntv(){                                                                                      // changeHere

  let $intervalAutoClick=0.12;          //$intervalAutoClick est le temps en seconde entre deux auto clicks         // changeHere
  let $intervalMouvementArgent=3360;
  let $intervalMouvementVote=0;
  let $mouvementArgentRecurrent=50000;   //les $mouvements peuvent etre positifs (gain) ou negatifs (perte)          // changeHere
  let $mouvementVoteRecurrent=0;                                                                                // changeHere
  let $multi=0;                                                                                                 // changeHere
  let $duree=30*6;                     //$duree s'exprime en JOURS                                                // changeHere

  // ADAPTATION MATHEMATIQUE DES VARIABLES
   $intervalAutoClick=$intervalAutoClick*1000;       // Transforme les temps en ms





  let $onOff=0;
  function checkSiValable(){

    // check si la date limite n'est pas atteinte et si activée
    if (((parseInt(localStorage.getItem('boutonAchatbfntv').substr(1))+$duree) >= $tempsDeJeuJoursVirtuels) & (parseInt(localStorage.getItem('boutonAchatbfntv').substr(0, 1))==1)){
      $onOff=1;
    }

    else{
      $onOff=0;
      localStorage.setItem('boutonAchatbfntv',"00")

    }

  }
  setInterval( checkSiValable, 1000);

  // function testesttest (){
  //   console.log("actif=  "+$onOff)
  // }
  // setInterval( testesttest, 500);



  //Ici on mets les algos qu'execute la carte bonus
  



  //..................................AUTOCLICK.....................................

  if($intervalAutoClick!=0){

    function autoClick(){

      if($onOff==1){
        clickAlgoBack()
      }

    }
    setInterval( autoClick, $intervalAutoClick);


  }
  

    
  //..................................FIN AUTOCLICK...................................




  //..................................MULTICLICK.....................................
    if($multi!= 0){
      function multiActif (){
      $multiBFNTV=Math.pow($multi, $onOff)                                                                                //changeHere

    }
    setInterval( multiActif, 100);

    }
  //..................................FIN MULTICLICK..................................





  //..................................MOUVEMENT ARGENT PERSISTANT................................

  if($intervalMouvementArgent!=0){

    function mouvementArgent(){

      if($onOff==1){
        

        $compteurArgent=$compteurArgent+$mouvementArgentRecurrent;
        

      }

    }

    setInterval( mouvementArgent, $intervalMouvementArgent);
  }

    
  //..................................FIN MOUVEMENT ARGENT PERSISTANT...................................







  //..................................MOUVEMENT VOTE PERSISTANT................................

  if($intervalMouvementVote!=0){

    function mouvementVote(){

      if($onOff==1){
        

        $compteurVote=$compteurVote+$mouvementVoteRecurrent;
        // $compteurVotesTotal=$compteurVotesTotal+$mouvementVoteRecurrent;
        

      }

    }

    setInterval( mouvementVote, $intervalMouvementVote);
  }

    
  //..................................FIN MOUVEMENT VOTE PERSISTANT...................................






    
  

}
bfntv ();


//.................................................... FIN FONCTION PERSISTANTE BFNTV......................................................


// ............................................ FONCTION PERSISTANTE education..................................

                                                                                                               // changeHere

function education(){                                                                                      // changeHere

  let $intervalAutoClick=0;          //$intervalAutoClick est le temps en seconde entre deux auto clicks         // changeHere
  let $intervalMouvementArgent=28;
  let $intervalMouvementVote=0;
  let $mouvementArgentRecurrent=60000;   //les $mouvements peuvent etre positifs (gain) ou negatifs (perte)          // changeHere
  let $mouvementVoteRecurrent=0;                                                                                // changeHere
  let $multi=0;                                                                                                 // changeHere
  let $duree=6*30;                     //$duree s'exprime en JOURS                                                // changeHere

  // ADAPTATION MATHEMATIQUE DES VARIABLES
   $intervalAutoClick=$intervalAutoClick*1000;       // Transforme les temps en ms





  let $onOff=0;
  function checkSiValable(){

    // check si la date limite n'est pas atteinte et si activée
    if (((parseInt(localStorage.getItem('boutonAchatEducation').substr(1))+$duree) >= $tempsDeJeuJoursVirtuels) & (parseInt(localStorage.getItem('boutonAchatEducation').substr(0, 1))==1)){
      $onOff=1;
    }

    else{
      $onOff=0;
      localStorage.setItem('boutonAchatEducation',"00")

    }

  }
  setInterval( checkSiValable, 1000);

  // function testesttest (){
  //   console.log("actif=  "+$onOff)
  // }
  // setInterval( testesttest, 500);



  //Ici on mets les algos qu'execute la carte bonus
  



  //..................................AUTOCLICK.....................................

  if($intervalAutoClick!=0){

    function autoClick(){

      if($onOff==1){
        clickAlgoBack()
      }

    }
    setInterval( autoClick, $intervalAutoClick);


  }
  

    
  //..................................FIN AUTOCLICK...................................




  //..................................MULTICLICK.....................................
    if($multi!= 0){
      function multiActif (){
      $multiBelleGueule=Math.pow($multi, $onOff)                                                                                //changeHere

    }
    setInterval( multiActif, 100);

    }
  //..................................FIN MULTICLICK..................................





  //..................................MOUVEMENT ARGENT PERSISTANT................................

  if($intervalMouvementArgent!=0){

    function mouvementArgent(){

      if($onOff==1){
        

        $compteurArgent=$compteurArgent+$mouvementArgentRecurrent;
        

      }

    }

    setInterval( mouvementArgent, $intervalMouvementArgent);
  }

    
  //..................................FIN MOUVEMENT ARGENT PERSISTANT...................................







  //..................................MOUVEMENT VOTE PERSISTANT................................

  if($intervalMouvementVote!=0){

    function mouvementVote(){

      if($onOff==1){
        

        $compteurVote=$compteurVote+$mouvementVoteRecurrent;
        // $compteurVotesTotal=$compteurVotesTotal+$mouvementVoteRecurrent;
        

      }

    }

    setInterval( mouvementVote, $intervalMouvementVote);
  }

    
  //..................................FIN MOUVEMENT VOTE PERSISTANT...................................






    
  

}
education ();


//.................................................... FIN FONCTION PERSISTANTE education.....................................................


// ..................................................... FIN CARTES BONUS ..................................................................



///////////////////////////////////////////////////////// PARTIE JULIEN //////////////////////////////////////////////////////////////////

var timeAdd = parseInt(localStorage.getItem('timeFromStartAllPlay'));
var argentAddTotal = parseInt(localStorage.getItem('argentTotalAllPlay'));
var voteAddTotal = parseInt(localStorage.getItem('voteTotalAllPlay'));
////////////////////////////////// RESET ////////////////////////////////////



$generique = document.getElementById('generique');
$closeVideo=document.getElementById('closeVideo');
var video = document.getElementById('videoGenerique');
function stopTheVideo(){
  video.pause()
  $generique.classList.add("generiqueDisplay");

}

// document.getElementById('videogenerique').addEventListener('ended',myHandler,true);
// function myHandler(e) {
//   $generique.classList.add("generiqueDisplay");

// }


function reset(){



  $generique.classList.remove("generiqueDisplay");

  video.play();
  function afficherClose(){
    $closeVideo.style.display= "flex";
  }

  setTimeout(afficherClose, 21000);
  setTimeout(stopTheVideo,130000);




 
  localStorage.setItem('timeFromStartAllPlay', timeAdd);
  localStorage.setItem('argentTotalAllPlay', argentAddTotal);
  localStorage.setItem('voteTotalAllPlay', voteAddTotal);

  
  if (isNaN(voteAddTotal)) {}
  else {$compteurVotesTotal += voteAddTotal;}
  if (isNaN(argentAddTotal)) {}
  else { $compteurArgentTotal += argentAddTotal;}
  if (isNaN(timeAdd)) {}
  else {$tempsDeJeuSeconde += timeAdd;}
  $compteurArgent = 0; // à remplacer par $compteurArgentCaisseNoire;
  $compteurVote = 0;
  localStorage.setItem('boutonAchatBelleGueule', '000');
  localStorage.setItem('boutonAchatBelleMeuf', '000');
  localStorage.setItem('boutonAchatarticleJournal', '000');
  localStorage.setItem('boutonAchatphotoDeFamille', '000');
  localStorage.setItem('boutonAchatJustice', '000');
  localStorage.setItem('boutonAchatCabinetAvocat', '000');
  localStorage.setItem('boutonAchatAvocat', '000');
  localStorage.setItem('boutonAchatrsa', '000');
  localStorage.setItem('boutonAchatChomage', '000');
  localStorage.setItem('boutonAchatEducation', '000');
  localStorage.setItem('boutonAchatGrenade', '000');
  localStorage.setItem('boutonAchatGunsRoses', '000');
  localStorage.setItem('boutonAchatarticleJournal', '000');
  localStorage.setItem('boutonAchatPanem', '000');
  localStorage.setItem('boutonAchatbfntv', '000');
  $tempsDeJeuSeconde = 0;
  localStorage.removeItem('$stopCrs');
  localStorage.removeItem('$stopMigrants');

  
}
//////////////////////////////// FIN RESET ////////////////////////////////

///////////////////////////// RANKING ///////////////////////////////
function rankingSort(){

    var $rankingTable = [
            {name: 'Petine', val: 956555222415515155},
            {name: 'Kimi', val: 200698777777000},
            {name: 'Mao', val: 120365554632},
            {name: 'Joe', val: 830000},
            {name: 'Janine', val: 12365},
            {name:'Vous', val: parseInt(localStorage.getItem("compteurVote"))}
        ];

    $rankingTable.sort(function(a,b) {
        return b.val - a.val;
    });
    //console.log(rankingTable);

        $elements = "";
        for(var $ranking in $rankingTable)
        {
            $elements += '<p id=rank-'+$rankingTable[$ranking]['name']+'>' + $rankingTable[$ranking]['name']+' : '+ $rankingTable[$ranking]['val'] +'</p>'  ;
        }

        document.getElementById('ranking').innerHTML = $elements;
        document.getElementById('rank-Vous').style.color="red";
}

setInterval(rankingSort, 1000);
/////////////////// FIN RANKING ////////////////////

////////////////////////////////////// FIN JULIEN /////////////////////////////////////


