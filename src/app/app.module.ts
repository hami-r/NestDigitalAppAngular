import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';

let myRoutes:Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"gallery",
    component:GalleryComponent
  },
  {
    path:"contact",
    component:ContactUsComponent
  },
  {
    path:"about",
    component:AboutUsComponent
  },
  {
    path:"adminlogin",
    component:AdminLoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeNavbarComponent,
    HomeComponent,
    GalleryComponent,
    ContactUsComponent,
    AboutUsComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
