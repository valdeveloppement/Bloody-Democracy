# bloodyDemocracy

Clicker :
- Mouvement de main (fréquence basse)
- vibration de l'urne (fréquence rapide)

Compteurs :
- Compteur vote
- Compteur d'argent

Bonus Temporaire :
  - Slider Bonus Temporaire
  - Paramètres :
    - Stats
    - Temps de jeu
    - Sauvegarde
    - Nom du joueur
  - Ranking
  - Achievements
  - Partie Gestion

Stores :
  - Slider Vote (fait gagner des votes)
    - Belle Gueule (autoclick basique)
    - Publication Journal (autoclick / Temporaire)
    - Diffusion Publicité (autoclick / temporaire)
    - Achat Journal (améliore Publication + génère Argent + autoclick)
    - Achat Groupe TV (améliore diffusion publicité + génère Argent + autoclick)
    
  - Slider d'Argent (fait gagner de l'argent)
    - Ventes d'armes (valeur fixe / débloque events liés aux armes + ajout caisse noire)
    - Lobbying 
  - Slider Gestion
    - Locaux (donne x votes / sec, coût argent)
    - Frais Avocats (% reduc malus)
    - Assurances 
    - Caisse Noire (augmente la quantité d'argent lors des resets)
    - Boite de Comm (réduit malus sur les votes)
    
Events :
- Events à Choix (réponse temps imparti, conséquences connues ou non)
  - Manifestations
  - Migrants à la mer
  - Débats Télévisés (choix multiples, conséquences inconnues)
  - 
- Events obligatoires
  - Bonus gratos au click (temps limité)    

Templates Carte Vote / Argent:
 - Miniature
  - coût
  - icone
  - petit timer (si temporaire)
  - bouton achat
 - Grand 
    - Titre
    - Photo
    - description carte 
    - coût
    - nombre de fois acheté
    - effets
    - bouton achat

Template Events
  - Image / ou video / ou gif animé 
  - Description courte
  - Timer 
  - Choix 1 ou 2
  - Conséquences (cacheés ou non)

Bonus ++ : KARMA et FLUX RSS et RANKING

////////////////////////////////////REGLES DE CODE////////////////////////////////////////
Ecrire en camelcase, ex :
function maJolieFonction

Mettre un "$" devant les noms de variables

Bien indenter et commenter son code

A chaque fois qu'on a un bloc de code perso, l'encadrer ex :

///////////////// JULIEN /////////////
MON BLOC DE CODE

/////////////// FIN JULIEN ///////////////



//////////////////////////////////// VARIABLES //////////////////////////////////////////
- $nbClicks = compteur de click
- $nbClicksTotal = compteur de click totaux (pour reset + achievement)
- $compteurVote = compteur de vote
- $compteurVotesTotal(pour reset + achievement)
- $compteurArgent = compteur d'argent
- $compteurArgentTotal (pour reset + achievement)
- $tempsDeJeu = compteur temps de jeu réellement passé
- $tempsDeJeuTotal (pour reset + achievement)
- $tempsDeJeuVirtuel (sert pour le timing des cartes) : 1j virtuel = 4 min réelles
- $nomJoueur
- $classement (tableau)
- $rangClassement

Pour les cartes :
Pour le nom de la fonction onClick (ex pour la carte Belle Gueule) : belleGueule()
Variables associées :
- $coutArgentBelleGueule
- $coutVoteBelleGueule
- $multiBelleGueule
- $gainBelleGueule
- $perteBelleGueule
- $dureeBelleGueule
- $caisseNoireBelleGueule
