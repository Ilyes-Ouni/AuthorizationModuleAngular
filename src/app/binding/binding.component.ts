import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  titre: string = "Apprendre le Databiding dans Angular 14"
  status: boolean =true;
  nom: string = "Nadhem Bel Hadj"
  constructor() { }

  ngOnInit(): void {
  }

  changerTitre(){
    this.titre = "Mon nouveau titre";
  }
}
