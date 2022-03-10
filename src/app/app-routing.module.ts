import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { ListaEventosComponent } from './components/lista-eventos/lista-eventos.component';

const routes: Routes = [{path:'calendario', component: CalendarioComponent},
{path:'eventos', component: ListaEventosComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
