import { Component, OnInit, OnDestroy, AfterViewInit, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated'; 
import { AngularFireAuth } from 'angularfire2/auth';    //  FirebaseAuth    🔥 🔥 🔥 🔥 🔥
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';


import { AuthService } from './../../theme/services/authService/auth.service';
import { window } from 'rxjs/operator/window';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, AfterViewInit, OnDestroy{
    public submitted: boolean = false;
    public email: AbstractControl;
    public password: AbstractControl;
    public form: FormGroup;
    public ifShowLoadig: boolean = false;
    
    public user: any;   //current user message...
    // public items: FirebaseListObservable<any[]>;
    // public msgVal: string = '';
    // public userState: any; 
    public subscribtion: any;

    public ifShowSendValiBtn: boolean = false;
    public ifShowSignin: boolean = true;
    public ifShowSignup: boolean = true;

    @ViewChild('focusInput') inputE: ElementRef;

    constructor( private fb: FormBuilder, private router: Router, public afAuth: AngularFireAuth,public afDataBase: AngularFireDatabase, private authService: AuthService) {
        this.form = fb.group({
            'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
        });
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];

        /** watching auth state 👁 👁 👁 */
        this.subscribtion = this.afAuth.authState.subscribe( () => {
            this.user = firebase.auth().currentUser;
            // this.user = localStorage.getItem()...
            console.log(this.user);
        });
    };

    

    ngOnInit() {};

    ngAfterViewInit() {
        this.inputE.nativeElement.focus();
    };

    ngOnDestroy() {
        this.subscribtion.unsubscribe();
    }

    passAuth() {
        localStorage.setItem('auth_token', 'success');  //pass Auth
        this.router.navigate(['/pages/list']);
    };

    // loggingTips() {
    //     console.log('受中国大陆网络影响，本站暂时只能通过翻墙登录和注册。详情可邮件作者：lionelzhang123@gmail.com');
    // };

    /**
     * Sign in with email 💪 
     */
    onSubmit() {
        this.ifShowLoadig = true;
        this.afAuth.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
        .catch(error => {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            }else {
                alert(errorMessage);
            }
            console.log(error);
            this.ifShowLoadig = false;
        })
        .then(data => {
            if (data.emailVerified) {
                console.log('success sign in with email!');
                this.passAuth();  //pass Auth
            }else {
                alert('Please validate your acount of email.')
            };
        });
    };

    /**
     * SignIn with Google... 💪
     */
    signInWithGoogle() {
        // Creates the provider object.
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        // Sign in with popup:
        this.afAuth.auth.signInWithPopup(provider)
            .catch(error => {
                alert(error);
            })
            .then(data => {
                // The firebase.User instance:
                let user = data.user;
                // The Facebook firebase.auth.AuthCredential containing the Facebook
                // access token:
                let credential = data.credential;
                console.log('success sign in with Google!');
                this.passAuth();  //pass Auth
            }, error => {
                // The provider's account email, can be used in case of
                // auth/account-exists-with-different-credential to fetch the providers
                // linked to the email:
                let email = error.email;
                // The provider's credential:
                let credential = error.credential;
                // In case of auth/account-exists-with-different-credential error,
                // you can fetch the providers using this:
                if (error.code === 'auth/account-exists-with-different-credential') {
                    // this.afAuth.auth.fetchProvidersForEmail(email).then(function(providers) {
                    // // The returned 'providers' is a list of the available providers
                    // // linked to the email address. Please refer to the guide for a more
                    // // complete explanation on how to recover from this error.
                    // });
                    alert('You have signed up with a different provider for that email.');
                }
            });
    };

    /**
     * SignIn with Github... 💪
     */
    signInWithGithub() {
        let provider = new firebase.auth.GithubAuthProvider();
        provider.addScope('repo');
        this.afAuth.auth.signInWithPopup(provider).then((result) => {
            // This gives you a GitHub Access Token.
            let token = result.credential.accessToken;
            // The signed-in user info.
            let user = result.user;
            console.log('Success sign in with Github.');
            this.passAuth();  //pass Auth
            /** Redirect... */
        }).catch((error) => {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // The email of the user's account used.
            // let email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;
            if (errorCode === 'auth/account-exists-with-different-credential') {
                alert('You have signed up with a different provider for that email.');
            } else {
                alert(error);
                console.error(error);
            }
        });
    };

    /**
     * SignIn with Twitter... 💪
     */
    signInWithTwitter() {
        let provider = new firebase.auth.TwitterAuthProvider();
        firebase.auth().languageCode = 'pt';
        this.afAuth.auth.signInWithPopup(provider).then((result) => {
            // This gives you a GitHub Access Token.
            let token = result.credential.accessToken;
            let secret = result.credential.secret;
            // The signed-in user info.
            let user = result.user;
            console.log('Success sign in with Twitter.');
            this.passAuth();  //pass Auth

            /** Redirect... */
        }).catch((error) => {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // The email of the user's account used.
            let email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;
            if (errorCode === 'auth/account-exists-with-different-credential') {
                alert('You have signed up with a different provider for that email.');
                // Handle linking here if your app allows it.
            } else {
                console.error(error);
            }
        });
    };

    /**
     * SignIn with Facebook... 💪
     */
    signInWithFacebook() {
        let provider = new firebase.auth.FacebookAuthProvider();
        provider.addScope('user_birthday');
        firebase.auth().languageCode = 'fr_FR';
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            let token = result.credential.accessToken;
            // The signed-in user info.
            let user = result.user;
            // ...
            console.log('Success sign in with Facebook.');
            this.passAuth();  //pass Auth
          }).catch(function(error) {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            // The email of the user's account used.
            let email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            let credential = error.credential;
            // ...
          });
    };



    /**
     * register 💪
     */  
    signup() {
        this.ifShowSendValiBtn = true;
        this.ifShowSignin = false;
        this.ifShowSignup = false;
        this.afAuth.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
        .catch(error => {
            // Handle Errors here.
            let errorCode = error.code;
            let errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            };
            console.log(error);
            this.ifShowSignin = true;
            this.ifShowSignup = true;
            this.ifShowSendValiBtn = false;
        });
    };

    /**
     * Send verified 💪
     */
    send_valification() {
        // this.af.signInWithEmailAndPassword('ddas', 'dadas');
        this.afAuth.auth.currentUser.sendEmailVerification()
        .catch(error => {
            alert('error:' + error);
        })
        .then(() => {
            alert('Please log in after you verify the email!');
            this.ifShowSendValiBtn = false;
            this.ifShowSignin = true;
        });
    };
}
