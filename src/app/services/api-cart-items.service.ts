import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ENDPOINTS, URL_API } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiCartItemsService {

  constructor( private http: HttpClient ) { }

  getCartProducts(): Observable<any>{
    return this.http.get(`${URL_API}/${ENDPOINTS.cartItems}`)
    .pipe(
      map( (resp: any)=> resp.data)
    )
  }
}
