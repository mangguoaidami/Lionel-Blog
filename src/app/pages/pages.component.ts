import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'pages',
    styleUrls: [],
    template: `
        <div class="jumbotron text-center">
            <h1>navbar!</h1>
        </div>
        <router-outlet></router-outlet>
        <footer class="text-center">this is footer!</footer>
    `
})

export class PagesComponent implements OnInit{
    public message: string;
    ngOnInit(){}
}