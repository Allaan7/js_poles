function exo1(nb1, nb2) {
    if( superieur(nb1, nb2) ) {
        ecrireLigne(nb1 + " est supérieur à " + nb2);
    } else {
        ecrireLigne(nb1 + " est inférieur ou égal à " + nb2);
    }
}

let nb1 = 15, nb2 = 7;

exo1(nb1, nb2);
// if( superieur(nb1, nb2) ) {
//     ecrireLigne(nb1 + " est supérieur à " + nb2);
// } else {
//     ecrireLigne(nb1 + " est inférieur ou égal à " + nb2);
// }

nb1 = 52;
nb2 = 324;
exo1(nb1, nb2);
// if( superieur(nb1, nb2) ) {
//     ecrireLigne(nb1 + " est supérieur à " + nb2);
// } else {
//     ecrireLigne(nb1 + " est inférieur ou égal à " + nb2);
// }

exo1(9, 10);
// nb1 = 9;
// nb2 = 10;

// if( superieur(nb1, nb2) ) {
//     ecrireLigne(nb1 + " est supérieur à " + nb2);
// } else {
//     ecrireLigne(nb1 + " est inférieur ou égal à " + nb2);
// }

nb1 = 4;
nb2 = -52;
exo1(nb1, nb2);
// if( superieur(nb1, nb2) ) {
//     ecrireLigne(nb1 + " est supérieur à " + nb2);
// } else {
//     ecrireLigne(nb1 + " est inférieur ou égal à " + nb2);
// }

ecrire("<hr>");

nb1 = 15; nb2 = 7;
ecrireLigne("La plus grande valeur entre " + nb1 + " et " + nb2 + " est " + plusGrand(nb1, nb2));

nb1 = 52; nb2 = 324;
ecrireLigne("La plus grande valeur entre " + nb1 + " et " + nb2 + " est " + plusGrand(nb1, nb2));

nb1 = 9; nb2 = 10;
ecrireLigne("La plus grande valeur entre " + nb1 + " et " + nb2 + " est " + plusGrand(nb1, nb2));

nb1 = 4; nb2 = -52;
ecrireLigne("La plus grande valeur entre " + nb1 + " et " + nb2 + " est " + plusGrand(nb1, nb2));

ecrireLigne("<hr>");
let tableau = [ 4, "32", 65.2, "fin", "nouvelle valeur" ];
ecrireLigne("La dernière valeur du tableau est <strong>" + derniereValeur(tableau) + "</strong>");

let jours = ["lundi", "mardi", "mercredi", "jeudi", "samedi", "dimanche"];
ecrireLigne("La dernière valeur du tableau est <strong>" + derniereValeur(jours) + "</strong>");


ecrireLigne("<hr><h2>exercice 4</h2>");
let nombres = [ 15, 7, 52, 324, 4, -52, 9, 10 ];
ecrireLigne("La plus petite valeur du tableau " + nombres + " est " + plusPetit(nombres));

let notes = [ 12, 17, 4, 15, 20, 5 ];
ecrireLigne("La plus petite valeur du tableau [" + notes + "] est " + plusPetit(notes));
ecrireLigne("La plus petite valeur du tableau [" + jours + "] est " + plusPetit(jours));
