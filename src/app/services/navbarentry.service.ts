import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {Gesetzbuch} from '../interfaces';
import {HttpClient} from "@angular/common/http";
import {yql} from 'yql';

@Injectable()
export class NavbarentryService {

  private entryArray: Gesetzbuch[] = [];
  private entries = new Subject<Gesetzbuch[]>();

  constructor(public http: HttpClient) {
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

    //add schnittmenge
    /*this.entryArray[name].paragraphen.push(paragraph);
    this.entries.next(this.entryArray);*/
  }

  public getParaArrayFromString(input: string): any[] {
    return input.replace(/\s/g, '').split(',');
  }

  public getWebsite() {
    this.http.get("http://bundestag.github.io/gesetze/", {responseType: 'text'})
      .subscribe(
        data => {
          alert(data);
        },
          err => {
          alert(':(');
    });
  }

}
