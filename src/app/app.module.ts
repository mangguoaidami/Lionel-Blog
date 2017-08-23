import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { ENV_PROVIDERS } from './environment';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  declarations: [ 
    AppComponent 
  ],
  providers: [ ENV_PROVIDERS ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}