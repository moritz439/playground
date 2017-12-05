import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ViewModelService} from "../../services/view-model.service";
import {NavbarentryService} from "../../services/navbarentry.service";

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
  @ViewChild('url') urlfeld;
  @ViewChild('bezeichnung') bezeichnung;
  @ViewChild('paragraphen') paragraphen;


  constructor(private vms: ViewModelService, private nes: NavbarentryService) {

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
    this.test();
    this.resetForm();
  }

  add() {
    const valName = this.bezeichnung.nativeElement;
    const valURL = this.urlfeld.nativeElement;
    const valPara = this.paragraphen.nativeElement.value.replace(/\s/g, '').split(',');

    if ((valName.value.replace(/\s/g, '') && valURL.value.replace(/\s/g, '')) !== ('' && ' ')) {
      this.nes.addEntry({
        name: valName.value,
        basisUrl: valURL.value,
        paragraphen: valPara
      });
      this.test();
      this.resetForm();
    }
  }

  resetForm() {
    this.bezeichnung.nativeElement.value = '';
    this.urlfeld.nativeElement.value = '';
    this.paragraphen.nativeElement.value = '';
  }

}
