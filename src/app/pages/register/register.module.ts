import { NgModule } from '@angular/core';

import { RegisterComponent } from './register.component';
import { routing } from './register.routing';

@NgModule({
    imports: [ routing ],
    declarations: [ RegisterComponent ]
})

export class RegisterModule {}