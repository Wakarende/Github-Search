import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
// import { environment } from 'src/environments/environment';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class GithubService {
  username:string;
  repoName:string;
  repo:string;
  apiKey:string;
  clientId: string = '761a10c6250fec1cd9c3';
  clientSecret: string = '57a0b5167d57892cfe5d6ab3a60bd0287cffeb61';

  constructor(private http:HttpClient) { }

  getUser() {
    return this.http.get(`https://api.github.com/users/${this.username}` + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret) ;
  }
  getRepos() {
    return this.http.get(`https://api.github.com/users/${this.username}/repos` + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret)
  }
  updateUsername(username:string){
    this.username = username;
  }
  searchRepos(){
    return this.http.get('https://api.github.com/search/repositories?q=' + this.repoName, ({
      headers: new HttpHeaders({Authorization: `token ${environment.apiKey}`})
    }))
    }
    updateRepo(repo:string) {
    this.repoName = repo;
  }
  }
  


