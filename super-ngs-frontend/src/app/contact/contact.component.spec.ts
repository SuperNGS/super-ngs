import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ContactService } from '../services/contact.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let service: ContactService;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideAnimationsAsync()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ContactService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a correctly structured initial contact form', () => {
    const emailControl = component.contactForm.get('email');
    expect(emailControl?.invalid).toBeTrue;
    expect(emailControl?.hasError('required')).toBeTrue();

    const nameControl = component.contactForm.get('name');
    expect(nameControl?.invalid).toBeTrue();
    expect(nameControl?.hasError('required')).toBeTrue();

    const phoneControl = component.contactForm.get('phone');
    expect(phoneControl?.valid).toBeTrue();
    
    const messageControl = component.contactForm.get('message');
    expect(messageControl?.invalid).toBeTrue();
    expect(messageControl?.hasError('required')).toBeTrue();
  });

  it('should accept valid names', () => {
    const nameControl = component.contactForm.get('name');
    nameControl?.setValue('test test');
    fixture.detectChanges();
    expect(nameControl?.valid).toBeTrue();
  });

  it('should reject invalid names', () => {
    const nameControl = component.contactForm.get('name');
    nameControl?.setValue('1234 #$%^');
    fixture.detectChanges();
    expect(nameControl?.valid).toBeFalse();
    expect(nameControl?.hasError('pattern')).toBeTrue();
  });

  it('should accept valid emails', () => {
    const emailControl = component.contactForm.get('email');
    emailControl?.setValue("test@example.com");
    fixture.detectChanges();
    expect(emailControl?.valid).toBeTrue();
  });

  it('should reject invalid emails', () => {
    const emailControl = component.contactForm.get('email');
    emailControl?.setValue("test1234");
    fixture.detectChanges();
    expect(emailControl?.valid).toBeFalse();
    expect(emailControl?.hasError('email')).toBeTrue();
  });

  it('should accept valid phone numbers', () => {
    const phoneControl = component.contactForm.get('phone');
    phoneControl?.setValue('123-456-7890');
    fixture.detectChanges();
    expect(phoneControl?.valid).toBeTrue();
  });

  it('should reject invalid phone numbers', () => {
    const phoneControl = component.contactForm.get('phone');
    phoneControl?.setValue('abc-def-ghij');
    fixture.detectChanges();
    expect(phoneControl?.valid).toBeFalse();
    expect(phoneControl?.hasError('pattern')).toBeTrue();
  });

  it('should accept valid messages', () => {
    const messageControl = component.contactForm.get('message');
    messageControl?.setValue('Hello, this is a test message');
    expect(messageControl?.valid).toBeTrue();
  })

  it('should reject invalid messages', () => {
    const messageControl = component.contactForm.get('message');
    messageControl?.setValue('test');
    expect(messageControl?.valid).toBeFalse();
    expect(messageControl?.hasError('minlength')).toBeTrue();
  });
});
