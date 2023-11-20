import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { MenuNavComponent } from './menu-nav/menu-nav.component';
import { PieDePaginaComponent } from './pie-de-pagina/pie-de-pagina.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { Componente1Component } from './componente1/componente1.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    MenuNavComponent,
    PieDePaginaComponent,
    BienvenidaComponent,
    Componente1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
