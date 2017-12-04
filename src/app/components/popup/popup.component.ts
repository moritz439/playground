import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  animations: [
    trigger('visibility', [
      state('visible', style({
        opacity: 0,
        visibility: 'hidden'
      })),
      state('hidden', style({
        opacity: 1,
        visibility: 'visible'
      })),
      transition('hidden => visible', animate('100ms')),
      transition('visible => hidden', animate('100ms')),
    ])
  ]
})
export class PopupComponent implements OnInit {

  public visibility = 'visible';

  constructor() {
  }

  ngOnInit() {
  }

  test() {
    this.visibility = (this.visibility === 'hidden') ? 'visible' : 'hidden';
  }

}
