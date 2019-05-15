import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './/app-routing.module';
import { SharedComponentsModule } from './/shared-components.module';
import { AppComponent } from './app.component';
import { UsersTableComponent } from './components/users-table/users-table.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedComponentsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
