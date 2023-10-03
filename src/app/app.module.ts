import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialHeaderComponent } from './components/social-header/social-header.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialHeaderComponent,
    MainHeaderComponent,
    BigCardComponent,
    CarouselComponent,
    SmallCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
