import {Component, Input, OnInit, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-navbarentry',
  templateUrl: './navbarentry.component.html',
  styleUrls: ['./navbarentry.component.scss']
})
export class NavbarentryComponent implements OnInit {

  public open = false;
  @Input() header: string;
  @Input() paragraphen;
  public paratext: string;

  constructor() {
  }

  ngOnInit() {
  }


  toggle(): void {
    this.open = !this.open;
  }


}
