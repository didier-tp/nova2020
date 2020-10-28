"use strict";
var Personne = /** @class */ (function () {
    function Personne(nom, prenom, age) {
        if (nom === void 0) { nom = "?"; }
        if (prenom === void 0) { prenom = "?"; }
        if (age === void 0) { age = 0; }
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    Personne.prototype.incrementerAge = function () {
        this.age++;
    };
    return Personne;
}());
var p1 = new Personne();
p1.age = 33;
p1.nom = "Bon";
p1.prenom = "jean";
var p1AsJsonString = JSON.stringify(p1);
console.log(p1AsJsonString);
var p2 = new Personne("Therieur", "alain", 25);
p2.incrementerAge();
console.log(JSON.stringify(p2));
