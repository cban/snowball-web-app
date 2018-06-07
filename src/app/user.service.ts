import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { User } from './users/shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userList: AngularFireList<any>;
  selectedUser: User = new User();

  constructor(private firebase: AngularFireDatabase) { }

  
  getData() {

    this.userList = this.firebase.list('users');
    return this.userList;
  }
  randomPassword() {
    length = 9
     var chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
     var password = "";
     for (var x = 0; x < 9; x++) {
         var i = Math.floor(Math.random() * chars.length);
         password += chars.charAt(i);
     }
     return password;
 }

  insertUser(user: User) {

    this.userList.push({
      email: user.email,
      name: user.name,
      password :user.password = this.randomPassword()
    });
  }

  updateUser(user: User) {
    this.userList.update(user.$key,
      {
        email: user.email,
        name: user.name
      })
  }

  deleteUser($key:string){
    this.userList.remove($key)
  }
}


