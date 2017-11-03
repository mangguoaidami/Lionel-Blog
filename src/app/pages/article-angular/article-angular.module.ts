import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './article-angular.routing';
import { ArticleAngularComponent } from './article-angular.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [ CommonModule, routing, FormsModule ],
    declarations: [ ArticleAngularComponent ]
})

export class ArticleAngularModule {}
