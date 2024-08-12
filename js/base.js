// alert("js dans le fichier base.js");

/* 
commentaires sur plusieurs lignes
Les commentaires ne sont jamais interprétés.
*/

console.log("affichage dans la console");

document.write("Bonjour Didier, bienvenue au Pole S");

/* VARIABLE : est un espace mémoire qui va permettre de stocker une valeur pour la réutiliser si besoin.
                Cette valeur peut changer, d'où le nom 'variable'. */

//  DECLARATION
let prenom;     // Déclaration d'une variable
var nombre;     // Déclaration avec le mot-clé 'var' 

// let prenom;
var nombre;

// AFFECTATION : donner une valeur à une variable
prenom = "Didier";
nombre = "ceci est du texte parce que le nom de la variable ne change pas sa valeur";

// Déclaration - affection 
let jour = "lundi";

document.write("<h2>Nous sommes le ");
document.write(jour);
document.write("</h2>");

/* EXPRESSION : en programmation, une expression est tout ce qui a une valeur. Donc 
    - une variable est une expression 
    -  5 est une expression 
    -  2 * 3 est une expression (qui vaut 6)

    Une expression a un type. Les langages de programmation ne gère pas les textes et les valeurs numériques
        de la même façon. 
*/

/* TYPES : Les types simples (ou primitifs ou scalaires) sont les suivants : 
    - string : chaîne de caractères (délimité par des "" guillemets ou des '' apostrophes)
    - number : numérique, soit un nombre entier, soit un nombre réél
    - boolean : booléen. C'est un type qui ne peut avoir que 2 valeurs : true (=vrai) et false (=faux)
*/
prenom = "Fred";    // type string
nombre = 5.2;       // type number
let vf = true       // type boolean

/* pour connaître le type d'une expression, on peut utilser l'opérateur typeof */
console.log("prenom", prenom, typeof prenom);
console.log("nombre", nombre, typeof nombre);
console.log("vf", vf, typeof vf);

let nombre2 = "5.2";

document.write("La variable nombre2 est de type ");
document.write(typeof nombre2);
document.write (" et vaut ");
document.write(nombre2);
document.write("<br>");

/* OPERATEURS ARITHMETIQUES */
nombre = 2 + 3;
nombre = 2 - 3;
nombre = 2 * 3;
nombre = 2 / 3;
nombre = 5 % 2;  // reste de la division entière 

console.log(nombre);
nombre = nombre * 3;
console.log(nombre);

/* OPERATEUR DE CONCATENATION : coller un string derrière un autre string 
    opérateur : +
*/

prenom = "Di" + "dier";
console.log(prenom);

document.write("Bonjour " + prenom + ", bienvenue au Pole S<br>");

console.log(nombre - prenom);

/* Si vous faites un calcul qui ne peut pas donner une résultat numérique (ex: 2 - "Bonjour"), le résutat est de type numérique,
    NaN = Not A Number
*/

nombre = 5;

nombre2 = nombre - "2";

console.log("nombre2", typeof nombre2, nombre2);

prenom = "100";

nombre2 = prenom * nombre;
console.log(nombre2, nombre);

nombre2 = prenom + nombre;
console.log(nombre2);

nombre2 = parseInt(prenom) + nombre;
console.log("nombre2 après parseInt", nombre2);

//
prenom = "100,5";
nombre2 = prenom + nombre;
console.log("1.nombre2", nombre2);

prenom = "100.5";
nombre2 = prenom + nombre;
console.log("2.nombre2", nombre2);

prenom = "100.5";
nombre2 = prenom - nombre;
console.log("3.nombre2", nombre2);

/*
NOMMAGE DES VARIABLES 
    • on peut utiliser n'importe quelle lettre, chiffre et les caractères _ et $
    • le nom d'une variable ne peut pas commencer par un chiffre
    • js est sensible à la casse (=case sensitive) : différence entre MAJUSCULES et minusucles

    CONVENTION (accord entre développeurs pour le nommage des variables, ce ne sont pas des règles, donc pas obligatoires )
        - casse camelCase : nombreDeVoitures
        - casse snake_case : nombre_de_voiture
        
        - casse PascalCase : NombreDeVoiture

        - casse kebab-case : nombre-de-voiture

*/

let a;
let A;

/* LES CONSTANTES */
/* une constante, contrairement à une variable ne change pas de valeurs. 
    Pour la déclaration, on utilise le mot-clé 'const'.
    Les règles de nommage sont les mêmes que pour les variables.
    
    Par convention, dans la plupart des languages de programmation, le nom
    des constantes est tout en MAJUSCULES (mais ce n'est pas toujours le cas pour js).
    */

const JOUR = "lundi";

document.write("Aujourd'hui nous sommes le " + JOUR + "12 aout");
// JOUR = "quelque chose"; (interdit)

/* constante JS : undefined, NaN
                    Math.PI
*/
const tableauConst = [ 2, 5, 9 ];
// tableauConst = "autre chose"; (interdit)
tableauConst.push(789);
console.log(tableauConst);

tableauConst[1] = "nouvelle valeur";






