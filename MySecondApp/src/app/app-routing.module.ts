import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AmitParentComponent } from './amit-parent/amit-parent.component';
import {HomeComponent} from './home/home.component'


const routes: Routes = [    
  {path: 'parent', component: AmitParentComponent},
  {path: 'home', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
