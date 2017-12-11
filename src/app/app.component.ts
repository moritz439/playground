import {Component} from '@angular/core';
import {NavbarentryService} from "./services/navbarentry.service";
import {Gesetzbuch} from "./interfaces";
import {ViewModelService} from "./services/view-model.service";
import {HttpClient} from "@angular/common/http";

import htmlparser2 from 'htmlparser2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  public navbarEntrys: Gesetzbuch[];
  public lawbooks = [];


  constructor(public nes: NavbarentryService,
              public vms: ViewModelService,
              public http: HttpClient) {

    nes.getEntries().subscribe(v => {
      this.navbarEntrys = v;
    });

    this.init();

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

  init() {
    const selector = '.table.table-striped tr td:nth-child(2)';
    this.http.get('http://bundestag.github.io/gesetze/', {responseType: 'text'})
      .subscribe(
        data => {
          this.parse(data);
        },
        error => {
          alert(error);
        }
      );
  }

  parse(data: string): void {
    let parser = new htmlparser2.Parser(
      {
        onopentag: (name, attribs) => {
          if (name === 'tr' && attribs.id) {
            this.lawbooks.push(attribs.id);
          }
        },
        ontext: (text) => {

        },
        onclosetag: (tagname) => {
          if (tagname === "script") {

          }
        }
      }, {decodeEntities: true});

    parser.write(data);
    this.nes.lawbooks = this.lawbooks;
    parser.end;
  }
}
