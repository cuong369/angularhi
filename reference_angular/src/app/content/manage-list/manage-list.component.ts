import { UserdbService } from './../../userdb.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-manage-list',
  templateUrl: './manage-list.component.html',
  styleUrls: ['./manage-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ManageListComponent implements OnInit {

  constructor(private userService: UserdbService) { }

  ngOnInit() {
  }

}
