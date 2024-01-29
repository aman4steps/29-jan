import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardSidebarComponent } from './dashboard/dashboard-sidebar/dashboard-sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './dashboard/header/header.component';
import { HomeDashboardComponent } from './dashboard/pages/home-dashboard/home-dashboard.component';

import { AllpostsComponent } from './dashboard/pages/blogs/allposts/allposts.component';
import { AddNewPostComponent } from './dashboard/pages/blogs/add-new-post/add-new-post.component';
import { CategoryComponent } from './dashboard/pages/blogs/category/category.component';
import { TagComponent } from './dashboard/pages/blogs/tag/tag.component';
import { HomeComponent } from './website/home/home.component';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
// import { FooterComponent } from './website/footer/footer.component';
import { HeroBannerComponent } from './website/home/hero-banner/hero-banner.component';
import { WebsiteHeaderComponent } from './website/website-header/website-header.component';
import { WebsiteFooterComponent } from './website/website-footer/website-footer.component';
import { HomeTopComponent } from './website/home/home-top/home-top.component';
import { HomeBanner1Component } from './website/home/home-banner1/home-banner1.component';
import { HomeReviewsSectionComponent } from './website/home/home-reviews-section/home-reviews-section.component';
import { HomeCardsComponent } from './website/home/home-cards/home-cards.component';
import { SingleCardComponent } from './website/home/home-cards/single-card/single-card.component';
import { HomeCard2Component } from './website/home/home-card-2/home-card-2.component';
import { HomeTyBlogComponent } from './website/home/home-ty-blog/home-ty-blog.component';
import { ToastedCardComponent } from './website/home/toasted-card/toasted-card.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardSidebarComponent,
    HeaderComponent,
    HomeDashboardComponent,
    AllpostsComponent,
    AddNewPostComponent,
    CategoryComponent,
    TagComponent,
    HomeComponent,
    HeroBannerComponent,
    WebsiteHeaderComponent,
    WebsiteFooterComponent,
    HomeTopComponent,
    HomeBanner1Component,
    HomeReviewsSectionComponent,
    HomeCardsComponent,
    SingleCardComponent,
    HomeCard2Component,
    HomeTyBlogComponent,
    ToastedCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }