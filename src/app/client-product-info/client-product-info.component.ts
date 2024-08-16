import {Component, OnInit} from '@angular/core';
import {Product} from "../model/product.model";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../services/product.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-client-product-info',
  templateUrl: './client-product-info.component.html',
  styleUrls: ['./client-product-info.component.css']
})
export class ClientProductInfoComponent implements OnInit{
  productId! : string;
  product! : Product;
  selectedColor: string = '';

  constructor(private route : ActivatedRoute, public prodService : ProductService, private router :Router) {
    this.productId=this.route.snapshot.params['id'];
  }
    ngOnInit(): void {
      this.prodService.getProduct(this.productId).subscribe({
        next:(product)=>{
          this.product=product;
        },
        error : (err)=>{
          console.log(err);
        }
      })
    }

  selectColor(color: string) {
    this.selectedColor = color;
    console.log(`Couleur sélectionnée : ${color}`);
  }

}
