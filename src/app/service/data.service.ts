import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';


@Injectable()
export class DataService {
  private _product = "./assets/dataapi/product.json";
  private _popularitem = "./assets/dataapi/popularitem.json";
  private _shopdetail = "./assets/dataapi/shopdetail.json";

  constructor(private http: HttpClient) { }

  
  // Service Method 
  getProduct(){
    return this.http.get(this._product);
  }
  getPopularitem(){
    return this.http.get(this._popularitem);
  }
  getShopdetail(){
    return this.http.get(this._shopdetail);
  }
}
