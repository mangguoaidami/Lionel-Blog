import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './list.routing';
import { ListComponent } from './list.component';

@NgModule({
    imports: [ routing, CommonModule ],
    declarations: [ ListComponent ]
})

export class ListModule {}
