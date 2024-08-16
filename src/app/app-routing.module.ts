import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {NewProductComponent} from "./new-product/new-product.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {HomeComponent} from "./home/home.component";
import {ClientProductComponent} from "./client-product/client-product.component";
import {ClientPromotionComponent} from "./client-promotion/client-promotion.component";
import {ClientNouveauComponent} from "./client-nouveau/client-nouveau.component";
import {ClientContactComponent} from "./client-contact/client-contact.component";
import {ProductsComponent} from "./products/products.component";
import {ClientProductInfoComponent} from "./client-product-info/client-product-info.component";


const routes: Routes = [
  {path : "login", component :LoginComponent },
  {path : "", component :LoginComponent },
  {path : "home", component :ClientProductComponent },
  {path : "connect", component :AdminTemplateComponent , canActivate : [AuthenticationGuard],
    children : [
      {path : "home", component :HomeComponent},
      {path : "products", component :ClientProductComponent },
      {path : "promotions", component :ClientPromotionComponent },
      {path : "nouveau", component :ClientNouveauComponent },
      {path : "contact", component :ClientContactComponent },
      {path : "product/infos/:id", component :ClientProductInfoComponent },
    ]},
  {path : "admin", component :AdminTemplateComponent , canActivate : [AuthenticationGuard],
    children : [
      {path : "product", component :ProductsComponent },
      {path : "newProduct", component :NewProductComponent },
      {path : "editProduct/:id", component :EditProductComponent },
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
