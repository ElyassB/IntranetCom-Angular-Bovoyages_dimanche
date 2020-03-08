import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationFormComponent } from './authentification-form/authentification-form.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { PageaccueilComponent } from './pageaccueil/pageaccueil.component';
import { DestinationService } from './destination.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationFormComponent,
    PageaccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DestinationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
