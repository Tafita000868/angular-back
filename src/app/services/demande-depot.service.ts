import { Injectable } from '@angular/core';
import { base_url } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { ToolsService } from './tools.service';


@Injectable({
  providedIn: 'root'
})
export class DemandeDepotService {

  constructor(public http : HttpClient, public serveurTool : ToolsService) { }

  public getDemandeDepot() {
    const request = base_url + 'liste_demande_depot';
    console.log(request); 
    return this.http.get(request);
  }

  validerDemandeDepot( demandeDepot:{} ) {
    const options = this.serveurTool.formOption();
    let body = this.serveurTool.makeBody(demandeDepot);
    console.log(base_url + 'valide_depot', body, options);
    return this.http.post(base_url + 'valide_depot/', body, options);
  }

  refuserDemandeDepot(demandeDepot:{} ) {
    const options = this.serveurTool.formOption();
    let body = this.serveurTool.makeBody(demandeDepot);
    console.log(base_url + 'refuserDepot/', body, options);
    return this.http.post(base_url + 'refuserDepot/', body, options);
  }

}
