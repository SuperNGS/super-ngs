import { TestBed } from '@angular/core/testing';

import { SkillsService } from './skills.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';

describe('SkillsService', () => {
  let service: SkillsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(SkillsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify()
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get skills from the API', () => {
    const mockResponse = {data: [
      {
        id: "0",
        name: "Skill One",
        description: "This is a description"
      },
      {
        id: "1",
        name: "Skill Two",
        description: "This is another description"
      },
      {
        id: "2",
        name: "Skill Three",
        description: "This is yet another description"
      }
    ]};

    service.getSkills().subscribe( data => expect(data).toEqual(mockResponse.data));

    const req = httpTestingController.expectOne(environment.API_URL + "/skills");
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should get soft skills from the API', () => {
    const mockResponse = {data: [
      {
        id: "0",
        name: "Skill One",
        description: "This is a description"
      },
      {
        id: "1",
        name: "Skill Two",
        description: "This is another description"
      },
      {
        id: "2",
        name: "Skill Three",
        description: "This is yet another description"
      }
    ]};

    service.getSoftSkills().subscribe( data => expect(data).toEqual(mockResponse.data));

    const req = httpTestingController.expectOne(environment.API_URL + `/skills/soft`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should get specific soft skills from the API', () => {
    const mockResponse = {data: [
      {
        id: "0",
        name: "Skill One",
        description: "This is a description"
      }
    ]};

    service.getSoftSkills(0).subscribe( data => expect(data).toEqual(mockResponse.data));

    const req = httpTestingController.expectOne(environment.API_URL + `/skills/soft?id=0`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should get technical skills from the API', () => {
    const mockResponse = {data: [
      {
        id: "0",
        name: "Skill One",
        description: "This is a description"
      },
      {
        id: "1",
        name: "Skill Two",
        description: "This is another description"
      },
      {
        id: "2",
        name: "Skill Three",
        description: "This is yet another description"
      }
    ]};

    service.getSoftSkills().subscribe( data => expect(data).toEqual(mockResponse.data));

    const req = httpTestingController.expectOne(environment.API_URL + `/skills/soft`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });

  it('should get specific technbical skills from the API', () => {
    const mockResponse = {data: [
      {
        id: "0",
        name: "Skill One",
        description: "This is a description"
      }
    ]};

    service.getTechnicalSkills(0).subscribe( data => expect(data).toEqual(mockResponse.data));

    const req = httpTestingController.expectOne(environment.API_URL + `/skills/technical?id=0`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponse);
  });
});
