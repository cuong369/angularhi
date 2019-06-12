import { UserdbService } from './../userdb.service';
import { UserModel } from './../Entity/user.class';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: UserModel[];

  constructor(private userService: UserdbService, private router: Router) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }

  checkLogin(formValues: any) {

    let i: number;
    for (i = 0; i < this.users.length; i++) {
      if (this.users[i].email === formValues.email && this.users[i].password === formValues.password) {
        localStorage.setItem('id', String(this.users[i].id));
        localStorage.setItem('email', this.users[i].email);
        this.router.navigate(['home']);
        break;
      } else {
        console.log('Please login again!!!');
        break;
      }
    }
  }

}
