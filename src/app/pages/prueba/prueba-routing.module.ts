import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { PruebaComponent } from './prueba.component';
import { PruebaUsuarioComponent } from './prueba_usuario/prueba_usuario.component';

const routes: Routes = [{
  path: '',
  component: PruebaComponent,
  children: [{
    path: 'prueba_usuario',
    component: PruebaUsuarioComponent,
  },
],
}];

@NgModule({
  imports: [
      RouterModule.forChild(routes),
  ],
  exports: [
      RouterModule,
  ],
})

export class PruebaRoutingModule { }

export const routedComponents = [
  PruebaComponent,
  PruebaUsuarioComponent,
];
