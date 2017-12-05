import {Component, Input, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-navbarentry',
  templateUrl: './navbarentry.component.html',
  styleUrls: ['./navbarentry.component.scss']
})
export class NavbarentryComponent implements OnInit {

  public open = false;
  @Input() header: string;
  public paratext: string;

  constructor() { }

  ngOnInit() {
  }


  toggle(): void{
  this.open = !this.open;
  }


}
