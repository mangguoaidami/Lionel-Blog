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
    /**
     * login表单提交
     */
    public onSubmit() {
        this.submitted = true;      //绑定submitted
        this.authService.login(this.email.value, this.password.value)
            .subscribe(
                data => {
                    this.router.navigate(['/pages'])
                },
                err => {
                    console.error(err);
                }
            )
        
    }
}
