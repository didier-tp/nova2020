import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
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

  public recupererDevises() : Observable< Devise[] > {
    return of(this._devises);
  }

  public convertirDevise(montant :number,
                        codeDeviseSource : string,
                        codeDeviseCible : string): Observable<number>{                       
    return of(montant * 2) //pré-version (simulation grossière)
            .pipe(
              delay(200) //simuler une attente de 200ms 
            );
  }

  constructor() { }
}
