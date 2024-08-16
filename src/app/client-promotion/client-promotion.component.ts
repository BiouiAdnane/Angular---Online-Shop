import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product.model";
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-client-promotion',
  templateUrl: './client-promotion.component.html',
  styleUrls: ['./client-promotion.component.css']
})
export class ClientPromotionComponent implements OnInit {
  electronicProducts: Product[] = [];
  furnitureProducts: Product[] = [];
  toysProducts: Product[] = [];

  constructor(private productService: ProductService, private router:Router) {}

  ngOnInit() {
    this.loadPromotions();
  }

  loadPromotions() {
    this.productService.getAllProducts().subscribe(products => {
      this.electronicProducts = products.filter(product => product.promotion && product.category === 'Électronique');
      this.furnitureProducts = products.filter(product => product.promotion && product.category === 'Meubles');
      this.toysProducts = products.filter(product => product.promotion && product.category === 'Jouets');
    });
  }

  viewProductDetails(product: Product) {
    this.router.navigateByUrl('/connect/product/infos/'+product.id)
  }
}
