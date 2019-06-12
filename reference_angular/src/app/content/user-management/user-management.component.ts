import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  viewMenu = true;
  navClass = '';
  buttonClass = 'menu-trigger';
  classSession = 'content-area mastermainte';

  constructor() { }

  ngOnInit() {
  }

  changeMenu() {
    this.viewMenu = !this.viewMenu;
    if (this.viewMenu === true) {
      this.navClass = '';
      this.buttonClass = 'menu-trigger';
      this.classSession = 'content-area mastermainte';
    } else {
      this.navClass = 'nav-close';
      this.buttonClass = 'menu-trigger active';
      this.classSession = 'content-area mastermainte nav-close';
    }
  }

}
