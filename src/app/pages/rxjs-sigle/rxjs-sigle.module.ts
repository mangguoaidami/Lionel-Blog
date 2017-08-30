import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './rxjs-sigle.routing';
import { RxjsSigleComponent } from './rxjs-sigle.component';
@NgModule({
    imports: [ CommonModule, routing ],
    declarations: [ RxjsSigleComponent ]
})

export class RxjsSigleModule {}
