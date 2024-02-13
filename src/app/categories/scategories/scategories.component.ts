import { Component } from '@angular/core';
import { Scategorie } from '../scategorie';
import { SCategoriesService } from '../s-categories.service';

@Component({
  selector: 'app-scategories',
  templateUrl: './scategories.component.html',
  styleUrls: ['./scategories.component.css']
})
export class ScategoriesComponent {

  listScategories: Scategorie[] = [];

  constructor(private scatService:SCategoriesService){}

  ngOnInit() {
    
this.getAllSCategories()
   
  }

  getAllSCategories() {
    this.scatService.getAllSCategories().subscribe((data: Scategorie[]) => {
      this.listScategories = data;
    })
  }


  deleteSCategorie(id:any) {
    this.scatService.deleteSCategorie(id).subscribe((data:any) => {
      console.log(data.message)
      this.listScategories = this.listScategories.filter(sCate => sCate._id != id);
      // alert(` Supprimer Sous-Categorie avec succe`)
    })
  }

}
