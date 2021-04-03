import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  // {path: '', redirectTo:'./home', pathMatch:'full'},
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UsersComponent},
  {path: 'repositories', component: RepositoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }