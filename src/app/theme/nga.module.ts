import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent, FooterComponent } from './components';
// import { SlimLoadingBarService } from './components/slim-loading-bar/slim-loading-bar.service';

const NGA_COMPONENTS = [
    HeaderComponent,
    FooterComponent
]
@NgModule({
    imports: [ CommonModule, RouterModule ],
    declarations: [ ...NGA_COMPONENTS ],
    providers: [],
    exports: [ ...NGA_COMPONENTS ]
})

export class NgaModule {
    static forRoot(): ModuleWithProviders{
        return <ModuleWithProviders> {
            ngModule: NgaModule
        }
    }
}
