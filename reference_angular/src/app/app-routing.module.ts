import { MyAccountComponent } from './content/my-account/my-account.component';
import { GroupManagementComponent } from './content/group-management/group-management.component';
import { LoginComponent } from './login/login.component';
import { UserManagementComponent } from './content/user-management/user-management.component';
import { CreateComponent } from './content/user-management/create/create.component';
import { ListComponent } from './content/user-management/list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: UserManagementComponent },
  { path: 'group', component: GroupManagementComponent },
  { path: 'myaccount', component: MyAccountComponent },
  { path: 'list', component: ListComponent },
  // { path: 'add-user', component: CreateComponent },
  { path: 'create', component: CreateComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
