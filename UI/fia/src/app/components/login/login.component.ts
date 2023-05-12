import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import ValidateForm from '../../helpers/validateForm';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  type: string = 'password';
  state: string = '*';


  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
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

  onLogin() {

    if (this.loginForm.invalid) {
      ValidateForm.validateAllFormGroups(this.loginForm);
      console.log('Invalid Form');
    }
    else {
      console.log(this.loginForm);
      ValidateForm.validateAllFormGroups(this.loginForm);

      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      this.authService.login(this.loginForm.value)
        .subscribe({
          next: (res) => {
            alert(res.message);
          },
          error: (err) => {
            alert(err?.error.message);
          }
        })
    }
  }
}
