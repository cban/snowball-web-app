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

  insertUser(user: User) {

    this.userList.push({
      email: user.email,
      name: user.name
    });
  }

  updateUser(user: User) {
    this.userList.update(user.key,
      {
        email: user.email,
        name: user.name
      })
  }

  deleteUser(key:string){
    this.userList.remove(key)
  }
}
