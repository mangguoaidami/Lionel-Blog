import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SourceComponent } from './source.component';

export const routes: Routes = [
    {
        path: '',
        component: SourceComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);