import { Component, OnInit, AfterViewInit, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';    //  FirebaseAuth    🔥 🔥 🔥 🔥 🔥
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';


import { AuthService } from './../../theme/services/authService/auth.service';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, AfterViewInit{
    public submitted: boolean = false;
    public email: AbstractControl;
    public password: AbstractControl;
    public form: FormGroup;
    public ifShowLoadig: boolean = false;
    
    public user: Observable<firebase.User>;
    public items: FirebaseListObservable<any[]>;
    public msgVal: string = '';
    public userState: any;  //? ? ?

    public ifShowSendValiBtn: boolean = false;
    public ifShowSignin: boolean = true;
    public ifShowSignup: boolean = true;

    @ViewChild('myInput') inputE: ElementRef;

    constructor( private fb: FormBuilder, private router: Router, public afAuth: AngularFireAuth, public afDataBase: AngularFireDatabase, private authService: AuthService){
        this.form = fb.group({
            'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
        });
        this.email = this.form.controls['email'];
        this.password = this.form.controls['password'];
        /** watching auth state 👁 👁 👁 */
        this.afAuth.authState.subscribe( auth => {
            // this.user = auth;
            console.log(auth);
            // if (auth != null && auth.emailVerified) {
            //     authObsever.unsubscribe();
            // };
        });
    };

    ngOnInit() {
    //   console.log('1.copy this code in your constol: localStorage.setItem("auth_token", "QpwL5tke4Pnpja7X")' +
    //   '\n' +
    //   '2.Input account to login => username: peter@klaven, password: cityslicka');
    };

    ngAfterViewInit() {
        this.inputE.nativeElement.focus();
    };

    /**
     * login表单提交 💪 
     */
    onSubmit() {
        this.ifShowLoadig = true;
        this.submitted = true;      // 绑定submitted
        
        this.afAuth.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            })
            .then(data => {
                // console.log('Login access!');
                // this.authService.passAuthValidation();
                if (data.emailVerified) {
                    localStorage.setItem('auth_token', 'auccess');  //pass Auth
                    this.router.navigate(['/pages']);
                }
            })
    };

    signup() {
        this.ifShowSendValiBtn = true;
        this.ifShowSignin = false;
        this.ifShowSignup = false;
        this.afAuth.auth.createUserWithEmailAndPassword(this.email.value, this.password.value)
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            };
            console.log(error);
        })
        // .then(data => {
        //     console.log('Complated create acount.')
        // })
    };

    /**
     * send verified
     */
    send_valification() {
        // this.af.signInWithEmailAndPassword('ddas', 'dadas');
        this.afAuth.auth.currentUser.sendEmailVerification()
        .catch(error => {
            alert('error:' + error);
        })
        .then(() => {
            window.alert('Please log in after you verify the email!');
            this.ifShowSendValiBtn = false;
            this.ifShowSignin = true;
        });
    };
}
