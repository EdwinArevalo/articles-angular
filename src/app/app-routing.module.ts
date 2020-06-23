import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticulosComponent } from './articulos/articulos.component';
import { AcercadeComponent } from './acercade/acercade.component';

const routes: Routes = [
  {
    path: 'articulos',
    component:ArticulosComponent
  },{
    path: 'acercade',
    component:AcercadeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
