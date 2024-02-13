import { Component , OnInit } from '@angular/core';

import { ProductsService } from '../products.service';
import { Products } from '../products';

import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit{



  _id: object;
  product: Products = new Products();


  constructor(private prodServe:ProductsService , private router:Router , private route:ActivatedRoute) {
    
  }



  ngOnInit(): void {

    this._id = this.route.snapshot.params['id'];

    this.prodServe.getProductById(this._id).subscribe(data=> this.product = data);
  
  }

  enregistrer() {
    this.prodServe.updateProduct(this._id, this.product).subscribe((data:any) => {
      alert(data.message)
      this.router.navigate(['/products/listarticlestable'])
    })
  }

}
