import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';    //  FirebaseAuth    🔥 🔥 🔥 🔥 🔥
// import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';


// import { User } from './../../models/user';

@Component({
    selector: 'header-app',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, AfterViewInit{
    public showMenu: boolean;
    public logIn: boolean;
    // public currentUser = {
    //     providerId: '',
    //     uid: '',
    //     displayName: '',
    //     email: '',
    //     photoURL: ''
    // };

    constructor(private router: Router, private afAuth: AngularFireAuth) {
        // this.afAuth.authState.subscribe( data => {
        //     if(data != null){
        //         this.currentUser.providerId = data.providerData[0].providerId;
        //         this.currentUser.uid = data.uid;
        //         this.currentUser.displayName = data.displayName;
        //         this.currentUser.email = data.email;
        //         this.currentUser.photoURL = data.photoURL;
        //     }
        // });
    }

    ngOnInit() {
        // this.showMenu = false;
    }

    ngAfterViewInit() {}

    

    /**
     * UserHandle 💪
     * 
     */
    // userHandle() {
    //     this.showUserMenu = !this.showUserMenu;
    // };

    logout() {
        localStorage.removeItem('auth_token');  // 删除localstorage
        this.logIn = false;
        this.router.navigate(['/login']);
        this.afAuth.auth.signOut();
    };
}