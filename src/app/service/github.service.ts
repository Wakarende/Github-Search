import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  username:string;

  // apiUrl = 'https://api.github.com/users?per_page=10';
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
}
