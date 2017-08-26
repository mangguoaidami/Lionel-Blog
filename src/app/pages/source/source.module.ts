import { NgModule } from '@angular/core';

import { SourceComponent } from './source.component';
import { routing } from './source.routing';

@NgModule({
    imports: [ routing ],
    declarations: [ SourceComponent ]
})

export class SourceModule {}