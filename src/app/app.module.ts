import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatSnackBarModule} from '@angular/material/snack-bar'


import { LocationComponent } from './location/location.component';
import { RatingComponent } from './rating/rating.component';
import { AboutComponent } from './about/about.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocationComponent,
    RatingComponent,
    AboutComponent

  ],
  imports: [
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatCarouselModule.forRoot(),
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

