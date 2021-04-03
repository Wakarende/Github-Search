import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { GithubService } from '../service/github.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user:any;
  repos:any;
  username:string;

  @Input()
  color: ThemePalette
  @Input()
  appearance: MatFormFieldAppearance

  constructor(private githubService: GithubService) { }
  search() {
    this.githubService.updateUsername(this.username);
    this.githubService.getUser().subscribe(user => this.user = user);
    this.githubService.getRepos().subscribe(repos => this.repos = repos);
  }
  reset() {
    this.user = null;
    this.username = null;
  }

  ngOnInit(): void {
  }

}
