import { Component, OnInit } from '@angular/core';
import { DeviseService} from '../common/service/devise.service'
import { Devise} from '../common/data/devise'

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {

  montant : number ;
  codeDeviseSource : string ;
  codeDeviseCible : string ;
  montantConverti : number ;

  listeDevises : Devise[];

  onConvertir(){

  }

  constructor(private _deviseService : DeviseService) { }

  ngOnInit(): void {
  }

}
