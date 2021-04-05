import { Component, OnInit } from '@angular/core';
import { Repos } from '../Class/repos'
import { GithubService } from '../service/github.service'


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
username;
repoName:string
repoItems:any[];
repos: Repos[];
  constructor(private githubService: GithubService) { 

  }
  // findRepo() {
  //   this.githubService.updateRepo(this.repoName);
  //   this.githubService.searchRepos().subscribe(repo => {
  //     this.repoItems = repo["items"];
  //     console.log(this.repoItems)
  //   })

  // }
  findRepo(){
    this.githubService.searchRepos(this.repoName)
    this.repos = this.githubService.reposByName
    this.repoName = ''
  }
  // getRepos(){
  //   this.state.$subject
  //   .subscribe((username:string)) => {
  //     this.username = username
  //     this.getRepos()
  //   }
  // }
  ngOnInit(){
    this.findRepo();
  }

}
