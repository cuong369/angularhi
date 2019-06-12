import { Router } from '@angular/router';
import { UserdbService } from './../../../userdb.service';
import { UserModel } from './../../../Entity/user.class';
import { OnInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  users: UserModel[];
  @Input() clickStatus: boolean;
  idLogin = +localStorage.getItem('id');

  viewMenu = true;
  navClass = '';
  buttonClass = 'menu-trigger';
  classSession = 'content-area';
  textIntroduce = 'Please input user id';
  newEmail: string;
  person: UserModel;

  constructor(private userService: UserdbService, private router: Router) { }

  ngOnInit() {
    this.getAllUsers();
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

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
    });
  }

  // addUser(): void {
  //   this.router.navigate(['create']);
  // }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(data => {
      console.log(data);
      this.getAllUsers();
    });
  }

  // updateUser(user: UserModel) {
  //   localStorage.removeItem('userId');
  //   localStorage.setItem('userId', user.id);
  //   this.router.navigate(['edit-user']);
  // }
  updateUser(user: UserModel) {
    user.setEmail(this.newEmail);
    this.userService.updateUser(user).subscribe(data => {
      this.router.navigate(['list']);
    });
  }

  updateEmail(event: any) {
    this.newEmail = event.target.value;
    console.log(this.newEmail);
  }

}
