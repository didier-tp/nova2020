var calcul = require("./calcul");
console.log("hello world");

var a=25;
var aa='25';
console.log("25 au carre = " + calcul.auCarre(a));
//console.log("25 au carre = " + calcul.multiplication(a,a)); impossible car multiplication pas exportée

if(a==aa)
  console.log("a et aa sont de valeurs identiques")

if(a===aa)
  console.log("a et aa sont identiques et de meme type")

var tab1 = [];
//tab1[0]="lundi";
//tab1[1]="mardi" ;
tab1.push("lundi");
tab1.push("mardi");
for(let i=0;i<tab1.length;i++){
    console.log("#" + tab1[i]);
}

for(let indice in tab1){
    console.log("*" + tab1[indice]);
}
//let et of sont apparus depuis la version es2015
for(let val of tab1){
    console.log(val.toUpperCase());
}

var mapSaisons = [];
mapSaisons["hiver"] = "winter";
mapSaisons["printemps"]= "spring";
for(let idx in mapSaisons){
    console.log(idx +  " - " + mapSaisons[idx]);
}

//objet javascript literal
var prod  = {
   ref : "p1",
   label : "stylo",
   prix : 1.34
}

var prodAsJsonString = JSON.stringify(prod);
console.log(prodAsJsonString);

var prodBis = JSON.parse(prodAsJsonString);

//console.log(prod);
//console.log(prod +  " " + typeof prod);