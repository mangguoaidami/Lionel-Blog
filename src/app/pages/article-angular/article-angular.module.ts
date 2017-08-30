import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './article-angular.routing';
import { ArticleAngularComponent } from './article-angular.component';

@NgModule({
    imports: [ CommonModule, routing ],
    declarations: [ ArticleAngularComponent ]
})

export class ArticleAngularModule {}
