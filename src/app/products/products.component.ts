import {Component, OnInit} from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products! : Array<Product>;
  currentPage : number=0;
  pageSize : number=8;
  totalPage: number=0;
  errorMessage! :string;
  searchFormGroup! :FormGroup;
  currentAction : string="all";


  constructor(private productService :ProductService, private fb: FormBuilder,
              public authService : AuthenticationService, private router : Router) {}

  ngOnInit(): void{
    this.searchFormGroup=this.fb.group({
      keyword: this.fb.control(null)
    });
    this.handleGetPageProducts();
  }
  handleGetPageProducts(){
    this.productService.getPageProducts(this.currentPage, this.pageSize).subscribe({
      next:(data)=>{
        this.products=data.product;
        this.totalPage=data.totalPage;
      },
      error:(err)=>{
        this.errorMessage=err;

      }
    });
  /*handleGetAllProducts(){
    this.productService.getAllProducts().subscribe({
      next:(data)=>{
        this.products=data;
      },
      error:(err)=>{
        this.errorMessage=err;

      }
    });*/
}
  handleDeleteProduct(p: Product) {

    let conf=confirm("voulez-vous vraiment supprimer ce produit");
    if (conf==false) return;
    this.productService.deleteProduct(p.id).subscribe({
      next : (data)=>{
        let index=this.products.indexOf(p);
        this.products.splice(index, 1);}
    })
  }


  handeleSearchProducts() {
    this.currentAction="search";
    //this.currentPage=0;
    let keyword=this.searchFormGroup.value.keyword;
    this.productService.searchProducts(keyword, this.currentPage, this.pageSize).subscribe({
      next :(data)=>{
        this.products=data.product;
        this.totalPage=data.totalPage;
    }
    })

  }


  gotoPage(i: number) {
    this.currentPage=i;
    if (this.currentAction=="all")
       this.handleGetPageProducts();
    else
      this.handeleSearchProducts();
  }


  handleEditProduct(p: Product) {
    this.router.navigateByUrl("/admin/editProduct/" + p.id);
  }
}


