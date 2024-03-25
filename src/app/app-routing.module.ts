import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AyatComponent } from './ayat/ayat.component';
import { SliderComponent } from './slider/slider.component';
import { AdeiaComponent } from './adeia/adeia.component';
const routes: Routes = [
  {
    path:'',component: HomeComponent
  },

  // {
  //   path: 'surahs/:id', component: AyatComponent
  // },
  // {
  //   path: 'slider/:id', component: SliderComponent // Assuming there's a SliderComponent to render slider/:id route
  // }
  {
    path: ':type/:id', component: AyatComponent
  },
  {
    path:'adeia', component:AdeiaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
