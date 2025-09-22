import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { ContactService } from '../services/contact.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactForm: FormGroup;

  nameRegex: RegExp = /^[a-zA-Z\s'-]+$/;
  phoneRegex: RegExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  
  constructor(private fb: FormBuilder, private contactService: ContactService, private notificationService: NotificationService) {
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.pattern(this.nameRegex)]],
      phone: ['', [Validators.pattern(this.phoneRegex)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactService.sendEmail(this.contactForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.contactForm.reset();
          this.contactForm.markAsUntouched();
          this.contactForm.markAsPristine();
          this.notificationService.success("Submission Successful", "The submission was successful. We will be in touch shortly!");
        },
        error: (err) => {
          console.error(err);
          this.notificationService.error("Submission Error", "There was an error while submitting. Please try again later.");
        }
      })
    }
  }
}
