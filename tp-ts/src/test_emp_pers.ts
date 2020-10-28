import { Employe } from "./employe";
import {  Personne } from "./personne";


var e1 = new Employe('toto' , "jean");
e1.salaire = 2000;
console.log(JSON.stringify(e1));

var p1 = new Personne();
p1.age = 33;
p1.nom = "Bon"; //p1.prenom="jean";
var p1AsJsonString  = JSON.stringify(p1);
console.log(p1AsJsonString);

var p2 = new Personne("Therieur" , "alain" , 25);
p2.incrementerAge();
console.log(JSON.stringify(p2));