import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperacionComponent } from './operacion/operacion.component';
import { CamposComponent } from './campos/campos.component';

@NgModule({
  declarations: [
    AppComponent,
    OperacionComponent,
    CamposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
