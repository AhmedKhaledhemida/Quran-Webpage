import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HomesearchComponent } from './homesearch/homesearch.component';
import { SurahsComponent } from './surahs/surahs.component';
import { HttpClientModule } from '@angular/common/http';
import { AyatComponent } from './ayat/ayat.component';
import { SliderComponent } from './slider/slider.component';
import { AdeiaComponent } from './adeia/adeia.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HomesearchComponent,
    SurahsComponent,
    AyatComponent,
    SliderComponent,
    AdeiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
