import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersTableComponent } from './components/users-table/users-table.component';


const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersTableComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }

