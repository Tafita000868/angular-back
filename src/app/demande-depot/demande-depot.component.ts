import { Component, OnInit } from '@angular/core';
import { DemandeDepotService } from '../services/demande-depot.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-demande-depot',
  templateUrl: './demande-depot.component.html',
  styleUrls: ['./demande-depot.component.scss']
})
export class DemandeDepotComponent implements OnInit {
  depots : any = [];
  error_msg : string = '';

  constructor(public router : Router, public serviceDemande : DemandeDepotService) { }
  
  ngOnInit(): void {
    this.getDepots();
    console.log(this.depots);
  }

  getDepots() {
    const success = (response : any) => {
      // if(response['status']==200) {
        this.depots = response; //['datas'];
      // } else {
      //   this.error_msg = response['message'];
      // }
    }
    const error = (response : any) => {
      this.error_msg = response['message'];
    }
    this.serviceDemande.getDemandeDepot()
      .subscribe(success, error);
  }
  
  validerDepot(idCompte:'', depot:{}) {
    const val = {
      idCompte : idCompte,
      depot: depot
    }
    const success = (response : any) => {
      // if(response['status']==200) {
        this.error_msg = response['message'];
        this.router.navigateByUrl('demandeDepot');
      // } else {
      //   this.error_msg = response['message'];
      // }
    } 
    const error = (response : any) => {
      this.error_msg = response['message'];
    }
    this.serviceDemande.validerDemandeDepot(val)
     .subscribe(success, error);
  }

  refuserDepot(depot:{}) {
    console.log("REFUSER : " + depot);
    const success = (response : any) => {
      // if(response['status']==200) {
        this.error_msg = response['message'];
        this.router.navigateByUrl('demandeDepot');
      // } else {
      //   this.error_msg = response['message'];
      // }
    } 
    const error = (response : any) => {
      this.error_msg = response['message'];
    }
    this.serviceDemande.refuserDemandeDepot(depot)
     .subscribe(success, error);
  }

}
