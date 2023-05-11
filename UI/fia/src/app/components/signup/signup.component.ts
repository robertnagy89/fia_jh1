import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { User } from '../../../models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient)
  {
    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      useremail: ['', [Validators.required, Validators.email]],
      userpassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    
  }

  passwordMatchValidator: ValidatorFn = (control: AbstractControl) => {
    const password = control.get('userpassword');
    const confirmPassword = control.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
    }
    else {
      confirmPassword?.markAsTouched();
    }
    return null;
  }


  signup() {
    if (this.signupForm.valid) {
      // Logic for sign up
      // Create a user object with the necessary properties
      console.log(this.signupForm.value);
      const user: User = {
        id: '00000000-0000-0000-0000-000000000000',
        name: this.signupForm.value.username,
        email: this.signupForm.value.useremail,
        password: this.signupForm.value.userpassword
      };

      console.log(user);

      // Make an HTTP POST request to the backend signup endpoint
      this.http.post(`${environment.apiUrl}api/Signup`, user).subscribe(
        (response) => {
          // Handle successful signup
          console.log('Signup successful:', response);
        },
        (error) => {
          // Handle signup error
          console.error('Signup error:', error);
        }
      );

    }
    else {
      this.validateAllFormGroups(this.signupForm);
      // Logic for error
    }
  }

  private validateAllFormGroups(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(group => {
      const control = formGroup.get(group);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormGroups(control);
      }

    })
  }
}
