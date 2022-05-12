import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ENDPOINTS, URL_API } from 'src/environments/environment';


@Injectable()
export class ApiDataService {

  constructor(private http: HttpClient) { }

  getUserData(): Observable<any> {
    return this.http.get(`${URL_API}/${ENDPOINTS.dataUser}`).pipe(map((response: any) =>
      response.data
    ));
  }
}
