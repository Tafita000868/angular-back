import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToolsService } from './services/tools.service';
import { FooterComponent } from './footer/footer.component';
import { DemandeDepotComponent } from './demande-depot/demande-depot.component';
import { DemandeDepotService } from './services/demande-depot.service';
import { ChartsModule } from 'ng2-charts';
import { TableauStatisticComponent } from './tableau-statistic/tableau-statistic.component';
import { OffreComponent } from './offre/offre.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DemandeDepotComponent,
    TableauStatisticComponent,
    OffreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [
    DemandeDepotService,
    ToolsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
