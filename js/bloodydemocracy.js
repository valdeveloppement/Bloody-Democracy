/////////////////////////////////////// VALENTIN  /////////////////////////////////////////////

$clicker = document.getElementById('clicker');
$brasDessous = document.getElementById('brasDessous');
$brasDessus = document.getElementById('brasDessus');
$brasPaper = document.getElementById('brasPaper');
$nbClicks=0;
$volumeMaster=1;
$MultiClickGlobal=1;
$attenuationPertesGlobal=1;

var $compteurArgent;
var $compteurVote;
var $compteurVotesTotal;
var $compteurArgentTotal;
var $compteurArgentCaisseNoire;



//....................................CALENDRIER INTERSIDERAL....................................................

// localStorage.clear();

// 1jour dure 4 min
$ratioSecondesParJour=3;

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
  $tempsDeJeuJoursVirtuels= Math.ceil($tempsDeJeuSeconde/$ratioSecondesParJour);

  $jourDuMois=($tempsDeJeuJoursVirtuels % 29);
  
  $tempsDeJeuMoisVirtuels=1+($tempsDeJeuJoursVirtuels-$jourDuMois)/29;

  console.log("Jour "+$jourDuMois+"  Mois "+$tempsDeJeuMoisVirtuels);
}
setInterval(refreshCalendar,1000);

// ....................................................................................................................








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

$containerCompteurVote.innerHTML = $compteurVote;
$containerCompteurArgent.innerHTML = $compteurArgent;
$compteurVotesTotal = 0;
$compteurArgentTotal = 0;
///////////////////////// FIN JULIEN //////////////////////////////////////////////////


