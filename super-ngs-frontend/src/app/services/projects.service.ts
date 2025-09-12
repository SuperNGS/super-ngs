import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  public getProjects(id?: number) {
    let params = new HttpParams();
    if( id != undefined ) {
      params = params.set('id', id);
    }
    return this.http.get(environment.API_URL + "/projects", { params: params }).pipe(
      map((res: any) => {
        return res['data'];
      })
    )
  }
}
