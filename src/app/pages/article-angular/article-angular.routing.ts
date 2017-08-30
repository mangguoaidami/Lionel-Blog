import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ArticleAngularComponent } from './article-angular.component';

export const route: Routes = [
    {
        path: '',
        component: ArticleAngularComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(route);