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
  
  findRepo(){
    this.githubService.searchRepos(this.repoName)
    this.repos = this.githubService.reposByName
    this.repoName = ''
  }
  
  ngOnInit(){
    this.findRepo();
  }

}
