import { Injectable } from '@angular/core';
import { Produit } from '../modlèle';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
providedIn: 'root'
})
export class ProduitService {
  produit!: Produit;
  produits!: Produit[]; //un tableau de Produit
  apiURL:string = environment.apiURL;

 constructor(private http: HttpClient) {}

  listeProduit(): Observable<Produit[]>{
    return this.http.get<Produit[]>(this.apiURL);
    }

  ajouterProduit( prod: Produit):Observable<Produit>{
    return this.http.post<Produit>(this.apiURL, prod, httpOptions);
  }

  supprimerProduit(id : number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
    }

    consulterProdui(id: number): Observable<Produit> {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<Produit>(url);
    }

    updateProduit(prod :Produit) : Observable<Produit>{
      return this.http.put<Produit>(this.apiURL, prod, httpOptions);
    }


  trierProduits(){
    this.produits = this.produits.sort((n1:any,n2:any) => {
      if (n1.idProduit > n2.idProduit) {
        return 1;
      } if (n1.idProduit < n2.idProduit) {
        return -1;
      }
        return 0;
    });
  }
}
