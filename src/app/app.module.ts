import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableDemonstrationComponent } from './table-demonstration/table-demonstration.component';
import { TableModule } from 'my-widgets';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TableDemonstrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
