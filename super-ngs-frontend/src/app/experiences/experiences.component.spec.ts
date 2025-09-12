import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesComponent } from './experiences.component';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ExperiencesService } from '../services/experiences.service';

describe('ExperiencesComponent', () => {
  let component: ExperiencesComponent;
  let service: ExperiencesService;
  let httpTestingController: HttpTestingController;
  let fixture: ComponentFixture<ExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperiencesComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencesComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ExperiencesService);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
