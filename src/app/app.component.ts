import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <div class="jumbotron text-center">
      <h1>The App Lives!</h1>
      <p>{{ message }}</p>
    </div>
  `
})
export class AppComponent implements OnInit {
    public message : string;

  constructor() {}

  ngOnInit() {
      this.message = 'hello world';
  }
}