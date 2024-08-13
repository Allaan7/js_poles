// Ecouteur d'évènement :  Différence entre les fonctions et les fonctions fléchées
/* 
    • avec une fonction standard, le mot-clé this représente l'objet qui a déclenché l'évènement.
    
	• avec une fonction fléchée, le mot-clé this représente l'objet Window.
    	Pour récupérer l'objet qui a déclenché l'évènement, on utlise
        	event.target
	
*/
let h1 = document.querySelector("h1");
h1.addEventListener("mouseover", function(event) {
    console.log("événement mouseover function", this);
    this.style.color = "red";
})
h1.addEventListener("mouseover", (event) => {
    console.log("événement mouseover fonction fléchée", this)
    console.log("événement mouseover fonction fléchée", event, event.target)
})


let livresJSON = `[
    {"id":1, "titre":"1984", "auteur":"George Orwell"},
    {"id":2, "titre":"Odysée", "auteur":"Homère"},
    {"id":4, "titre":"Akira", "auteur":"Katsuhiro Otomo"},
    {"id":5, "titre":"Fondation", "auteur":"Isaac Asimov"},
    {"id":6, "titre":"Dune", "auteur":"Frank Herbert"},
    {"id":7, "titre":"I, robot", "auteur":"Isaac Asimov"},
    {"id":8, "titre":"Les enfants de Dune", "auteur":"Frank Herbert"},
    {"id":9, "titre":"Le meutre de Roger Acroyd", "auteur":"Agatha Christie"},
    {"id":10, "titre":"Le Seigneur des Anneaux", "auteur":"J.R.R. Tolkien"},
    {"id":11, "titre":"La ferme des animaux", "auteur":"George Orwell"},
    {"id":12, "titre":"Fondation et Empire", "auteur":"Isaac Asimov"}
]`;

console.log(livresJSON);
let livres = JSON.parse(livresJSON);  /* JSON.parse : transforme un string format JSON en variables javascript */
console.log(livres); /* cette ligne juste mis pour qu'on puisse visiualiser js  */
function actualiserListeLivres() {
    let elementTbody = document.querySelector("tbody");
    for(const book of livres) {
        let ligne = "<tr>";
        ligne += "<td>" + book.id + "</td>";
        ligne += "<td>" + book.titre + "</td>";
        ligne += "<td>" + book.auteur + "</td>";
        ligne += "<td><a id='livre" + book.id + "' class='btSupp btn btn-danger'><i class='fa fa-trash'></i> </a></td>";
        ligne += "</tr>";
        elementTbody.innerHTML += ligne;
    }

    let boutonsSuppresion = document.querySelectorAll(".btSupp");
    for (const bouton of boutonsSuppresion) {
        bouton.addEventListener("click", function(evt) {
            console.log(this, this.id, this.className, this.classList);
            let idLivreASupprimer;
            idLivreASupprimer = this.id.replace("livre", "");  
            // this.id = "livre10"   =>  idLivreASupprimer = "10"
            for(let i = 0; i < livres.length; i++) {
                if( idLivreASupprimer == livres[i].id) {
                    livres.splice(i, 1);
                    break;
                }
            }
            console.log("après", livres, elementTbody);
            elementTbody.innerHTML = "";
            for(const book of livres) {
                let ligne = "<tr>";
                ligne += "<td>" + book.id + "</td>";
                ligne += "<td>" + book.titre + "</td>";
                ligne += "<td>" + book.auteur + "</td>";
                ligne += "<td><a id='livre" + book.id + "' class='btSupp btn btn-danger'><i class='fa fa-trash'></i> </a></td>";
                ligne += "</tr>";
                elementTbody.innerHTML += ligne;
            }
        })
    }
}

actualiserListeLivres();