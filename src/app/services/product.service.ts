import { Injectable } from '@angular/core';
import {Observable, of, throwError} from "rxjs";
import {PageProduct, Product} from "../model/product.model";
import {UUID} from "angular2-uuid";
import {ValidationErrors} from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products! : Array<Product>
  constructor() {
    this.products = [
      {id: UUID.UUID(), name: "computer", description: "Ordinateur de bureau haute performance avec processeur Intel i7, 16 Go de RAM et 512 Go de SSD. Parfait pour les jeux et les tâches intensives.", price: 700, promotion: false, category: "Électronique"},
      {id: UUID.UUID(), name: "armoire", description: "Armoire spacieuse en bois massif avec miroir intégré et plusieurs étagères pour un rangement optimal. Idéale pour une chambre moderne.", price: 1200, promotion: false, category: "Meubles"},
      {id: UUID.UUID(), name: "canape", description: "Armoire spacieuse en bois massif avec miroir intégré et plusieurs étagères pour un rangement optimal. Idéale pour une chambre moderne.", price: 1500, promotion: true, category: "Meubles"},
      {id: UUID.UUID(), name: "miroire", description: "Armoire spacieuse en bois massif avec miroir intégré et plusieurs étagères pour un rangement optimal. Idéale pour une chambre moderne.", price: 200, promotion: true, category: "Meubles"},
      {id: UUID.UUID(), name: "phone", description: "Smartphone dernière génération avec écran AMOLED, caméra 108 MP, 256 Go de stockage et batterie longue durée. Design élégant et fonctionnalités avancées.", price: 450, promotion: false, category: "Électronique"},
      {id: UUID.UUID(), name: "velo", description: "Vélo tout terrain avec cadre en aluminium, 21 vitesses et freins à disque. Conçu pour les aventures en plein air et les trajets quotidiens.", price: 300, promotion: false, category: "Sport"},
      {id: UUID.UUID(), name: "laptop", description: "Laptop ultrafin avec écran 4K, processeur AMD Ryzen, 32 Go de RAM et 1 To de SSD. Parfait pour les professionnels en déplacement.", price: 1500, promotion: true, category: "Électronique"},
      {id: UUID.UUID(), name: "imprimante", description: "Imprimante multifonction avec scanner, photocopieur et impression sans fil. Compatible avec tous les appareils mobiles et ordinateurs.", price: 1700, promotion: false, category: "Électronique"},
      {id: UUID.UUID(), name: "jouet", description: "<h3>Un jouet éducatif et divertissant pour les jeunes créateurs</h3> \n" +
          "Ce kit de construction de voiture est le cadeau idéal pour les enfants âgés de 6 à 13 ans qui adorent construire et explorer. Avec plus de 500 pièces modulaires, ce jouet offre des possibilités infinies de création et de personnalisation, permettant aux enfants de concevoir leur propre voiture unique.\n" +
          "\n" +
          "<h5>Caractéristiques principales :\n </h5>" +
          "\n" +
          "<strong>- Plus de 500 pièces de haute qualité :</strong> Chaque élément du kit est conçu pour s’assembler facilement, offrant une expérience de construction fluide et amusante.\n" +
          "<strong>- Conception modulaire :</strong> Les enfants peuvent expérimenter différents designs en intervertissant les pièces pour créer des voitures de toutes formes et tailles.\n" +
          "<strong>- Fonctionnalités interactives :</strong> La voiture construite peut être poussée manuellement ou propulsée par un moteur à ressort inclus, avec des phares qui s’allument pour un effet réaliste.\n" +
          "<strong>- Apprentissage par le jeu :</strong> Ce jouet stimule la coordination, la logique et la pensée critique tout en offrant des heures de plaisir créatif.\n" +
          "<strong>- Matériaux sûrs et durables :</strong> Fabriqué à partir de matériaux non toxiques et résistants, ce kit est conçu pour durer et garantir la sécurité des enfants.", price: 500, promotion: true, category: "Jouets"},
      {id: UUID.UUID(), name: "computer", description: "PC gamer avec carte graphique NVIDIA RTX, 32 Go de RAM et refroidissement liquide. Conçu pour des performances maximales dans les jeux AAA.", price: 950, promotion: true, category: "Électronique"},
      {id: UUID.UUID(), name: "armoire", description: "Armoire en métal industriel avec finition mate et tiroirs spacieux. Parfaite pour une décoration moderne et fonctionnelle.", price: 1100, promotion: false, category: "Meubles"},
      {id: UUID.UUID(), name: "phone", description: "Téléphone pliable avec double écran, 512 Go de stockage et charge rapide. L'innovation ultime pour les amateurs de technologie.", price: 850, promotion: false, category: "Électronique"},
      {id: UUID.UUID(), name: "velo", description: "Vélo de course en carbone avec transmission Shimano, conçu pour les compétitions et les cyclistes exigeants.", price: 1200, promotion: true, category: "Sport"},
      {id: UUID.UUID(), name: "laptop", description: "Laptop pour étudiants avec écran Full HD, processeur Intel i5 et 8 Go de RAM. Léger, portable et abordable.", price: 550, promotion: false, category: "Électronique"},
      {id: UUID.UUID(), name: "imprimante", description: "Imprimante laser couleur avec connectivité Wi-Fi et impression recto-verso automatique. Idéale pour les bureaux et les particuliers.", price: 300, promotion: false, category: "Électronique"},
      {id: UUID.UUID(), name: "jouet", description: "Peluches interactives avec capteurs tactiles et sons réalistes, parfaites pour les câlins et les jeux imaginatifs.", price: 300, promotion: false, category: "Jouets"},
      {id: UUID.UUID(), name: "computer", description: "Station de travail avec processeur Intel Xeon, 64 Go de RAM, et carte graphique Quadro. Conçue pour le rendu 3D et les simulations complexes.", price: 1800, promotion: false, category: "Électronique"},
      {id: UUID.UUID(), name: "armoire", description: "Armoire minimaliste en verre et acier inoxydable, avec éclairage LED intégré. Un ajout élégant à toute chambre moderne.", price: 950, promotion: false, category: "Meubles"},
      {id: UUID.UUID(), name: "phone", description: "Téléphone robuste avec coque renforcée, idéal pour les environnements difficiles. Résistant à l'eau, à la poussière et aux chocs.", price: 390, promotion: false, category: "Électronique"},
      {id: UUID.UUID(), name: "velo", description: "Vélo électrique avec moteur puissant, autonomie de 80 km et recharge rapide. Parfait pour les trajets urbains sans effort.", price: 1400, promotion: true, category: "Sport"},
      {id: UUID.UUID(), name: "laptop", description: "Laptop gaming avec écran 144 Hz, processeur Intel i9, 32 Go de RAM, et RTX 3080. Pour une expérience de jeu immersive.", price: 1600, promotion: false, category: "Électronique"},
      {id: UUID.UUID(), name: "imprimante", description: "Imprimante jet d'encre avec réservoirs d'encre rechargeables, idéale pour des impressions économiques et de haute qualité.", price: 250, promotion: true, category: "Électronique"},
      {id: UUID.UUID(), name: "jouet", description: "Jeu de construction avec 500 pièces modulaires pour créer des structures et des véhicules. Favorise la créativité et l'apprentissage.", price: 700, promotion: false, category: "Jouets"},
      {id: UUID.UUID(), name: "avion", description: "Jeu de construction avec 500 pièces modulaires pour créer des structures et des trains. Favorise la créativité et l'apprentissage.", price: 950, promotion: true, category: "Jouets"},
      {id: UUID.UUID(), name: "train", description: "Jeu de construction avec 500 pièces modulaires pour créer des structures et des trains. Favorise la créativité et l'apprentissage.", price: 230, promotion: true, category: "Jouets"},
      {id: UUID.UUID(), name: "computer", description: "Mini-PC compact avec processeur Intel NUC, 8 Go de RAM, et 256 Go de SSD. Parfait pour les espaces réduits et les utilisateurs en déplacement.", price: 450, promotion: false, category: "Électronique"},
      {id: UUID.UUID(), name: "armoire", description: "Armoire à portes coulissantes avec miroir pleine longueur et étagères ajustables. Parfaite pour les petits espaces.", price: 800, promotion: true, category: "Meubles"},
      {id: UUID.UUID(), name: "phone", description: "Smartphone avec écran Infinity, caméra frontale rétractable et 128 Go de stockage. Conception innovante et épurée.", price: 420, promotion: false, category: "Électronique"},
      {id: UUID.UUID(), name: "velo", description: "Vélo pliable avec cadre en aluminium léger, idéal pour les trajets en ville et facile à ranger.", price: 1100, promotion: false, category: "Sport"}
    ];

  }

  public getAllProducts() : Observable<Product[]>{
    return of(this.products) ;
  }

  public deleteProduct(id : string) : Observable<boolean>{
    this.products = this.products.filter(p=>p.id!=id);
    return of(true);
  }


  public searchProducts(keyword : string, page:number ,size : number) : Observable<PageProduct>{
    let result = this.products.filter(p=>p.name.includes(keyword));
    let index=page*size;
    let totalPages=~~(result.length/size);
    if (this.products.length%size != 0)
      totalPages++;
    let pageProduct = result.slice(index, index+size);
    return of({page:page , size:size, totalPage: totalPages, product:pageProduct})

  }

  setPromotion(id: string) : Observable<boolean> {
    let product = this.products.find(p=>p.id==id);
    if (product !=undefined){
      product.promotion=!product.promotion;
      return of(true);
    } else return throwError(()=>new Error("Product Not Found"))
  }


  public getPageProducts(page:number, size:number) : Observable<PageProduct>{
    let index=page*size; //pour savoir l'index avec lequel on va commencer dans la fct slice()
    let totalPages=~~(this.products.length/size);
    if (this.products.length%size != 0)
      totalPages++;
      let pageProduct = this.products.slice(index, index+size); // pour donner un sous page qui contient des elements selon le size
      return of({page:page , size:size, totalPage: totalPages, product:pageProduct})
  }

  public addNewProduct(product : Product) : Observable<Product>{
    product.id=UUID.UUID();
    this.products.push(product);
    return of(product);
  }

  public getProduct(id : string) : Observable<Product>{
    let product = this.products.find(p=> p.id==id);
    if (product==undefined) return throwError(()=>new Error('Product not found'));
    return of(product);
  }

  getErrorMessage(fieldName: string, error: ValidationErrors) {
    if (error['required']){
      return  fieldName + " is required";
    } else if (error['minlength']){
      return fieldName + '  should have at least  ' + error['minlength']['requiredLength']+ " Characters";
    }else return "";
  }

  public updateProduct(product : Product) : Observable<Product>{
    this.products=this.products.map(p=>(p.id==product.id)?product:p );
    return of(product);
  }

}

