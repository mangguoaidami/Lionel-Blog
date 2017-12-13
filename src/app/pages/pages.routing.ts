import { Router, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthGuard } from './../theme/guards/AuthGuard.ts';
import { PagesComponent } from './pages.component';
// import { LoginComponent } from './login/login.component';
// import { ArticleSigleComponent } from './article-sigle/article-sigle.component';

export const routes = [
    {
        path: 'login',
        loadChildren: 'app/pages/login/login.module#LoginModule'
    },
    {
        path: 'register',
        loadChildren: 'app/pages/register/register.module#RegisterModule'
    },
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', loadChildren: './list/list.module#ListModule' },
            { path: 'articleangular', loadChildren: './article-angular/article-angular.module#ArticleAngularModule' },
            { path: 'source', loadChildren: './source/source.module#SourceModule' },
            { path: 'about', loadChildren: './about/about.module#AboutModule' },
            { path: 'more', loadChildren: './more/more.module#MoreModule' },
            { path: 'article/:id', loadChildren: './article-sigle/article-sigle.module#ArticleSigleModule' },
            { path: 'angulesigle/:id', loadChildren: './angular-sigle/angular-sigle.module#AngularSigleModule' }
        ],
        canActivate: [AuthGuard]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);