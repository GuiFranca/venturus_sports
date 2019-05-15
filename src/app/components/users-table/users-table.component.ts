import { Component, OnInit } from '@angular/core';
import { ITable, User } from 'src/app/models/user';
import { UsersService } from './../../services/users.service';


@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  public aCol: Array<ITable>;
  public aUser: Array<User>;

  public bLoading: boolean;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.bLoading = true;
    this.usersService.getUsers().subscribe(oRet => {
      this.aUser = oRet.map(oElem => {
        const oUser: User = new User();

        oUser.username = oElem.username;
        oUser.name = oElem.name;
        oUser.email = oElem.email;
        oUser.city = oElem.address.city;
        oUser.often_ride = 'Always';

        return oUser;
      });
      this.bLoading = false;
    });

    this.aCol = [
      { field: 'username', header: 'Username' },
      { field: 'name', header: 'Name' },
      { field: 'email', header: 'E-mail' },
      { field: 'city', header: 'City' },
      { field: 'often_ride', header: 'Ride in group' }
    ];
  }

}
