import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { ContactosComponent } from './contactos/contactos.component';
import { HomeComponent } from './home/home.component';
import { MotosComponent } from './motos/motos.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'clientes', component: ClientesComponent},
  { path: 'contactos', component: ContactosComponent},
  { path: 'motos', component: MotosComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
