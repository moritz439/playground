import {Component, Input, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ViewModelService} from "../../services/view-model.service";

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
  animations: [
    trigger('visibility', [
      state('hidden', style({
        opacity: 0,
        visibility: 'hidden',
        transform: 'scale(1.05)'
      })),
      state('visible', style({
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

  public visibility = 'hidden';
  @Input() inView = true;

  constructor(private vms: ViewModelService) {
  }

  ngOnInit() {
  }

  test() {
    if (this.visibility === 'hidden') {
      this.visibility = 'visible';
      this.vms.viewModel.addURLOpen = true;

    } else {

      this.visibility = 'hidden';
      this.vms.viewModel.addURLOpen = false;
    }
  }
  cancel() {
    this.visibility = 'hidden';
    this.vms.viewModel.addURLOpen = false;
  }

  add() {

  }

}
