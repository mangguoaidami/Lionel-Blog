import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ListComponent } from './list.component';

export const routes: Routes = [
    {
        path: '',
        component: ListComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);