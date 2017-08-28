import { Component } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../theme/services/authService/auth.service';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {
    public submitted: boolean = false;
    public email:AbstractControl;
    public password:AbstractControl;
    // public model = {'userLoginId': '', 'password': ''};
    public form: FormGroup;

    constructor(private authService: AuthService, private fb: FormBuilder, private router: Router){
        this.form = fb.group({
            'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
          });

          this.email = this.form.controls['email'];
          this.password = this.form.controls['password'];
    }

    public onSubmit(values:Object):void {
        this.submitted = true;
        sessionStorage.setItem("blog.testToken", "test");
        let localToken = sessionStorage.getItem("blog.testToken");
        // console.log(localToken);
        if(localToken == 'test'){
            // window.location.href = 'http://localhost:3000/#/pages';
            this.router.navigate(['/pages']);
        }
    
    //     if(sessionStorage.getItem("blog.testing") !== "testing"){
    //       alert("请启用浏览器的存储，以确保良好体验");
    //     } 
    //     else if (this.form.valid) {
    //       this.authService.login(this.model).subscribe(
    //         res => {
    //           let body = res.json();
    //           sessionStorage.setItem("isk.accessToken", body.accessToken);
    //           sessionStorage.setItem("isk.refreshToken", body.refreshToken);
    //           sessionStorage.setItem("isk.expiration", (new Date().getTime() + 86400000).toString()); //1day
    //           this.router.navigate(['/pages']);
    //         },
    //         error => {
    //           alert("登录失败，请确保您的用户名和密码正确");
    //           console.log(error)
    //         }
    //       );
    //     }
    //   }
}