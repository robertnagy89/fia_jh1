import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  type: string = 'password';
  state: string = '*';


  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.loginForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  togglePassword() {
    if (this.type == 'password') {
      this.type = 'text';
      this.state = 'abc';
    }
    else {
      this.type = 'password';
      this.state = '*'
    }
  }

  onSubmit() {

    if (this.loginForm.invalid) {
      this.validateAllFormGroups(this.loginForm);
      console.log('Invalid Form');
    }
    else {
      console.log(this.loginForm);
      this.validateAllFormGroups(this.loginForm);

      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      // Call the backend API to perform login
      this.http.post('/login', { email, password })
        .subscribe(
          (response) => {
            // Handle successful login
            console.log('Login successful', response);
            // Redirect the user to the desired page
          },
          (error) => {
            // Handle login error
            console.log('Login Failed', error);

          });
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
