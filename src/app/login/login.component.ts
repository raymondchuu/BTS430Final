import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from '../User';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User;
  public warning: string;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.user = new User();
  }

  onSubmit(f: NgForm): void {
    if (this.user.userName != "" && this.user.password != "" && this.user.userName.match(/^[0-9a-zA-Z]+$/) && this.user.password.match(/^[0-9a-zA-Z]+$/)) {
      this.auth.login(this.user).subscribe(
        (success) => {
          // store the returned token in local storage as 'access_token'
          localStorage.setItem('access_token',success.token);
          // redirect to the "contactus" route
          this.router.navigate(['/contactus']);
        },
        (err) => {
          this.warning = err.error.message;
        }
      );
    }
    else {
      this.warning = "Inputs must cannot be empty and contain numbers and letters!";
    }
  }
}
