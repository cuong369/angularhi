import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  idEmail: string;
  @Input() placeholderContent: string;
  @Output() getText = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  getInputValue(event: any) {
    this.getText.emit(event.target.value);
  }

}
