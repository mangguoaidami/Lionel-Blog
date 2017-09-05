import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';

import { PagesComponent } from './pages.component';
import { routing } from './pages.routing';
import { NgaModule } from './../theme/nga.module'
// import { HeaderComponent } from './../theme/components/header/header.component';

@NgModule({
    imports: [ routing, CommonModule, NgaModule ],
    declarations: [ PagesComponent ]
})

export class PagesModule {}