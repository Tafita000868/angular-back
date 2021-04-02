import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandeDepotComponent } from './demande-depot/demande-depot.component';
import { OffreComponent } from './offre/offre.component';
import { TableauStatisticComponent } from './tableau-statistic/tableau-statistic.component';

const routes: Routes = [
  {path : 'demandeDepot', component : DemandeDepotComponent},
  {path : 'tableau-statistique', component : TableauStatisticComponent},
  {path : 'offre', component : OffreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
