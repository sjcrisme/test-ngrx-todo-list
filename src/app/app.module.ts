import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers, reducers } from './store/reducers';
import { AppEffects } from './store/effects';
import { routes } from './app.route.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    // IMPORT NGRX MODULES
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot([AppEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
