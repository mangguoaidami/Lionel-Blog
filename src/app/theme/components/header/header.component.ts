import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';    //  FirebaseAuth    🔥 🔥 🔥 🔥 🔥
// import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/switchMap'


// import { User } from './../../models/user';

@Component({
    selector: 'header-app',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy{
    public showmenu: boolean;
    public currentUser = {
        providerId: null,
        uid: '',
        displayName: '',
        email: '',
        photoURL: ''
    };
    public subscription;

    constructor(private router: Router, private afAuth: AngularFireAuth) {
        this.showmenu = false;
        this.subscription = afAuth.authState.subscribe( data => {
            if(data != null){
                this.currentUser.providerId = data.providerData[0].providerId;
                this.currentUser.uid = data.uid;
                this.currentUser.displayName = data.displayName;
                this.currentUser.email = data.email;
                this.currentUser.photoURL = data.photoURL;
                console.log(data);
            }
        });
    }

    ngOnInit() {}

    ngAfterViewInit() {}

    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subscription.unsubscribe();
    }

    click(){
        this.showmenu = !this.showmenu;
        console.log(this.showmenu);
    }

    

    /**
     * UserHandle 💪
     * 
     */
    // userHandle() {
    //     this.showUserMenu = !this.showUserMenu;
    // };

    logout() {
        this.afAuth.auth.signOut()
            .then( success => {
                localStorage.removeItem('auth_token');  // 删除localstorage
                this.router.navigate(['/login']);
            }, error => {
                alert(error);
            })
        
    };
}