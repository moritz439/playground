import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarentryComponent } from './components/navbarentry/navbarentry.component';
import { MaincontentComponent } from './components/maincontent/maincontent.component';
import { PopupComponent } from './components/popup/popup.component';
import {ViewModelService} from "./services/view-model.service";
import {NavbarentryService} from "./services/navbarentry.service";


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
  providers: [ViewModelService, NavbarentryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
