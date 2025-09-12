import { TestBed } from '@angular/core/testing';

import { ProjectsService } from './projects.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

describe('ProjectsService', () => {
  let service: ProjectsService;
  let httpTestingController: HttpTestingController;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(ProjectsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get projects', () => {
      const mockResponse = {data: [
        {
          id: 0,
          name: "Project One",
          description: "The first project",
          type: "personal",
          link: "//github.com",
          image: "github.png"
        },
        {
          id: 1,
          name: "Project Two",
          description: "The second project",
          type: "work",
          link: "//linkedin.com",
          image: "linkedin.png"
        },
        {
          id: 2,
          name: "Project Three",
          description: "The third project",
          type: "client"
        }
      ]};
        
      service.getProjects().subscribe( data => expect(data).toEqual(mockResponse.data));
  
      const req = httpTestingController.expectOne(environment.API_URL + "/projects");
      expect(req.request.method).toEqual('GET');
      req.flush(mockResponse);
  });

  it('should get specific projects', () => {
    const mockResponse = {data: [
      {
          id: 0,
          name: "Project One",
          description: "The first project",
          type: "personal",
          link: "//github.com",
          image: "github.png"
      }
    ]};

    service.getProjects(0).subscribe( data => expect(data).toEqual(mockResponse.data));

    const req = httpTestingController.expectOne(environment.API_URL + `/skills/technical?id=0`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });
});
