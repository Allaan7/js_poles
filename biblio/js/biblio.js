let livres = [];  // let livres = new Array();

livres.push([ 101, 'Bel Ami', 'Guy de Maupassant' ]);
livres.push([ 104, 'Le Comte de Monte Christo', 'Alexandre Dumas' ]);
livres.push([ 105, 'Les Trois Mousquetaires', 'Alexandre Dumas' ]);
livres.push([ 106, 'I, robot', 'Richard Matheson' ]);

console.log(livres);

// EXO : affichez dans la console, l'auteur du 2ième livre
console.log("livres[1]", livres[1]);
console.log("livres[1][2]", livres[1][2]);

// EXO : écire dans la balise tbody "<tr><td>1</td><td>apprendre le js</td><td>Nordine Ateur</td></tr>"

let elementTbody = document.querySelector("tbody");

function actualiserListeLivres() {
    elementTbody.innerHTML = "";
    for(let i = 0; i < livres.length; i++) {
        console.log(livres[i][0], livres[i][1], livres[i][2]);
        let ligne = "<tr>";
        ligne += "<td>" + livres[i][0] + "</td>";
        ligne += "<td>" + livres[i][1] + "</td>";
        ligne += "<td>" + livres[i][2] + "</td>";
        // ligne += "<td> <a id='livre" + livres[i][0] + "' class='btn btn-danger' onclick='supprimerLivre(" + livres[i][0] + ")'><i class='fa fa-trash'></i> </a></td>";
        ligne += "</tr>";
        elementTbody.innerHTML += ligne;
    }
}

/* j'appelle la fonction qui met a jour l'affichage des livres */
actualiserListeLivres();


// elementTbody = document.getElementsByTagName("tbody")[0];

// elementTbody.innerHTML = "<tr><td>1</td><td>apprendre le js</td><td>Nordine Ateur</td></tr>";
// elementTbody.innerHTML += "<tr><td>2</td><td>un livre</td><td>Anne Onyme</td></tr>";

// EXO : remplir la table HTML avec les données de la variable "livres"

// on récupère l'élément FORM
let formulaire = document.querySelector("#frmLivre");

// j'ajoute un écouteur d'évènement sur le formulaire, pour l'évènement "submit"
formulaire.addEventListener("submit", function(event){
    // je bloque la soumission du formulaire avec la variable event qui représente l'évènement 'submit'
    event.preventDefault();
    let inputTitre = document.querySelector("#titre");
    let inputId = document.querySelector("#id");
    let inputAuteur = document.querySelector("#auteur");

    let idTape = Number(inputId.value);
    let livre = [ Number(inputId.value), inputTitre.value, inputAuteur.value ];

    let livreDejaPresent = -1;
    for(let i = 0; i < livres.length; i++) {
        if( idTape == livres[i][0] ) {
            livreDejaPresent = i;
            break; // permet de sortir d'une boucle
        }
    }
    if (livreDejaPresent >= 0 ) {
        livres[livreDejaPresent] = livre;
    } else {
        livres.push(livre);
    }

    // afficher les livres dans la table HTML
    actualiserListeLivres();

    // je vide les valeurs des inputs
    inputId.value = "";
    inputTitre.value = "";
    inputAuteur.value = "";
});


function supprimerLivre(idASupprimer) {
    for(let i = 0; i < livres.length; i++) {
        if( idASupprimer == livres[i][0] ) {
            livres.splice(i, 1);  // supprime 1 valeur du tableau à partir de l'indice i
            break;
        }
    }
    actualiserListeLivres();
}
