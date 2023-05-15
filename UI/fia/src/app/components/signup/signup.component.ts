import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { User } from '../../../models/user';
import ValidateForm from '../../helpers/validateForm';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router)
  {
    this.signupForm = this.formBuilder.group({
      id: ['00000000-0000-0000-0000-000000000000'],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator });
  }

  ngOnInit(): void {
    
  }

  passwordMatchValidator: ValidatorFn = (control: AbstractControl) => {
    const password = control.get('password');
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
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        name: this.signupForm.value.name
      };

      this.authService.signUp(user)
        .subscribe({
          next: (res) => {
            alert(res.message);
            this.signupForm.reset();
            this.router.navigate(['login']);
          },
          error: (err) => {
            alert(err?.error.message);
          }
        })
      

    }
    else {
      ValidateForm.validateAllFormGroups(this.signupForm);
      
      // Logic for error
    }
  }
}
