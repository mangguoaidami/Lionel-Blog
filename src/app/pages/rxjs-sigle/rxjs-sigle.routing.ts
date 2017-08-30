import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { RxjsSigleComponent } from './rxjs-sigle.component'

export const route: Routes = [
    {
        path: '',
        component: RxjsSigleComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(route);