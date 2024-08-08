function bonjour() {
    document.write("<p>Bonjour le monde !</p>");
}

console.log("chargement du fichier fonctions.js");

bonjour();
bonjour();

// fonction avec argument
function salut(prenom) {
    document.write("<p>Bonjour " + prenom + ", bienvenue au Pole S</p>");
}

// EXO appeler la fonction salut avec votre prénom
salut("Jean Cérien");

// fonction avec plusieurs arguments
function phrase(mot1, mot2, mot3) {
    if( mot3 != undefined ) {
        document.write("<h4>" + mot2 + " " + mot3 + " " + mot1 + "</h4>");

    } else {
        document.write("<h4>" + mot2 + " " + mot1 + "</h4>");
    }
}

phrase("Iron Man", "je", "suis");
phrase("ineluctable", "I am");

// fonction qui retourne une valeur
function tva(prix) {
    let calcul = prix * .2;
    return calcul;
}


let taxe = tva(100);
document.write("La taxe sur un produit de 100€ est " + taxe + "€<br>");

let prix = 200;
let calcul = tva(prix);
document.write("La taxe sur un produit de " + prix + "€ est " + calcul + "€<br>");


