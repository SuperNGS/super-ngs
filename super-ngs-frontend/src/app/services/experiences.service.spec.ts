import { TestBed } from '@angular/core/testing';

import { ExperiencesService } from './experiences.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

describe('ExperiencesService', () => {
  let service: ExperiencesService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(ExperiencesService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get experiences', () => {
      const mockResponse = {data: [
      {
        id: 0,
        company: "Experience One",
        position: "Test One",
        points: [
          "Point One",
          "Point Two",
          "Point Three"
        ],
        start_date: "08/2024",
        end_date: "08/2025"
      },
      {
        id: 1,
        company: "Experience Two",
        position: "Test Two",
        points: [
          "Point One",
          "Point Two",
          "Point Three"
        ],
        start_date: "07/2020",
        end_date: "10/2021",
        image: "rit.jpg"
      },
      {
        id: 2,
        company: "Experience Three",
        position: "Test Three",
        points: [
          "Point One",
          "Point Two",
          "Point Three"
        ],
        start_date: "08/2026",
        end_date: "present",
        image: "rit.jpg",
        link: "//rit.edu"
      }
    ]};
        
    service.getExperiences().subscribe( data => expect(data).toEqual(mockResponse.data));

    const req = httpTestingController.expectOne(environment.API_URL + "/experiences");
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should get specific experiences', () => {
    const mockResponse = {data: [
      {
        id: 0,
        company: "Experience One",
        position: "Test One",
        points: [
          "Point One",
          "Point Two",
          "Point Three"
        ],
        start_date: "08/2024",
        end_date: "08/2025"
      }
    ]};

    service.getExperiences(0).subscribe( data => expect(data).toEqual(mockResponse.data));

    const req = httpTestingController.expectOne(environment.API_URL + `/experiences?id=0`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });
});
