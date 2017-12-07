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

  constructor(public nes: NavbarentryService) {
  }

  ngOnInit() {
  }

  toggle(): void {
    this.open = !this.open;
  }

  updateparas() {
    console.log('--------');
    let textfeld = new Set(this.nes.getParaArrayFromString(this.textfield.nativeElement.value));
    let nepara = new Set(this.paragraphen);

    let newparas: number[] = [];

    textfeld.forEach(v => {
      //console.log(nepara, ' hat:' +  v + ' ' + nepara.has(Number.parseInt(v)));
      newparas.push(v);
    });







     this.nes.updateEntry(this.header, newparas);

  }

}
