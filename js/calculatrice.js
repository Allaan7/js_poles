let formulaire = document.querySelector("form");
let inputNombre1 = document.getElementsByName("nombre1")[0];
let inputNombre2 = document.querySelector("[name='nombre2']");
let selectOperateur = document.querySelector("[name='operateur']");
let inputResultat = document.querySelector("[name='resultat']");

formulaire.addEventListener("submit", function(eventSubmit){
    /* Le paramètre de l'écouteur d'évènement (nommé ici eventSubmit) est de type Event.
        Cet objet représente l'évènement Submit, avec toutes les informations liées à cet
        évènement.
        La méthode 'preventDefault' permet d'annuler l'action pas défaut qui est déclanchée par
        cet évènement.
        */
       eventSubmit.preventDefault(); // ici, l'action par défaut est la soumission du formulaire
       let nb1 = Number(inputNombre1.value);
       /* la propriété value d'une balise input contient la valeur tapée dans l'input par l'utilisateur
        */
       let nb2 = Number(inputNombre2.value);
       let op = selectOperateur.value;
       console.log(nb1, typeof nb1 ,nb2);

       let calcul = nb1;
       switch (op) {
            case "+":
                calcul += nb2;
                break;

            case "-":
                calcul -= nb2;
                break;

            case "*":
                calcul *= nb2;
                break;

            case "/":
                calcul /= nb2;
                break;
            
            default:
                calcul = NaN;
       }
       
       inputResultat.value = calcul;
})