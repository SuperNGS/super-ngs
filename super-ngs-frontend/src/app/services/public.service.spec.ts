import { TestBed } from '@angular/core/testing';

import { PublicService } from './public.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

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
});
