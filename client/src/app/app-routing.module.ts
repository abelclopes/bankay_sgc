import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './components/sobre/sobre.component';
import { GuiasComponent } from './components/guias/guias.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'guias', component: GuiasComponent },
  { path: 'sobre', component: SobreComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
