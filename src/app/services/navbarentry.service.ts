import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Gesetzbuch} from '../interfaces';

@Injectable()
export class NavbarentryService {

  private entryArray: Gesetzbuch[] = [];
  private entries = new Subject<Gesetzbuch[]>();
  public lawbooks: string[];

  constructor() {
  }

  public addEntry(gb: Gesetzbuch) {
    this.entryArray.push(gb);
    this.entries.next(this.entryArray);
  }

  public getEntries(): Observable<Gesetzbuch[]> {
    return this.entries.asObservable();
  }

  public updateEntry(name: string, paragraph: number[]) {
    this.entryArray.forEach(v => {
      if (v.name === name) {
        v.paragraphen = paragraph;
      }
    });
    this.entries.next(this.entryArray);
  }

  //Tools
  public getParaArrayFromString(input: string): any[] {
    return input.replace(/\s/g, '').split(',');
  }

}
