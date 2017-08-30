import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './angular-sigle.routing';
import { AngularSigleComponent } from './angular-sigle.component';
@NgModule({
    imports: [ CommonModule, routing ],
    declarations: [ AngularSigleComponent ]
})

export class AngularSigleModule {}
