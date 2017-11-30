import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarentryComponent } from './components/navbarentry/navbarentry.component';
import { MaincontentComponent } from './components/maincontent/maincontent.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarentryComponent,
    MaincontentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
