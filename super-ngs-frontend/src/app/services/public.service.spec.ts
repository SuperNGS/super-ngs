import { TestBed } from '@angular/core/testing';

import { PublicService } from './public.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

describe('HomeService', () => {
  let service: PublicService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
            provideHttpClient(),
            provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(PublicService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get headshot from API', () => {
    const mockResponse = {data: ["abcd"]};
    
    service.getHeadshot().subscribe( data => expect(data).toEqual(mockResponse.data));

    const req = httpTestingController.expectOne(environment.API_URL + "/public/headshot");
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should get bio from API', () => {
    const mockResponse = {data: ["abcd"]};
    
    service.getBio().subscribe( data => expect(data).toEqual(mockResponse.data));

    const req = httpTestingController.expectOne(environment.API_URL + "/public/bio");
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should get headline from API', () => {
    const mockResponse = {data: [{
      name: "John Doe",
      title: "Software Tester",
      linkedin: "//linkedin.com",
      github: "//github.com"
    }]};
    
    service.getHeadline().subscribe( data => expect(data).toEqual(mockResponse.data));

    const req = httpTestingController.expectOne(environment.API_URL + "/public/headline");
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should get headline name from API', () => {
    const mockResponse = {data: ["John Doe"]};
    
    service.getHeadlineName().subscribe( data => expect(data).toEqual(mockResponse.data));

    const req = httpTestingController.expectOne(environment.API_URL + "/public/headline/name");
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should get headline title from API', () => {
    const mockResponse = {data: ["Software Tester"]};
    
    service.getHeadlineTitle().subscribe( data => expect(data).toEqual(mockResponse.data));

    const req = httpTestingController.expectOne(environment.API_URL + "/public/headline/title");
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should get headline linkedin from API', () => {
    const mockResponse = {data: ["//linkedin.com"]};
    
    service.getHeadlineLinkedin().subscribe( data => expect(data).toEqual(mockResponse.data));

    const req = httpTestingController.expectOne(environment.API_URL + "/public/headline/linkedin");
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should get headline github from API', () => {
    const mockResponse = {data: ["//github.com"]};
    
    service.getHeadlineGithub().subscribe( data => expect(data).toEqual(mockResponse.data));

    const req = httpTestingController.expectOne(environment.API_URL + "/public/headline/github");
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });
});
