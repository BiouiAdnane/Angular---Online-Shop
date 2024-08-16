import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit{
  productFormGroup! : FormGroup;
  constructor(private fb : FormBuilder, public prodService : ProductService , private router :Router) {
  }

  ngOnInit() {
    this.productFormGroup=this.fb.group({
      name : this.fb.control(null, [Validators.required, Validators.minLength(3)]),
      description : this.fb.control(null, [Validators.required, Validators.minLength(3)]),
      price : this.fb.control(null, [Validators.required]),
      category : this.fb.control(null, [Validators.required]),
      promotion : this.fb.control(null),
    })
  }

  handleAddProduct() {
    let product= this.productFormGroup.value;
    this.prodService.addNewProduct(product).subscribe({
      next : (data)=>{
          alert("Product added successfully");
          this.productFormGroup.reset();
          this.router.navigateByUrl("admin/product")
      }, error : err => {
        console.log(err);

      }
    })
  }


}
