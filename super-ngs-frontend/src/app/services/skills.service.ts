import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient) { }

  public getSkills() {
    return this.http.get(environment.API_URL + "/skills").pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }

  public getSoftSkills(id?: number) {
    let params = new HttpParams();
    if( id != undefined ) {
      params = params.set('id', id);
    }
    return this.http.get(environment.API_URL + "/skills/soft", { params: params }).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }

  public getTechnicalSkills(id?: number) {
    let params = new HttpParams();
    if( id != undefined ) {
      params = params.set('id', id);
    }
    return this.http.get(environment.API_URL + "/skills/technical", { params: params }).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }
}
