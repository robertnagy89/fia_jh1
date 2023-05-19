import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import ValidateForm from '../../helpers/validateForm';
  import { AuthService } from '../../services/auth.service';
  import { Router } from '@angular/router';
import { UserStoreService } from '../../services/user-store.service';

  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
  export class LoginComponent implements OnInit {
    loginForm!: FormGroup;
    type: string = 'password';
    state: string = '*';


    constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private userStore: UserStoreService) {
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


        this.authService.onLogin(this.loginForm.value)
          .subscribe({
            next: (res) => {

              alert(res.message);
              this.loginForm.reset();
              this.authService.storeToken(res.token);
              const tokenPayload = this.authService.decodedToken();
              this.userStore.setNameForStore(tokenPayload.name);
              this.userStore.setRoleForStore(tokenPayload.role);

              this.router.navigate(['dashboard']);
            },
            error: (err) => {
              alert(err?.error.message);
            }
          });
      }
    }
  }
