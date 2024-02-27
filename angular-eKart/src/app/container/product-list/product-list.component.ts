import { Component, Input, inject } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  productService:ProductService = inject(ProductService);

  products:Product[] = this.productService.products;


  selectedProduct:Product;
  filterFeature:string = '';

  @Input()
  searchText:string='';

  // handleLike = (id: number) => {
  //   this.products.map((item)=> {
  //     if(id === item.id) {
  //       item.is_liked = !item.is_liked
  //     }
  //   })
  // }
  
  generateFilter(){
      return this.filterFeature ==='' ? this.products : this.products.filter((product)=>(product.is_in_inventory.toString() === this.filterFeature)
      );
  }
}
