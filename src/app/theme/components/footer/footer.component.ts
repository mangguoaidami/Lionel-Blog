import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'footer-app',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit{
    public data: string;

    constructor(){
        this.data = new Date().toLocaleDateString();
    }

    ngOnInit(){}
}