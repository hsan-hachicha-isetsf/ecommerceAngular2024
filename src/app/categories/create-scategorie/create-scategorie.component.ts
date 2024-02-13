import { Component } from '@angular/core';
import { Scategorie } from '../scategorie';
import { SCategoriesService } from '../s-categories.service';

@Component({
  selector: 'app-create-scategorie',
  templateUrl: './create-scategorie.component.html',
  styleUrls: ['./create-scategorie.component.css']
})
export class CreateScategorieComponent {


  sCategorie: Scategorie = new Scategorie();

  constructor(private scatServ: SCategoriesService) { }
  

  ajouterSCategorie() {
    this.scatServ.createSCategorie(this.sCategorie).subscribe((data) => {
      this.scatServ.getAllSCategories()
      alert(`ajouter sous-categorie ${this.sCategorie.nomscategorie} avec succe`)
    })
  }

  

}
