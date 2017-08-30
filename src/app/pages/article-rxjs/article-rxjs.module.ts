import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './article-rxjs.routing';
import { ArticleRxjsComponent } from './article-rxjs.component';

@NgModule({
    imports: [ routing, CommonModule ],
    declarations: [ ArticleRxjsComponent ]
})

export class ArticleRxjsModule {}