// Cette fonction met à jour les positions quand on change la taille d'ecran.
function placeClicker() {

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
$boiteDessus.onmouseenter=playBloup;
$boiteDessus.onmouseleave=playBloup;



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


// Fonction du click sur la boite

function click() {

  if($nbClicks>0){
    $chute=0;
    $angle=0;    
    clearInterval($vitesseUp);
    clearInterval($vitesseDownPaper);
    clearInterval($vitesseDown);

  }
  
  playBloup();

  $vitesseDown = setInterval( downBras, 6);

  $nbClicks=$nbClicks+1;
  console.log($nbClicks)

  ///////////////////////////////////// PARTIE JULIEN ////////////////////
  $compteurVote=$compteurVote+(1*$MultiClickGlobal);
  $compteurArgent=$compteurArgent+(5*$MultiClickGlobal);
  $compteurVotesTotal=$compteurVotesTotal+(1*$MultiClickGlobal);
  $compteurArgentTotal=$compteurArgentTotal+(5*$MultiClickGlobal);
  $containerCompteurVote.innerHTML = $compteurVote;
  $containerCompteurArgent.innerHTML = $compteurArgent;
  $audio = new Audio('sons/vote.mp3');
  //////VAL//////
  $audio.volume = 0.2*$volumeMaster;
  /////VAL//////
  $audio.play();
  localStorage.setItem('compteurVote', $compteurVote);
  localStorage.setItem('compteurArgent', $compteurArgent);
  localStorage.setItem('compteurVotesTotal', $compteurVotesTotal);
  localStorage.setItem('compteurArgentTotal', $compteurArgentTotal);
  ////////////////////////////////////// FIN JULIEN /////////////////////


}



// Fonctions qui animent l'effet "bloop"

$zoom=0;
$entropie=1;
function bloup(){
$zoom=$zoom+1;
if (($zoom<10/$entropie) & $entropie<=2){
$boiteDessus.style.transform="scale(1.0"+$zoom+")";
$boiteDessous.style.transform="scale(1.0"+$zoom+")";
console.log("test")
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
  console.log("test")
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




// Sinus qui s'attenue :  ((6+cos(x-3)-0.5(x-3))/6)^2




/////////////////////////////////////// FIN VALENTIN  /////////////////////////////////////////////


//////////////////////////////// JULIEN ////////////////////////
//Création du compteur vote
od = new Odometer({
  el: $containerCompteurVote,
  value: $compteurVote,

  // Any option (other than auto and selector) can be passed in here
  format: 'd',
  theme: 'train-station',
  duration:200,
  //animation: 'count'
});


////Création du compteur argent
od1 = new Odometer({
  el: $containerCompteurArgent,
  value: $compteurArgent,

  // Any option (other than auto and selector) can be passed in here
  format: 'd',
  theme: 'dollar',
  duration:200,
  //animation: 'count'
});


//////////////////////////////// FIN JULIEN ///////////////////////








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

// var $belleGueuleActif;



// fonction de mise à jour des variables et du check de disponibilité
function checkAchat($iD){
  $iDBouton=$iD.id;
  

  if(0+0=="la tete à toto"){alert("LOL")}   // franchement, cherchez pas à comprendre, mais ne touchez pas XD

 
  //.........................  BELLE GUEULE  ................................
  else if($iDBouton== "boutonAchatBelleGueule"){                                                                                        // changeHere
    $persistance=1;         // TRES IMPORTANT: 0 si usage instantanné, 1 si a une durée ou doit persister à la fermeture de cession     // changeHere   
    $coutArgent=200;                                                                                                                    // changeHere
    $coutVote=0;                                                                                                                        // changeHere
    $mouvementArgentOneShot=0;                                                                                                          // changeHere
    $mouvementVoteOneShot=0;                                                                                                            // changeHere
    $mouvementArgentCaisseNoire=0;                                                                                                      // changeHere
    $attenuationPertes=0;//le coefficient d'attenuation s'exprime en %, si on veut attenuer de 10% $attenuationPertes=10;               // changeHere

   
  }
  //.........................  FIN BELLE GUEULE  ................................




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
   
  console.log(localStorage.getItem($iDBouton));
  console.log($coutArgent)
  console.log($compteurArgent)

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

  }


  $attenuationPertes=(100-$attenuationPertes)/100;  // Ne pas toucher: Transforme la réduction% en coefficient

}



function achat(){

  if ($disponible==1 ){
    localStorage.setItem($iDBouton,10);

    console.log(localStorage.getItem($iDBouton));

    $compteurArgent=$compteurArgent-$coutArgent;
    $compteurVote=$compteurVote-$coutVote;
    $compteurArgent=$compteurArgent+$mouvementArgentOneShot;
    $compteurVote=$compteurVote+$mouvementVoteOneShot;
    $compteurArgentTotal=$compteurArgentTotal-$coutArgent;
    $compteurVotesTotal=$compteurVotesTotal-$coutVote;
    $compteurArgentTotal=$compteurArgentTotal+$mouvementArgentOneShot;
    $compteurVotesTotal=$compteurVotesTotal+$mouvementVoteOneShot;
    $compteurArgentCaisseNoire=$compteurArgentCaisseNoire+$mouvementArgentCaisseNoire;
    $attenuationPertesGlobal=$attenuationPertesGlobal*$attenuationPertes; 



    if ($persistance==1){
      
      localStorage.setItem($iDBouton,"1"+$tempsDeJeuJoursVirtuels);
      console.log(localStorage.getItem($iDBouton));
      
    }



  }
}



// ............................................ FONCTION PERSISTANTE..................................

function belleGueule(){                                                                                      // changeHere

  $intervalAutoClick=0;          //$intervalAutoClick est le temps en seconde entre deux auto clicks         // changeHere
  $mouvementArgentrecurrent=0;   //les $mouvements peuvent etre positifs (gain) ou negatifs (perte)          // changeHere
  $mouvementVoterecurrent=0;                                                                                // changeHere
  $multi=0;                                                                                                 // changeHere
  $duree=30;                     //$duree s'exprime en JOURS                                                // changeHere

  // ADAPTATION MATHEMATIQUE DES VARIABLES
  $intervalAutoClick=$intervalAutoClick*1000;       // Transforme les temps en ms





  $onOff=0;
  function checkSiValable(){

    // check si la date limite n'est pas atteinte et si activée
    if (((parseInt(localStorage.getItem('boutonAchatBelleGueule').substr(1))+$duree) >= $tempsDeJeuJoursVirtuels) & (parseInt(localStorage.getItem('boutonAchatBelleGueule').substr(0, 1))==1)){
      $onOff=1;
    }

    else{
      $onOff=0;
    }

  }
  setInterval( checkSiValable, 2000);

  // function testesttest (){
  //   console.log("actif=  "+$onOff)
  // }
  // setInterval( testesttest, 500);



//Ici on mets les algos qu'execute la carte bonus
  if ($onOff==1){











  }

}
belleGueule ();


// .................................................... FIN FONCTION PERSISTANTE......................................................


// ..................................................... FIN CARTES BONUS ..................................................................









