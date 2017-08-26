import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './article-sigle.routing';
import { ArticleSigleComponent } from './article-sigle.component';

@NgModule({
    imports: [ routing, CommonModule ],
    declarations: [ ArticleSigleComponent ]
})

export class ArticleSigleModule {}