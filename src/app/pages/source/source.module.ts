import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SourceComponent } from './source.component';
import { routing } from './source.routing';

@NgModule({
    imports: [ routing, CommonModule ],
    declarations: [ SourceComponent ]
})

export class SourceModule {}
