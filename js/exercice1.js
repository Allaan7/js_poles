let nb1 = prompt("Veuillez taper le premier nombre: ");
let nb2 = prompt("Veuillez taper le deuxième nombre: ");
let result = nb1 - nb2;

// if(result) {
//     document.write(nb1 + "-" + nb2 + "=" + result + "<br>");
// } else {
//     alert("Veuillez taper 2 nombres, svp !");
// }

if( isNaN(result)) {
    alert("Veuillez taper 2 nombres, svp !");
} else {
    document.write(nb1 + "-" + nb2 + "=" + result + "<br>");
}
