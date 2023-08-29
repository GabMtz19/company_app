import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { PersonnelTableComponent } from './personnel-table/personnel-table.component';
import { SoftwareListComponent } from './software-list/software-list.component';

import { MatButtonToggle, MatButtonToggleModule } from '@angular/material/button-toggle'

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    PersonnelTableComponent,
    SoftwareListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
