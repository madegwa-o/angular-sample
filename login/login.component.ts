import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login();
    }
  }

  // Helper methods for template
  get emailInvalid(): boolean {
    const control = this.loginForm.get('email');
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  get passwordInvalid(): boolean {
    const control = this.loginForm.get('password');
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  get formValid(): boolean {
    return this.loginForm.valid;
  }
}
