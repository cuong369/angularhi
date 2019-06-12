import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-show-hide-menu',
  templateUrl: './show-hide-menu.component.html',
  styleUrls: ['./show-hide-menu.component.css']
})
export class ShowHideMenuComponent implements OnInit {

  @Input() clickMe: boolean;

  constructor() { }

  ngOnInit() {
  }

}
