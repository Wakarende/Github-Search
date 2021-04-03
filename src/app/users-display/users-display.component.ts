import { Component, OnInit } from '@angular/core';
import { GithubService } from '../service/github.service'

@Component({
  selector: 'app-users-display',
  templateUrl: './users-display.component.html',
  styleUrls: ['./users-display.component.css']
})
export class UsersDisplayComponent implements OnInit {

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.getUsers = this.githubService.getUsers()
    // this.githubService.getUsers()
    // .subscribe(users => {
    //   console.log(users);
    // });
  }

}
