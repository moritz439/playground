import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

export interface Gesetzbuch {
  name: string;
  basisUrl: string;
  paragraphen: number[];
}

@Injectable()
export class NavbarentryService {

  private entryArray: Gesetzbuch[];
  private entries: Subject<Gesetzbuch[]>;


  constructor() {
    //GB-Mocks
    this.addEntry({
      name: "Test",
      basisUrl: "google.de",
      paragraphen: [255, 33]
    });
  }

  public addEntry(gb: Gesetzbuch) {
    this.entryArray.push(gb);
    this.entries.next(this.entryArray);
  }

  public getEntries(): Observable<Gesetzbuch[]> {
    return this.entries.asObservable();
  }

}
