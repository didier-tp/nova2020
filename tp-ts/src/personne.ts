export class Personne{

    constructor(public nom : string = "?",
                public prenom : string = "?",
                public age : number = 0
               ){}

    incrementerAge():void{
        this.age ++;
    }

}



