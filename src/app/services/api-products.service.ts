import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ENDPOINTS, URL_API } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  constructor( private http: HttpClient ) { }

  getAllProducts(): Observable<any>{
    return this.http.get(`${URL_API}/${ENDPOINTS.products}`).pipe(
      map( (resp: any)=> resp.data.map( (prop)=> ({...prop, color: prop.colors[0]})) )
    )
  }
}
