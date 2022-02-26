import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainAddsComponent } from './main-adds/main-adds.component';
// import { PlayButton } from './playng-section/playng-section.component.spec';
import { CashbackSectionComponent } from './cashback-section/cashback-section.component';
import { PlayButtonComponent } from './play-button/play-button.component';
import { OfferBoxComponent } from './offer-box/offer-box.component';
import { FooterFaqComponent } from './footer-faq/footer-faq.component';
import { CashbackBoxComponent } from './cashback-box/cashback-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainAddsComponent,
    PlayButtonComponent,
    CashbackSectionComponent,
    OfferBoxComponent,
    FooterFaqComponent,
    CashbackBoxComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
