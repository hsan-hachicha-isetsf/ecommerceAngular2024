import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../products';
@Component({
  selector: 'app-articlescard',
  templateUrl: './articlescard.component.html',
  styleUrls: ['./articlescard.component.css']
})
export class ArticlescardComponent {
  productsList: Products[] = [];
  constructor(private productsServ: ProductsService) { }
  ngOnInit() {
   this.loadproducts()

    
  }
  loadproducts(){
    this.productsServ.getAllProduct().subscribe((data: Products[]) => {
      
      this.productsList = data;
    });
  }
}
