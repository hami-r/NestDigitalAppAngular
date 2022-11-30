import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeNavbarComponent } from './home-navbar/home-navbar.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';

let myRoutes:Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"gallery",
    component:GalleryComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeNavbarComponent,
    HomeComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
