import {Component} from '@angular/core';
import {NavbarentryService} from "./services/navbarentry.service";
import {Gesetzbuch} from "./interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  public navbarEntrys: Gesetzbuch[];

  constructor(public nes: NavbarentryService) {



    nes.getEntries().subscribe(v => {
      this.navbarEntrys = v;
    });


    //mocks
    nes.addEntry({
      name: 'Test',
      basisUrl: 'google.de',
      paragraphen: [255, 33]
    });
    nes.addEntry({
      name: 'Test1',
      basisUrl: 'google.de',
      paragraphen: [255, 33, 444]
    });
    //mocks ende
  }

  addEntry() {
    this.nes.addEntry({
      name: 'Tessst',
      basisUrl: 'google.de',
      paragraphen: [255, 33]
    });
  }

}
