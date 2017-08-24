import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
    public message : string;

  constructor() {}

  ngOnInit() {
      this.message = 'hello world';
  }
}