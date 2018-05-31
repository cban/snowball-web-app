import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router'

import {LoginComponent} from './Login/login/login.component';
import { DashboardComponent} from './dashboard/dashboard/dashboard.component'

 
const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path:"dashboard",component:DashboardComponent}];

@NgModule({
  imports: [
    CommonModule,[RouterModule.forRoot(routes)]
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
export const routingComponents = [DashboardComponent,LoginComponent]
