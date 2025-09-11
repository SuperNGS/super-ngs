import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(private http: HttpClient) { }

  public getSkills(id?: number) {
    let params = new HttpParams();
    if(id != undefined) {
      params = params.set("id", id);
    }
    return this.http.get(environment.API_URL + "/skills", { params: params }).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }
}
