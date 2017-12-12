import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { PersonsListComponent } from './person-list.component';
import { CreatePersonComponent } from './create-person.component';
import { PersonDetailsComponent } from './person-details.component';

import { PersonService } from './person.service';


@NgModule({
  declarations: [
    AppComponent,
    PersonsListComponent,
    CreatePersonComponent,
    PersonDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
