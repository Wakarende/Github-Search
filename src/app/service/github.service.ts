import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  apiKey = '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';
  constructor(private http:HttpClient) { }

  getUsers() {
    return this.http.get(`${this.apiKey}?per_page=10`)
  }
}
