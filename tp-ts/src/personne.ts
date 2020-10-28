class Personne{

    constructor(public nom : string = "?",
                public prenom : string = "?",
                public age : number = 0
               ){}

    incrementerAge():void{
        this.age ++;
    }

}

var p1 = new Personne();
p1.age = 33;
p1.nom = "Bon"; p1.prenom="jean";
var p1AsJsonString  = JSON.stringify(p1);
console.log(p1AsJsonString);

var p2 = new Personne("Therieur" , "alain" , 25);
p2.incrementerAge();
console.log(JSON.stringify(p2));