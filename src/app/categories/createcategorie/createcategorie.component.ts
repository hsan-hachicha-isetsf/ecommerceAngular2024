import { Component } from '@angular/core';
import { Categorie } from '../categorie';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-createcategorie',
  templateUrl: './createcategorie.component.html',
  styleUrls: ['./createcategorie.component.css']
})
export class CreatecategorieComponent {


  categorie: Categorie = new Categorie();


  constructor(private categorieSev:CategoriesService){}



  ajouterCategorie() {
    this.categorieSev.createCategorie(this.categorie).subscribe((data) => {
      alert(`ajouter categorie ${this.categorie.nomcategorie} avec succee`)
    })
  }

}
