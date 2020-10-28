import { Personne } from "./personne";

export class Employe extends Personne{
    numero : number = 0;
    salaire : number = 0.0; 
    constructor(nom : string = "?",
                prenom : string = "?"){
                    super(nom,prenom)
                }
                
}
