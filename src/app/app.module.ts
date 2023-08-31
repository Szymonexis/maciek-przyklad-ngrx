import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { effects, facades, reducers } from './state';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './components/counter/counter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, CounterComponent],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot(effects),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 50,
    }),
  ],
  providers: [...facades],
  bootstrap: [AppComponent],
})
export class AppModule {}
