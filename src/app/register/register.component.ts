import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username!: string;
  password!: string;

  constructor(private authService: AuthService, private router: Router) { }

  register() {
    this.authService.register({ username: this.username, password: this.password }).subscribe(
      (data) => {
        alert('Registration successful');
        this.router.navigate(['/login']);
      },
      (error) => {
        alert('Registration failed');
      }
    );
  }
}
