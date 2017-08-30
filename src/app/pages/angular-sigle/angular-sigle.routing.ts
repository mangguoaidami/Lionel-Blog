import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AngularSigleComponent } from './angular-sigle.component'

export const route: Routes = [
    {
        path: '',
        component: AngularSigleComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forChild(route);