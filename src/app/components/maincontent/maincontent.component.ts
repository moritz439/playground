import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.scss']
})
export class MaincontentComponent implements OnInit {

  private _subheader;

  @Input() header: string;

  @Input()
  set subheader(v) {
    this._subheader = v.toString().replace(/,/g, ', ');
  }

  @Input() content: string;


  constructor() {
  }

  ngOnInit() {
  }

}
