import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    selectedProduct: Product;
    productId:number;

    productService: ProductService = inject(ProductService);
    activeRoute: ActivatedRoute = inject(ActivatedRoute);

    ngOnInit(){

      this.productId = +this.activeRoute.snapshot.paramMap.get('id');
      this.selectedProduct = this.productService.products.find((prod)=> prod.id === this.productId );

    }
}
