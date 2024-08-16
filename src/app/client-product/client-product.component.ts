import {Component, OnInit} from '@angular/core';
import {PageProduct, Product} from "../model/product.model";
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-client-product',
  templateUrl: './client-product.component.html',
  styleUrls: ['./client-product.component.css']
})
export class ClientProductComponent implements OnInit {
  products: Product[] = [];
  displayedProducts: Product[] = [];
  currentPage = 1;
  itemsPerPage = 12;
  totalPages = 1;
  pages: number[] = [];

  constructor(private productService: ProductService, private router:Router) {}

  ngOnInit() {
    this.loadProducts(this.currentPage, this.itemsPerPage);
  }

  loadProducts(page: number, size: number) {
    this.productService.getPageProducts(page - 1, size).subscribe((pageData: PageProduct) => {
      this.products = pageData.product;
      this.totalPages = pageData.totalPage;
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      this.updateDisplayedProducts();
    });
  }

  updateDisplayedProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    this.displayedProducts = this.products.slice(startIndex, startIndex + this.itemsPerPage);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadProducts(page, this.itemsPerPage);
    }
  }
  filterProductsByNameEvent(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const name = inputElement.value;
    this.filterProductsByName(name);
  }

  filterProductsByPriceUpEvent(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const price = Number(inputElement.value);
    this.filterProductsByPriceUp(price);
  }
  filterProductsByPriceDownEvent(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const price = Number(inputElement.value);
    this.filterProductsByPriceDown(price);
  }
  filterProductsByPromotionEvent(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const isChecked = inputElement.checked;
    this.filterProductsByPromotion(isChecked);
  }


  filterProductsByName(name: string) {
    this.productService.searchProducts(name, this.currentPage - 1, this.itemsPerPage).subscribe((pageData: PageProduct) => {
      this.products = pageData.product;
      this.totalPages = pageData.totalPage;
      this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
      this.updateDisplayedProducts();
    });
  }

  filterProductsByPriceUp(maxPrice: number) {
    const filteredProducts = this.products.filter(product => product.price <= maxPrice);
    this.displayedProducts = filteredProducts.slice(0, this.itemsPerPage);
  }
  filterProductsByPriceDown(maxPrice: number) {
    const filteredProducts = this.products.filter(product => product.price >= maxPrice);
    this.displayedProducts = filteredProducts.slice(0, this.itemsPerPage);
  }

  filterProductsByPromotion(promotion: boolean) {
    const filteredProducts = this.products.filter(product => product.promotion === promotion);
    this.displayedProducts = filteredProducts.slice(0, this.itemsPerPage);
  }

  filterProductsByCategoryEvent(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedCategory = selectElement.value;
    this.filterProductsByCategory(selectedCategory);
  }

  filterProductsByCategory(category: string): void {
    if (category) {
      this.displayedProducts = this.products.filter(product => product.category === category);
    } else {
      this.displayedProducts = this.products.slice(0, this.itemsPerPage);
    }
  }

  viewProductDetails(id: string) {
   this.router.navigateByUrl('/connect/product/infos/'+id)
  }

  resetFilters(): void {
    // Réinitialiser les valeurs des champs de filtre
    (document.getElementById('filterName') as HTMLInputElement).value = '';
    (document.getElementById('filterPrice1') as HTMLInputElement).value = '';
    (document.getElementById('filterPrice2') as HTMLInputElement).value = '';
    (document.getElementById('filterPromotion') as HTMLInputElement).checked = false;
    (document.getElementById('filterCategory') as HTMLSelectElement).value = '';

    // Réinitialiser les filtres appliqués
    this.displayedProducts = this.products.slice(0, this.itemsPerPage);
    this.currentPage = 1;
  }

}
