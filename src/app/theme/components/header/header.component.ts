import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'header-app',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent{
    public logIn: boolean;

    constructor(private router: Router){}

    logout(){
        localStorage.removeItem("auth_token");//删除localstorage
        this.logIn = false;
        this.router.navigate(['/login'])
    };
}