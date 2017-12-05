import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ViewModelService} from "../../services/view-model.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public expanded = false;
  @ViewChild('contentwrapper') contentwrapper;
  @Input() header: string;
  @Input() inView: true;


  constructor(vms: ViewModelService) {
  }

  ngOnInit() {
  }

  toggle(): void {
    this.expanded = !this.expanded;

  }

}
