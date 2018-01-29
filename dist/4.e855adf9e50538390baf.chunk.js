webpackJsonp([4],{600:function(t,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=o(5),e=o(49),a=o(103),s=o(615),r=o(638);o.d(i,"LoginModule",(function(){return c}));var c=(function(){function t(){}return t=__decorate([o.i(n.x)({imports:[e.c,r.a,a.a,a.b],declarations:[s.a]})],t)})()},615:function(t,i,o){"use strict";var n=o(5),e=o(103),a=o(27),s=o(151),r=o(289);o.n(r);o.d(i,"a",(function(){return c}));var c=(function(){function t(t,i,o){var n=this;this.fb=t,this.router=i,this.afAuth=o,this.submitted=!1,this.ifShowLoadig=!1,this.ifShowSendValiBtn=!1,this.ifShowSignin=!0,this.ifShowSignup=!0,this.form=t.group({email:["",e.c.compose([e.c.required,e.c.minLength(4)])],password:["",e.c.compose([e.c.required,e.c.minLength(4)])]}),this.email=this.form.controls.email,this.password=this.form.controls.password,this.subscribtion=this.afAuth.authState.subscribe((function(){n.user=r.auth().currentUser,console.log(n.user)}))}return t.prototype.ngOnInit=function(){},t.prototype.ngAfterViewInit=function(){this.inputE.nativeElement.focus()},t.prototype.ngOnDestroy=function(){this.subscribtion.unsubscribe()},t.prototype.passAuth=function(){localStorage.setItem("auth_token","success"),this.router.navigate(["/pages/list"])},t.prototype.onSubmit=function(){var t=this;this.ifShowLoadig=!0,this.afAuth.auth.signInWithEmailAndPassword(this.email.value,this.password.value).catch((function(i){var o=i.code,n=i.message;"auth/wrong-password"===o?alert("Wrong password."):alert(n),console.log(i),t.ifShowLoadig=!1})).then((function(i){i.emailVerified?(console.log("success sign in with email!"),t.passAuth()):alert("Please validate your acount of email.")}))},t.prototype.signInWithGoogle=function(){var t=this,i=new r.auth.GoogleAuthProvider;i.addScope("profile"),i.addScope("email"),this.afAuth.auth.signInWithPopup(i).catch((function(t){alert(t)})).then((function(i){i.user,i.credential;console.log("success sign in with Google!"),t.passAuth()}),(function(t){t.email,t.credential;"auth/account-exists-with-different-credential"===t.code&&alert("You have signed up with a different provider for that email.")}))},t.prototype.signInWithGithub=function(){var t=this,i=new r.auth.GithubAuthProvider;i.addScope("repo"),this.afAuth.auth.signInWithPopup(i).then((function(i){i.credential.accessToken,i.user;console.log("Success sign in with Github."),t.passAuth()})).catch((function(t){var i=t.code;t.message,t.credential;"auth/account-exists-with-different-credential"===i?alert("You have signed up with a different provider for that email."):(alert(t),console.error(t))}))},t.prototype.signInWithTwitter=function(){var t=this,i=new r.auth.TwitterAuthProvider;r.auth().languageCode="pt",this.afAuth.auth.signInWithPopup(i).then((function(i){i.credential.accessToken,i.credential.secret,i.user;console.log("Success sign in with Twitter."),t.passAuth()})).catch((function(t){var i=t.code;t.message,t.email,t.credential;"auth/account-exists-with-different-credential"===i?alert("You have signed up with a different provider for that email."):console.error(t)}))},t.prototype.signInWithFacebook=function(){var t=new r.auth.FacebookAuthProvider;t.addScope("user_birthday"),r.auth().languageCode="fr_FR",r.auth().signInWithPopup(t).then((function(t){t.credential.accessToken,t.user;console.log("Success sign in with Facebook."),this.passAuth()})).catch((function(t){t.code,t.message,t.email,t.credential}))},t.prototype.signup=function(){var t=this;this.ifShowSendValiBtn=!0,this.ifShowSignin=!1,this.ifShowSignup=!1,this.afAuth.auth.createUserWithEmailAndPassword(this.email.value,this.password.value).catch((function(i){var o=i.code,n=i.message;"auth/weak-password"==o?alert("The password is too weak."):alert(n),console.log(i),t.ifShowSignin=!0,t.ifShowSignup=!0,t.ifShowSendValiBtn=!1}))},t.prototype.send_valification=function(){var t=this;this.afAuth.auth.currentUser.sendEmailVerification().catch((function(t){alert("error:"+t)})).then((function(){alert("Please log in after you verify the email!"),t.ifShowSendValiBtn=!1,t.ifShowSignin=!0}))},__decorate([o.i(n._11)("focusInput"),__metadata("design:type",n.K)],t.prototype,"inputE",void 0),t=__decorate([o.i(n._10)({template:o(656),styles:[o(647)]}),__metadata("design:paramtypes",[e.d,a.b,s.b])],t)})()},638:function(t,i,o){"use strict";var n=o(27),e=o(615);o.d(i,"a",(function(){return s}));var a=[{path:"",component:e.a}],s=n.a.forChild(a)},647:function(t,i){t.exports="#login-box{background:url(./../../../assets/img/3626.jpg) no-repeat center center fixed;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;font-family:'Open Sans', sans-serif;height:100%;width:100%;display:flex;align-items:center;position:absolute}.form-group label{color:#444444}.login-card h3{margin:0 auto;text-align:center;font-size:24px;color:#444444}.login-card{display:block;padding:40px;width:500px;background:transparent;margin:0 auto;border-radius:2px;box-shadow:0px 2px 2px rgba(0,0,0,0.3);overflow:hidden}.login-submit{border:0px;color:#fff;text-shadow:0 1px rgba(0,0,0,0.1);background-color:#4d90fe;cursor:pointer}.login-card a{text-decoration:none;color:#ffffff;font-weight:400;text-align:center;display:inline-block;opacity:0.6;transition:opacity ease 0.5s}.login-card a:hover{opacity:1}.login-help{width:100%;text-align:center;font-size:12px;color:#666}.login-help p{margin-bottom:0.5rem}.login-help a{display:inline-block;margin:0 0.3rem 0.5rem;cursor:pointer}.login-help .googleBtn{color:#e73a2f}.login-help .githubBtn{color:#000}.login-help .facebookBtn{color:#334f8d}.login-help .twitterBtn{color:#4ba3eb}.loading{margin:0 auto;display:block}@media (max-width: 550px){.login-card{margin:0px;width:100%;height:100%}.login-submit{position:absolute;bottom:20px;margin:0 auto;width:75%;cursor:pointer}}\n"},656:function(t,i){t.exports='<div id="login-box">\n    <div class="login-card">\n            <h3>Lionel-Blog</h3>\n            <form [formGroup]="form" (ngSubmit)="onSubmit()">\n                <div class="form-group" [ngClass]="{\'has-error\': (!email.valid && email.touched), \'has-success\': (email.valid && email.touched)}">\n                    <label for="formGroupEmail">Email</label>\n                    <input type="text" [formControl]="email" name="formGroupEmail" class="form-control" id="formGroupEmail" placeholder="Email" #focusInput>\n                </div>\n\n                <div class="form-group" [ngClass]="{\'has-error\': (!password.valid && password.touched), \'has-success\': (password.valid && password.touched)}">\n                    <label for="formGroupPassword">Password</label>\n                    <input type="password" [formControl]="password" class="form-control" name="formGroupPassword" id="formGroupPassword" placeholder="Password">\n                </div>\n\n                <div class="login-help">\n                        <p>Affected by the network in mainland China, the site temporarily only through the external network login and registration, please contact the author for details.</p>\n                        <a class="googleBtn" (click)="signInWithGoogle()"><i class="fa fa-google-plus fa-2x" aria-hidden="true"></i></a>\n                        \x3c!-- <a class="githubBtn" (click)="signInWithGithub()"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a> --\x3e\n                        \x3c!-- <a class="facebookBtn" (click)="signInWithFacebook()"><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></a> --\x3e\n                        <a class="twitterBtn" (click)="signInWithTwitter()"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></a>\n                        \n                </div>\n                \n                <div class="form-group">\n                    <button class="btn btn-info btn-block login-submit" id="test_btn" type="submit" [disabled]="!form.valid" *ngIf="ifShowSignin">\n                        <span *ngIf="!ifShowLoadig">Sign in</span>\n                        <img *ngIf="ifShowLoadig" class="loading" src="./../../../assets/img/loading-spinning-bubbles.svg" width="20" height="20" />\n                    </button>\n                    <button class="btn btn-warning btn-block signup-submit" type="button" [disabled]="!form.valid" (click)="signup()"  *ngIf="ifShowSignup">Register</button>\n                    <button class="btn btn-info btn-block signup-submit" type="button" (click)="send_valification()" *ngIf="ifShowSendValiBtn">send verified</button>\n                </div>\n            </form>\n    </div>\n</div>'}});