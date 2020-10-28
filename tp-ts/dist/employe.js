"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employe = void 0;
var personne_1 = require("./personne");
var Employe = /** @class */ (function (_super) {
    __extends(Employe, _super);
    function Employe(nom, prenom) {
        if (nom === void 0) { nom = "?"; }
        if (prenom === void 0) { prenom = "?"; }
        var _this = _super.call(this, nom, prenom) || this;
        _this.numero = 0;
        _this.salaire = 0.0;
        return _this;
    }
    return Employe;
}(personne_1.Personne));
exports.Employe = Employe;
