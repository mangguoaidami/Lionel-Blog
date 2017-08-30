import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ArticleRxjsComponent } from './article-rxjs.component';

export const routes: Routes = [
    {
        path: '',
        component: ArticleRxjsComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);