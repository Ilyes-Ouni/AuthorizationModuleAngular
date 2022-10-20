import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../modlèle';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits: any;

  constructor(private produitService: ProduitService, private router: Router) {}

    ngOnInit(): void {
      this.produitService.listeProduit()
      .subscribe(prods => {
        console.log(prods);
        this.produits = prods;
      });
    }

    supprimerProduit(p: any)
    {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
    console.log("produit supprimé");
    this.SuprimerProduitDuTableau(p);
    });
    }

    SuprimerProduitDuTableau(prod : Produit) {
      this.produits.forEach((cur: { idProduit: number | undefined; }, index: any) => {
        if(prod.idProduit=== cur.idProduit) {
        this.produits.splice(index, 1);
        }
      });
    }

}


