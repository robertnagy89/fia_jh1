import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      signupemail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  signup() {
    // Perform any additional client-side validation if needed

    // Create a user object with the necessary properties
    const user = {
      name: this.signupForm.value.name,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
    };

    console.log(user);

    // Make an HTTP POST request to the backend signup endpoint
    this.http.post(`${environment.apiUrl}api/signup`, user).subscribe(
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
}
