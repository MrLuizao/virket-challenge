import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINTS, URL_API } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor( private http: HttpClient) { }

  getUserData(){
    return this.http.get(`${URL_API}/${ENDPOINTS.dataUser}`);
  }
}
