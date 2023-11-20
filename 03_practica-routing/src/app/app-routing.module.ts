import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { Componente1Component } from './componente1/componente1.component';

const routes: Routes = [

  {
    //Componente que se muestra por defecto
    path:'',
    component : BienvenidaComponent
  },
  {
    path:'componente1',
    component:Componente1Component
  },
  {
    path:'bienvenida',
    component:BienvenidaComponent
  },
  {
    path:'componente1/:nombre/:direccion',
    component:Componente1Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
