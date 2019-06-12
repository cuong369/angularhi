import { Component, OnInit } from '@angular/core';
import { UserdbService } from 'src/app/userdb.service';
import { UserModel } from 'src/app/Entity/user.class';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  dataUser: UserModel;
  idLogin = localStorage.getItem('id');
  viewMenu = true;
  navClass = '';
  buttonClass = 'menu-trigger';
  classSession = 'content-area';
  email = localStorage.getItem('email');

  constructor(private userService: UserdbService) { }

  ngOnInit() {
    this.getDataUser();
  }

  getDataUser() {
    this.userService.getUserById(+this.idLogin).subscribe(data => this.dataUser = data);
  }

  changeMenu() {
    this.viewMenu = !this.viewMenu;
    if (this.viewMenu === true) {
      this.navClass = '';
      this.buttonClass = 'menu-trigger';
      this.classSession = 'content-area';
    } else {
      this.navClass = 'nav-close';
      this.buttonClass = 'menu-trigger active';
      this.classSession = 'content-area nav-close';
    }

  }

}
