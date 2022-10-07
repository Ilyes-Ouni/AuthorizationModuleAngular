import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './produits/produits.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AddProduitComponent } from './add-produit/add-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    FormulaireComponent,
    AddProduitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
