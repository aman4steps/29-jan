import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../website/home/home.component';
import { DashboardComponent } from './dashboard.component';
import { HomeDashboardComponent } from './pages/home-dashboard/home-dashboard.component';
import { AllpostsComponent } from './pages/blogs/allposts/allposts.component';
import { AddNewPostComponent } from './pages/blogs/add-new-post/add-new-post.component';

// import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { 
    path: 'admin-panel', component: DashboardComponent ,
    children: [
      // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      
      { 
        path: 'dashboard', component: HomeDashboardComponent
      },
      { 
        path: 'allpost', component: AllpostsComponent
      },
      { 
        path: 'admin-new-post-create', component: AddNewPostComponent
      },
      { 
        path: '',redirectTo: 'dashboard',pathMatch: 'full'
      },
    ], 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { 
}
