import { Component } from "@angular/core";

@Component({
    selector: 'pages',
    styleUrls: [],
    template: `
        <div class="jumbotron text-center">
        <h1>The App Lives!</h1>
        <p>{{ message }}</p>
        </div>
        <div>this is pages!</div>
    `
})

export class PagesComponent {}