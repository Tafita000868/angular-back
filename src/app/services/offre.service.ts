import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { base_url } from 'src/environments/environment.prod';
import { ToolsService } from './tools.service';

@Injectable({
  providedIn: 'root'
})
export class OffreService {

  constructor(public http : HttpClient, public serveurTool : ToolsService) { }

  public getOffres() {
    const request = base_url + 'Offres';
    console.log(request); 
    return this.http.get(request);
  }

  getDetailOffre(offre:{}) {
    const options = this.serveurTool.formOption();
    let body = this.serveurTool.makeBody(offre);
    console.log(base_url + 'Offre/detail', body, options);
    return this.http.post(base_url + 'Offre/detail', body, options);
  }

  addDetail(detail:{}) {
    const options = this.serveurTool.formOption();
    let body = this.serveurTool.makeBody(detail);
    console.log(base_url + 'Offre/detail/inserer', body, options);
    return this.http.post(base_url + 'Offre/detail/inserer', body, options);
  }
  
}
