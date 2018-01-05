/** import Angular core module 🎆 🎆 🎆 🎆 🎆 🎆  */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

import { ENV_PROVIDERS } from './environment';
import { routing } from './app.routing';
import { PagesModule } from './pages/pages.module';
import { FirebaseConfig } from './../environments/firebase.config.ts'

import { AuthService } from './theme/services/authService/auth.service';
import { AuthGuard } from './/theme/guards/AuthGuard';
import { ArticleService } from './theme/services/articleService/article.service';
import { PagerService } from './theme/services/pagerService/pager.service';
import { NgaModule } from './theme/nga.module';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';

export const firebaseConfig = {
  apiKey: "AIzaSyD89E5SGDvjgejwCU6GmPDwu3L3dHJZuzM",
  authDomain: "lionel-blog.firebaseapp.com",
  databaseURL: "https://lionel-blog.firebaseio.com",
  projectId: "lionel-blog",
  storageBucket: "lionel-blog.appspot.com",
  messagingSenderId: "780929940901"
}

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    PagesModule,
    RouterModule,
    routing,
    AngularFireModule.initializeApp( firebaseConfig ),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    SlimLoadingBarModule.forRoot(), // import loading bar modules
    NgaModule.forRoot()   // import Nga modules
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    ENV_PROVIDERS,
    AuthService,
    AuthGuard,
    ArticleService,
    PagerService,
    AngularFireDatabase
   ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
