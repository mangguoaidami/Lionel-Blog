import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { routing } from './login.routing';

@NgModule({
    imports: [ CommonModule, routing, FormsModule, ReactiveFormsModule ],
    declarations: [ LoginComponent ]
    // providers: []
})

export class LoginModule {}