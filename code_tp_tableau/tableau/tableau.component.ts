import { Component, OnInit } from '@angular/core';
import { Devise } from '../common/data/devise';
import { DeviseService } from '../common/service/devise.service';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent implements OnInit {

  listeDevises : Devise[];

  constructor(private _deviseService : DeviseService) { }

  ngOnInit(): void {
    this._deviseService.recupererDevises()
        .subscribe(
          (devises : Devise[])=>{ this.listeDevises = devises;} ,
          (err )=>{ console.log("error:"+err)}
        );
  }

}
