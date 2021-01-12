import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductModule } from './products';
import { ConvertToSpacesPipe } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    ConvertToSpacesPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
