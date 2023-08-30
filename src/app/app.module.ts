import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { PersonnelTableComponent } from './personnel-table/personnel-table.component';
import { SoftwareListComponent } from './software-list/software-list.component';

import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    PersonnelTableComponent,
    SoftwareListComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonToggleModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
