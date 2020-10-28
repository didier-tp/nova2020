"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
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
exports.Personne = Personne;
