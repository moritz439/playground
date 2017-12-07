import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NavbarentryService} from "../../services/navbarentry.service";

@Component({
  selector: 'app-navbarentry',
  templateUrl: './navbarentry.component.html',
  styleUrls: ['./navbarentry.component.scss']
})
export class NavbarentryComponent implements OnInit {

  public open = false;
  @Input() header: string;
  @Input() paragraphen: number[];
  @ViewChild('textfield') textfield;
  public paratext: string;
  public initparas;

  constructor(public nes: NavbarentryService) {
  }

  ngOnInit() {
    this.initparas = this.paragraphen;
  }

  toggle(): void {
    this.open = !this.open;
  }

  updateparas() {
    console.log('--------');
    let textfeld = new Set(this.nes.getParaArrayFromString(this.textfield.nativeElement.value));

    let newparas: number[] = [];

    textfeld.forEach(v => {
      newparas.push(v);
    });

    this.nes.updateEntry(this.header, newparas);

  }

}
