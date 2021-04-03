import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { GithubService } from '../service/github.service'

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
username;

  constructor(private githubService: GithubService) { 

  }
  // getRepos(){
  //   this.state.$subject
  //   .subscribe((username:string)) => {
  //     this.username = username
  //     this.getRepos()
  //   }
  // }
  ngOnInit(): void {
  }

}
