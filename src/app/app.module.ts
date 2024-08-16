import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { HomeComponent } from './home/home.component';
import { ClientProductComponent } from './client-product/client-product.component';
import { ClientPromotionComponent } from './client-promotion/client-promotion.component';
import { ClientNouveauComponent } from './client-nouveau/client-nouveau.component';
import { ClientContactComponent } from './client-contact/client-contact.component';
import { ClientProductInfoComponent } from './client-product-info/client-product-info.component';
import { Nl2brPipe } from './services/nl2br.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LoginComponent,
    AdminTemplateComponent,
    NewProductComponent,
    EditProductComponent,
    HomeComponent,
    ClientProductComponent,
    ClientPromotionComponent,
    ClientNouveauComponent,
    ClientContactComponent,
    ClientProductInfoComponent,
    Nl2brPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
