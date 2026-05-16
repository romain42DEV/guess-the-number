// l'ordinateur pioche un nombre aleatoire
// role: Génère un nombre aléatoire entre 1 et 20
// paramètre : rien
// return: renvoie un chiffre aléatoire

function chiffreAleatoire () {
    let nmbrPioche = Math.floor(Math.random()*20)+1
    return nmbrPioche
}

// demande au joueur de deviner
// role: poser la question
// paramètre : rien
// return: la reponse du joueur

function reponseUtilisateur () {
    let reponseUtili = parseFloat(prompt("choisi un nombre entre 1 et 20 ?"));
    return reponseUtili;
}

// indique à l'utilisateur plus haut ou plus bas
// role: compare
// paramètre : chiffre pioché , réponse de l'utilisateur
// return: rien

function comparechiffre (nmbrPioche, nbrUtilisateur) {

    // si le nombre utilisateur est supérieur à 20 -> "erreur"
    if (nbrUtilisateur > 20 || nbrUtilisateur === 0) {
        alert("erreur")
    }
    // si le nombre choisi est inferieur à la réponse utilisateur -> "c'est moins"
    else if (nmbrPioche < nbrUtilisateur) {
        alert("c'est moins")
    }
    // si le nombre choisi est supérieur à la réponse utilisateur -> "c'est plus"
    else if (nmbrPioche > nbrUtilisateur) {
        alert("c'est plus")
    }
    // si le nombre choisi = réponse utilisateur -> "bravo"
    else {
        alert("bravo !")
    }
}



// role: jouer le scénario -> choisi un nombre aléatoire, pose la question, compare les deux nombres
// paramètre: rien
// return: rien car elle affiche

function lancerFonctions(){
    let choixOrdi = chiffreAleatoire();
    let choixJoueur = reponseUtilisateur();
    comparechiffre(choixOrdi, choixJoueur);
}

lancerFonctions();


/*
//l'ordinateur pioche nbr aleatoire
//role : choisir un nbr entre 1 et 20
//parametre : non
//return : nbr pioché
function nbrAleatoire() {

    // on pioche un nombre aléatoire entre 0 et 20 (non inclut normalement, c'est pourquoi on rajoute le +1) 
    let nbrPioche = Math.floor(Math.random() * 20) + 1
    return nbrPioche
}

//role : demander au joueur de deviner
//parametre  : non 
//return : la reponse du joueur 
function reponseUtilisateur() {

    // pose la question 
    //parseFloat permet de transformer la réponse au prompt qui est un string en number
    let repUtili = parseFloat(prompt("devine le chiffre auquel je pense. Il se situe entre 1 et 20"))

    //retourner la reponse
    return repUtili;
}


//role : indique a l'utilisateur plus haut ou plus bas en focntiond e sa réponse 
//parametre : le chiffre pioché par l'ordi, la reponse du l'utilisateur 
//return : rien car elle affiche 
function indiquePlusOuMoins(nbrPioche, choixUtilisateur) {

    // si le nbr choisi est inferieur a la reponse utili -> "c'est moins"
    if (choixUtilisateur > 20) {
        alert("ereeur")
    }

    else if (nbrPioche < choixUtilisateur) {
        alert("c'est moins")
    }

    // si le nbr choisi est supérieur a la reponse utili -> "c'est plus"
    else if (nbrPioche > choixUtilisateur) {
        alert("c'est plus")
    }

    // si le nbr chois = reponse utili -> "bravo"
    else {
        alert("bravo ! ")
    }


}

//role : lancer le scenario de jeu 
//parametre : non
//return : non 
function scenario() {

    let choixOrdi = nbrAleatoire();
    let choixJoueur = reponseUtilisateur();
    indiquePlusOuMoins(choixOrdi, choixJoueur);


}

scenario()
*/