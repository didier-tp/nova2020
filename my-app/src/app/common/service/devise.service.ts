import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {

  private _devises = [
     new Devise('EUR','Euro',1.0),
     new Devise('USD','Dollar',1.1),
     new Devise('GBP','Livre',0.9),
     new Devise('JPY','Yen',123.0)
  ];

  public recupererDevise() : Devise[] {
    return this._devises;
  }

  public convertirDevise(montant:number,
                        codeDeviseSource : string,
                        codeDeviseCible : string):number{
    return montant * 2; //pré-version (simulation grossière)
  }

  constructor() { }
}
