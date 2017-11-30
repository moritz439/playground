import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarentryComponent } from './components/navbarentry/navbarentry.component';
import { MaincontentComponent } from './components/maincontent/maincontent.component';
import { PopupComponent } from './components/popup/popup.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarentryComponent,
    MaincontentComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
