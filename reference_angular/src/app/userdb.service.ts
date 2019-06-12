import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './Entity/user.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserdbService {

  getDataUser: UserModel[];

  constructor(private http: HttpClient) { }

  baseurl = 'http://localhost:3000/';

  getAllUsers() {
    return this.http.get<UserModel[]>(this.baseurl + 'users');
  }

  getUserById(id: number) {
    return this.http.get<UserModel>(this.baseurl + 'users' + '/' + id);
  }

  addUser(user: UserModel) {
    return this.http.post(this.baseurl + 'users', user);
  }

  // addUser(user: UserModel): Observable<any> {
  //   return this.http.post(this.baseurl + 'users', user);
  // }

  deleteUser(id: number) {
    return this.http.delete(this.baseurl + 'users' + '/' + id);
  }

  updateUser(user: UserModel) {
    return this.http.put(this.baseurl + 'users' + '/' + user.id, user);
  }

  getIdLast() {
    this.getAllUsers().subscribe(data => {
      this.getDataUser = data;
    });
    return +this.getDataUser[this.getDataUser.length - 1].id;
  }

}
