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
        visibility: 'hidden',
        transform: 'scale(1.1)'
      })),
      state('hidden', style({
        opacity: 1,
        visibility: 'visible',
        transform: 'scale(1)'
      })),
      transition('hidden => visible', animate('200ms')),
      transition('visible => hidden', animate('200ms')),
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
