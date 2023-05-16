import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  public users: any = [];

  constructor(private auth: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(res => {
        this.users = res;
      })
  }

  logOut() {
    this.auth.signOut();
  }

}
