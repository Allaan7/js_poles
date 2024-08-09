//  Declarez une variable nommée 'test' et affectez la valeur "ceci est un string"

let test;
test = "ceci est un string";


// Concatenez le texte suivant ", mais cette variable peut contenir un numérique"
// dans la variable test

test = test + ", mais cette variable peut contenir un numérique";
// ou cette solution : test += ", mais cette variable peut contenir un numérique";


// déclarez une variable "calcul" et affectez lui la valeur 
// de la somme de 4 + 5

let calcul;
calcul = 4 + 5;

/* 3.
	- déclarez la variable "test1", affectez la valeur de 
    	la variable calcul + la variable test
 	- affichez, dans la console, le type de la variable test1   
*/

let test1 = calcul + " " + test;
console.log("test1", test1, typeof test1);


/* 4. déclarez les variables suivantes :
		nb1 = 5;
        nb2 = "10";
		Affectez le résultat de l'addition de nb1 et nb2 dans la variable calcul
*/

let nb1 = 5, nb2 = "10";
calcul = nb1 + Number(nb2);
console.log(calcul);

/* CORRECTION

calcul = nba + Number(nb2);
*/

/* 5.
	a. déclarez un tableau nommé nbEntiers avec les valeurs 4, 12, 14
    b. affichez la 2ième valeur du tableau
    c. faites la somme des valeurs du tableau (en utilisant les indices)
    d. faites la soustraction des valeurs du tableau (en utilisant une boucle for)
	e. remplacez la 1ère valeur du tableau par 7
    f. soustraire la valeur de la variable 'calcul' à la 2ième valeur du tableau (donc après la 2ième valeur du tableau doit être modifiée)
    g. ajoutez la valeur 5 au tableau
    h. affichez la taille du tableau
*/
//5.a
let nbEntiers = [ 4, 12, 14 ];
//5.b
console.log(nbEntiers[1]);
//5.c
let resultTable = nbEntiers[0] + nbEntiers[1] + nbEntiers[2];
console.log(resultTable);
//5.d
let resultat = nbEntiers[0];
for(let i = 1; i < nbEntiers.length; i++){
	resultat = resultat - nbEntiers[i];
}
console.log(resultat);



//5.d(2) même chose avec des multiplication
nbEntiers = [ 7, 10, -5, 123, -10, 13.5];

let resultat1 = nbEntiers[0];

for(let j = 1; j < nbEntiers.length; j++){
	resultat1 = resultat1 * nbEntiers[j];
}
console.log(resultat1);



//5.e
nbEntiers = [ 4, 12, 14 ];

nbEntiers[0] = 7;

//5.f
nbEntiers[1] -= calcul;

//5.g
nbEntiers.push(5);
console.log(nbEntiers);

//5.h
console.log( nbEntiers.length );

/* 
6. affichez tous les nombres de 5 à 12
*/

/* nbEntiers.splice(1, 1) */