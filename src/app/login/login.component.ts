import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}
  ngOnInit(): void {
    
      localStorage.setItem('isLoggedIn', 'false');
    
  }

  

  onLogin() {
    if (this.username === 'admin' && this.password === 'admin123') {
      alert('Login Successful!');
      localStorage.setItem('isLoggedIn', 'true'); // Set login status in local storage
      this.router.navigate(['/main/dashboard']);
      // You can navigate to another page here if needed
    } else {
      localStorage.setItem('isLoggedIn', 'false'); // Set login status in local storage
      this.errorMessage = 'Invalid username or password';
    }
  }
}
