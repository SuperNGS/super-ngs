import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  public getHeadshot() {
    return this.http.get(environment.API_URL + "/home/headshot").pipe(
      map((res: any) => {
          return res['data'];
    }));
  }

}
