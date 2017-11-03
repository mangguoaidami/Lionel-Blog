import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';


import { AuthService } from './../../theme/services/authService/auth.service';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnChanges{
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

    ngOnInit() {
      console.log('1.copy this code in your constol: localStorage.setItem("auth_token", "QpwL5tke4Pnpja7X")'+ '\n' + '2.Input account to login => username: peter@klaven, password: cityslicka');
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
