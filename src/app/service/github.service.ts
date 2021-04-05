import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
// import { environment } from 'src/environments/environment';
import { environment } from '../../environments/environment'
import { RepositoriesByName } from '../Class/repositories-by-name'


@Injectable({
  providedIn: 'root'
})

export class GithubService {
  username:string;
  repoName:string;
  repos:string
  apiKey:string;
  clientId: string = '761a10c6250fec1cd9c3';
  clientSecret: string = '57a0b5167d57892cfe5d6ab3a60bd0287cffeb61';
  reposByName: RepositoriesByName[] = [];

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
  // searchRepos(){
  //   return this.http.get('https://api.github.com/search/repositories?q=' + this.repoName, ({
  //     headers: new HttpHeaders({Authorization: `token ${environment.apiKey}`})
  //   }))
  //   }
  //   updateRepo(repo:string) {
  //   this.repoName = repo;
  // }
  searchRepos(repoName){
    interface repobyNameApiResponse{
      items:[];
    }
    let promise= new Promise<void>((resolve, reject) => {
      let arrayLength = this.reposByName.length;
      for(let i=0; i< arrayLength; i++){
        this.reposByName.pop()
      }
      this.http.get<repobyNameApiResponse>(`https://api.github.com/search/repositories?q=${repoName}`).toPromise().then(response =>{
        for(let i = 0; i < response.items.length; i++){
          let repoByName = new RepositoriesByName ("","","","",0,new Date());
          repoByName.name =  response.items[i]["name"]
          repoByName.description =  response.items[i]["description"]
          repoByName.language =  response.items[i]["language"]
          repoByName.html_url =  response.items[i]["html_url"]
          repoByName.forks = response.items[i]["forks"]
          repoByName.updated_at = response.items[i]["updated_at"]
          this.reposByName.push(repoByName)
          }
          resolve()
        },
        error => {
          console.log("error has occured")
          reject(error)
        })
      })
      return promise
  }
  }
  


