import { TestBed } from '@angular/core/testing';

import { ContactService } from './contact.service';
import { HttpResponse, provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

describe('ContactService', () => {
  let service: ContactService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(ContactService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send email to the API', () => {
    const mockForm = {
      email: "test@example.com",
      name: "Johnny Test",
      phone: undefined,
      message: "post"
    }
    const mockResponse = {data: ["Message One", "Message Two"]};

    service.sendEmail(mockForm).subscribe( data => expect(data).toEqual(mockResponse.data));

    const req = httpTestingController.expectOne(environment.API_URL + "/contact");
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(mockForm);
    req.flush(mockResponse);
  });
});
