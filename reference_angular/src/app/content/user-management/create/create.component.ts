import { UserModel } from './../../../Entity/user.class';
import { UserdbService } from './../../../userdb.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  viewMenu = true;
  navClass = '';
  buttonClass = 'menu-trigger';
  classSession = 'content-area';
  textIntroduce = 'Please input your email address for ID';
  getCheckId: number;
  getTextInput: string;
  listUser = new Array<UserModel>();
  userTemp: UserModel;
  getUserData: UserModel[];
  lastId = localStorage.getItem('lastId');
  newId = +this.lastId;

  constructor(private router: Router, private userService: UserdbService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => this.getUserData = data);
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

  getCheck(event: any) {
    // console.log(event); // => Result: event.target.id [auth-1] //auth-id.
    const stringEvent = event.target.id.split('-');
    this.getCheckId = +stringEvent[1];
  }

  getText(event: string) {
    this.getTextInput = event;
    console.log(this.getTextInput);
  }

  addUserTemp() {
    const name = this.getTextInput.split('@')[0];
    const email = this.getTextInput;
    const password = '1234';
    const role = this.getCheckId;
    this.userTemp = new UserModel(name, email, password, role);
    this.listUser.push(this.userTemp);
    console.log(this.listUser);
  }

  addUser() {
    if (this.listUser) {
      this.listUser.forEach(user => {
        this.userService.addUser(user).subscribe(data => {
          this.router.navigate(['list']);
        });
      });
    }
  }
}
