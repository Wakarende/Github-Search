import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-users-display',
  templateUrl: './users-display.component.html',
  styleUrls: ['./users-display.component.css']
})
export class UsersDisplayComponent implements OnInit {
  users;

  constructor() { }

  ngOnInit() {
    // this.users= this.githubService.getUsers()
    // this.githubService.getUsers()
    // .subscribe(users => {
    //   console.log(users);
    // });
  }

}
