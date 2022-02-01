import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  User(url:any, body: any){
     return this.http.post(url, body);
  }
  get(url:any, opts?:any){
    return this.http.get(url, opts);
  }
}
