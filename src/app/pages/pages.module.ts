import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';

import { PagesComponent } from './pages.component';
import { routing } from './pages.routing';

@NgModule({
    imports: [ routing, CommonModule ],
    declarations: [ PagesComponent ]
})

export class PagesModule {}