function ecrireLigne(texte) {
    document.write(texte + "<br>");
}

function ecrire(texte) {
    document.write(texte);
}

function addition(nb1, nb2) {
    // return parseFloat(nb1) + parseFloat(nb2);
    return Number(nb1) + Number(nb2);
    console.log("l'instruction après le 'return' ne sera jamais exécutée");
}

function superieur(a, b) {
    /*
        if( a > b ) {
            return true;
        } else {
            return false;
        }
    */
    return a > b;
}

function plusGrand(a, b) {
    /*
    // v1
    if(a > b) {
        return a;
    } else {
        return b;
    }
    */

    /*
    //v2 
    if(a > b) {
        return a;
    }
    return b;
    */

    return a > b ? a : b;
}

function derniereValeur(tableau) {
    return tableau[tableau.length - 1];
}

function indiceDerniereValeur(tableau) {
    return tableau.length - 1;
}

function plusPetit(tableau) {
    let plusPetiteValeur = tableau[0];
    for(const valeur of tableau) {
        console.log("valeur =", valeur, "plusPetiteValeur=", plusPetiteValeur);
        if( valeur < plusPetiteValeur ) {
            plusPetiteValeur = valeur;
        }
    
    }
    return plusPetiteValeur;
}


function alea(min, max) {   
    return Math.floor( Math.random() * (max - min) ) + min; 
}
