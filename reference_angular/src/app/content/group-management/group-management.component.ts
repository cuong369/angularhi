import { UserModel } from './../../Entity/user.class';
import { UserdbService } from './../../userdb.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-management',
  templateUrl: './group-management.component.html',
  styleUrls: ['./group-management.component.css']
})
export class GroupManagementComponent implements OnInit {

  dataUser: UserModel;
  idLogin = localStorage.getItem('id');
  viewMenu = true;
  navClass = '';
  buttonClass = 'menu-trigger';
  classSession = 'content-area';
  textIntroduce = 'Please input a group name';

  constructor(private userService: UserdbService) { }

  ngOnInit() {
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
