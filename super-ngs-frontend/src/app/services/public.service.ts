import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(private http: HttpClient) { }

  public getHeadshot() {
    return this.http.get(environment.API_URL + "/public/headshot").pipe(
      map((res: any) => {
          return res['data'];
    }));
  }

  public getHeadline() {
    return this.http.get(environment.API_URL + "/public/headline").pipe(
      map((res: any) => {
          return res['data'];
    }));
  }

  public getHeadlineName() {
    return this.http.get(environment.API_URL + "/public/headline/name").pipe(
      map((res: any) => {
          return res['data'];
    }));
  }

  public getHeadlineTitle() {
    return this.http.get(environment.API_URL + "/public/headline/title").pipe(
      map((res: any) => {
          return res['data'];
    }));
  }

  public getHeadlineLinkedin() {
    return this.http.get(environment.API_URL + "/public/headline/linkedin").pipe(
      map((res: any) => {
          return res['data'];
    }));
  }

  public getHeadlineGithub() {
    return this.http.get(environment.API_URL + "/public/headline/github").pipe(
      map((res: any) => {
          return res['data'];
    }));
  }

}
