import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AllpostsComponent } from './dashboard/pages/blogs/allposts/allposts.component';
import { HomeDashboardComponent } from './dashboard/pages/home-dashboard/home-dashboard.component';
import { AddNewPostComponent } from './dashboard/pages/blogs/add-new-post/add-new-post.component';
import { HomeComponent } from './website/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { 
    path: '', component: HomeComponent ,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
}
