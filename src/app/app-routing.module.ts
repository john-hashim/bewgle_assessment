import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LocationComponent } from './location/location.component';
import { RatingComponent } from './rating/rating.component';


const routes: Routes = [
  {path:'rating',component:RatingComponent},
  {path:'about',component:AboutComponent},
  {path:'location',component:LocationComponent},
  {path:'**',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }