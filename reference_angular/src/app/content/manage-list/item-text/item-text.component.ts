import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-text',
  templateUrl: './item-text.component.html',
  styleUrls: ['./item-text.component.css']
})
export class ItemTextComponent implements OnInit {

  @Input() email: string;

  constructor() { }

  ngOnInit() {
  }

}
