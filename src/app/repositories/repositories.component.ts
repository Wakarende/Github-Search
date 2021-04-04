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
repoName:string = "Akan"
repoItems:any[];
repo:string;
  constructor(private githubService: GithubService) { 

  }
  findRepo() {
    this.githubService.updateRepo(this.repoName);
    this.githubService.searchRepos().subscribe(repo => {
      this.repoItems = repo["items"];
      console.log(this.repoItems)
    })

  }
  // getRepos(){
  //   this.state.$subject
  //   .subscribe((username:string)) => {
  //     this.username = username
  //     this.getRepos()
  //   }
  // }
  ngOnInit(): void {
    this.findRepo();
  }

}
