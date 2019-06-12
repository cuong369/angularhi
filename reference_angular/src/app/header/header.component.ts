import { UserModel } from './../Entity/user.class';
import { Component, OnInit } from '@angular/core';
import { UserdbService } from '../userdb.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email = localStorage.getItem('email');
  check = false;

  constructor() { }

  ngOnInit() {
  }

  showHideMenu() {
    this.check = !this.check;
  }

}
