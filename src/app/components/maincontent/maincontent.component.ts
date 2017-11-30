import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.scss']
})
export class MaincontentComponent implements OnInit {

  @Input() header: string;
  @Input() subheader: string;
  @Input() content: string;


  constructor() { }

  ngOnInit() {
  }

}
