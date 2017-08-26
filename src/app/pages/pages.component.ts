import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'pages',
    styleUrls: ['./pages.component.scss'],
    // template: `
    //     <div class="jumbotron text-center">
    //         <h1 [routerLink]="['/pages']">navbar!</h1>
    //         <ul>
    //             <li [routerLink]="['/pages/source']">资源下载</li>
    //             <li [routerLink]="['/pages/about']">关于我</li>
    //         </ul>
    //     </div>
    //     <router-outlet></router-outlet>
    //     <footer class="text-center">this is footer!</footer>
    // `
    templateUrl: './pages.component.html'
})

export class PagesComponent implements OnInit{
    public message: string;
    ngOnInit(){}
}