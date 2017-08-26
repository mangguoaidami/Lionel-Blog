import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ArticleSigleComponent } from './article-sigle.component';

export const routes: Routes = [
    {
        path: '',
        component: ArticleSigleComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);