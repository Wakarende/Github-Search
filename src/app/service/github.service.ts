import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  username:string;

  // apiUrl = 'https://api.github.com/users?per_page=10';
  apiKey = environment.apikey
  urlRepo = 'https://api.github.com/search/repositories?q='
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
  // Repositories alone 
  // getRepository(repo){
  //   return this.http.get(`${this.urlRepo}${repo}&sort=stars?access_token=${this.apiKey}`)
  // }
}
