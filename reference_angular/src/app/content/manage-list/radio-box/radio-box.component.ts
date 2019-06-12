import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio-box',
  templateUrl: './radio-box.component.html',
  styleUrls: ['./radio-box.component.css']
})
export class RadioBoxComponent implements OnInit {

  @Input() getId: string;
  @Input() role: number;
  @Input() email: string;
  @Output() getCheck = new EventEmitter<any>();
  emailLogin = localStorage.getItem('email');

  constructor() { }

  ngOnInit() {
  }

  getStatus(event: any) {
    this.getCheck.emit(event);
    console.log(event);
  }

}
