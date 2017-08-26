import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';

import { PagesComponent } from './pages.component';
import { routing } from './pages.routing';
// import { ArticleSigleComponent } from './article-sigle/article-sigle.component';

@NgModule({
    imports: [ routing, CommonModule ],
    declarations: [ PagesComponent ]
})

export class PagesModule {}