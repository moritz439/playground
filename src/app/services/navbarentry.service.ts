import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Gesetzbuch} from '../interfaces';

@Injectable()
export class NavbarentryService {

  private entryArray: Gesetzbuch[] = [];
  private entries = new Subject<Gesetzbuch[]>();


  constructor() {}

  public addEntry(gb: Gesetzbuch) {
    this.entryArray.push(gb);
    this.entries.next(this.entryArray);
  }

  public getEntries(): Observable<Gesetzbuch[]> {
    return this.entries.asObservable();
  }

}
