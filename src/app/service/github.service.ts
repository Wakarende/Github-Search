import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  username:string;
  repoName:string;
  repo:string;
  apiKey:string = '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';
 

  constructor(private http:HttpClient) { }

  getUser() {
    return this.http.get(`https://api.github.com/users/${this.username}`);
  }
  getRepos() {
    return this.http.get(`https://api.github.com/users/${this.username}/repos`)
  }
  updateUsername(username:string){
    this.username = username;
  }
  searchRepos(){
    return this.http.get('https://api.github.com/search/repositories?q=' + this.repoName, ({
      headers: new HttpHeaders({Authorization: `token ${this.apiKey}`})
    }))
    }
    updateRepo(repo:string) {
    this.repoName = repo;
  }
  }
  


