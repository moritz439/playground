import {Component} from '@angular/core';
import {NavbarentryService} from "./services/navbarentry.service";
import {Gesetzbuch} from "./interfaces";
import {ViewModelService} from "./services/view-model.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  public navbarEntrys: Gesetzbuch[];


  constructor(public nes: NavbarentryService,
              public vms: ViewModelService) {
nes.getWebsite();

    nes.getEntries().subscribe(v => {
      this.navbarEntrys = v;
    });

    //mocks
    nes.addEntry({
      name: 'Test1',
      basisUrl: 'google.de',
      paragraphen: [255, 33]
    });
    nes.addEntry({
      name: 'Test2',
      basisUrl: 'google.de',
      paragraphen: [85, 3, 22]
    });
    nes.addEntry({
      name: 'Test3',
      basisUrl: 'google.de',
      paragraphen: [5, 334, 84]
    });
    nes.addEntry({
      name: 'Test4',
      basisUrl: 'google.de',
      paragraphen: [11, 22, 333]
    });

    vms.viewModel.addURLOpen = false;
    vms.viewModel.navbarOpen = false;
  }
}
