import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../modlèle';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {
  currentProduit = new Produit();

constructor(private activatedRoute: ActivatedRoute, private produitService: ProduitService, private router :Router) { }

  ngOnInit() {
    this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']).
    subscribe( prod =>{
      this.currentProduit = prod;
    }) ;
  }

  updateProduit() {
    this.produitService.updateProduit(this.currentProduit)
    .subscribe((prod:any) => {
      this.router.navigate(['produits']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
  }

}
