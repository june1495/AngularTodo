/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todobody',
  templateUrl: './todobody.component.html',
  styleUrls: ['./todobody.component.css'],
})
export class TodobodyComponent implements OnInit {
  email: string = '';
  username: string = '';
  password: string = '';
  constructor() {}

  ngOnInit(): void {
    this.email;
  }
}
