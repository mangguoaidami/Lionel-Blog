import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { MoreComponent } from './more.component';

export const routes: Routes = [
    {
        path: '',
        component: MoreComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);