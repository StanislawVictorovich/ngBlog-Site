import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogsListComponent } from './blogs-list/blogs-list.component';


const routes: Routes = [
  {
    path: '',
    component: BlogsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
