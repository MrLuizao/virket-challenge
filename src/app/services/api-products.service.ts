import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENDPOINTS, URL_API } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  constructor( private http: HttpClient ) { }

  getAllProducts(): Observable<any>{
    return this.http.get(`${URL_API}/${ENDPOINTS.products}`);
  }
}
