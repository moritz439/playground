import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public expanded = false;
  @ViewChild('contentwrapper') contentwrapper;
  @Input() header: string;

  constructor() {
  }

  ngOnInit() {
  }

  toggle(): void {
    this.expanded = !this.expanded;

  }

}
