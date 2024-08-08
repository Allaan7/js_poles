function ecrire(texte) {
    document.write(texte + "<br>");
}
// ----------------------
var var1 = "test";
let var2 = "test 2";


function fonctionA(arg1) {
    var1 = 123456;
    var2 = 546;
    ecrire("fonctionA var1 " + var1);
    ecrire("fonctionA var2 " + var2);
}
function fonctionB() {
    var var1 = "B";
    let var2 = "C";
    var var3 = "D";
    ecrire("fonctionB var1 " + var1);
    ecrire("fonctionB var2 " + var2);
}

fonctionA("peu importe");
ecrire("var1 " + var1);
ecrire("var2 " + var2);
fonctionB();
ecrire("var1 " + var1);
ecrire("var2 " + var2);

ecrire(voiture);

var voiture = "Tesla";
