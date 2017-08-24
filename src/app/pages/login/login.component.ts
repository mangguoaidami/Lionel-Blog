import { Component } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';

import { AuthService } from './../../theme/services/authService/auth.service';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent {
    public submitted: boolean;
    public model = {'userLoginId': '', 'password': ''};
    public form: FormGroup;

    constructor(private authService: AuthService){}

    public onSubmit(values:Object):void {
        this.submitted = true;
        sessionStorage.setItem("blog.testing", "testing");
    
        if(sessionStorage.getItem("blog.testing") !== "testing"){
          alert("请启用浏览器的存储，以确保良好体验");
        } 
        // else if (this.form.valid) {
        //   this.authService.login(this.model).subscribe(
        //     res => {
        //       let body = res.json();
        //       sessionStorage.setItem("isk.accessToken", body.accessToken);
        //       sessionStorage.setItem("isk.refreshToken", body.refreshToken);
        //       sessionStorage.setItem("isk.expiration", (new Date().getTime() + 86400000).toString()); //1day
        //       this.router.navigate(['/pages']);
        //     },
        //     error => {
        //       alert("登录失败，请确保您的用户名和密码正确");
        //       console.log(error)
        //     }
        //   );
        // }
      }
}