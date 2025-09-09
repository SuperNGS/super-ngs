import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  public sendEmail(contactForm: any) {
    return this.http.post(environment.API_URL + "/contact", contactForm).pipe(
      map((res: any) => {
          return res['data'];
    }));
  }
}
