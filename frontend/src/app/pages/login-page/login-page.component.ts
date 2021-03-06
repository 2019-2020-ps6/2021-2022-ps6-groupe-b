import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public userList: User[] = [];

  constructor(private userService: UserService, private router: Router) {
    this.userService.users$.subscribe((users: User[]) => {
      this.userList = users;
    });
  }

  ngOnInit(): void {
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user);
  }

  selectUser(user: User): void {
    this.userService.setSelectedUser(user.id);
    this.router.navigate(['/main-page']);
  }


}
