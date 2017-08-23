import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { ENV_PROVIDERS } from './environment';
import { routing } from './app.routing';
import { PagesModule } from './pages/pages.module';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    FormsModule,
    PagesModule,
    routing
  ],
  declarations: [ 
    AppComponent
  ],
  providers: [ ENV_PROVIDERS ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}