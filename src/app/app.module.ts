import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { ENV_PROVIDERS } from './environment';
import { routing } from './app.routing';
import { PagesModule } from './pages/pages.module';

import { AuthService } from './theme/services/authService/auth.service';
import { AuthGuard } from './/theme/guards/AuthGuard';

@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    PagesModule,
    RouterModule,
    routing
  ],
  declarations: [ 
    AppComponent
  ],
  providers: [ 
    ENV_PROVIDERS,
    AuthService,
    AuthGuard
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}