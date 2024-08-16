export interface Product{
  id : string;
  name : string;
  description : string;
  price : number;
  promotion : boolean;
  category:string;
}

export interface PageProduct{
  product : Product[];
  page : number;
  size : number;
  totalPage : number;
}
