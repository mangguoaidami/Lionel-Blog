import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoreComponent } from './more.component';
import { routing } from './more.routing';

@NgModule({
    imports: [ routing, CommonModule ],
    declarations: [ MoreComponent ]
})

export class MoreModule {}