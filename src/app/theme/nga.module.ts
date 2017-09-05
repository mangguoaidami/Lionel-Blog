import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components';
import { FooterComponent } from './components';

const NGA_COMPONENTS = [
    HeaderComponent,
    FooterComponent
]
@NgModule({
    imports: [ CommonModule, RouterModule ],
    declarations: [ ...NGA_COMPONENTS ],
    exports: [ ...NGA_COMPONENTS ]
})

export class NgaModule {
    static forRoot(): ModuleWithProviders{
        return <ModuleWithProviders> {
            ngModule: NgaModule
        }
    }
}