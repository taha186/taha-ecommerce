import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductservicesService  {

  constructor(private _HttpClient:HttpClient) { }
  getproducts():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products`)
  }

  getproductsdetails(id:string):Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  }
  getallGategaeray():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories`)

  }

}
