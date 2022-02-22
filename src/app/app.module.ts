import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainAddsComponent } from './main-adds/main-adds.component';
// import { PlayButton } from './playng-section/playng-section.component.spec';
import { CashbackSectionComponent } from './cashback-section/cashback-section.component';
import { PlayButtonComponent } from './playng-section/play-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainAddsComponent,
    PlayButtonComponent,
    CashbackSectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
