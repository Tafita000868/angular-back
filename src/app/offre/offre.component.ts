import { Component, OnInit } from '@angular/core';
import { OffreService } from '../services/offre.service';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.scss']
})
export class OffreComponent implements OnInit {
  attribut : string = '';
  valeur : string = '';
  unite : string = '';
  error_msg : string = '';
  offres : any = [];
  currentOffre = {idOffre:'', nomOffre:'', prix:'', validiteEnJour:''};
  contentCurrentOffre : boolean = false;
  detailOffres : any = [];
  
  constructor(private serviceOffre : OffreService) { }

  ngOnInit(): void {
    this.getOffres();
  }

  getOffres() {
    const success = (response : any) => {
      if(response['status']==200) {
        this.offres = response['datas'];
        this.error_msg = response['message'];
      } else {
        this.error_msg = response['message'];
      }
    }
    const error = (response : any) => {
      this.error_msg = response['message'];
    }
    this.serviceOffre.getOffres()
      .subscribe(success, error);
  }
  voirDetail(offre:{idOffre:'', nomOffre:'', prix:'', validiteEnJour:''}) {
    this.currentOffre = offre;
    const success = (response : any) => {
      if(response['status']==200) {
        this.contentCurrentOffre = true;
        this.detailOffres = response['datas'];
        this.error_msg = response['message'];
      } else {
        this.error_msg = response['message'];
      }
    }
    const error = (response : any) => {
      this.error_msg = response['message'];
    }
    this.serviceOffre.getDetailOffre(offre)
      .subscribe(success, error);
  }
  addDetail() {
    const detail = {
      idOffre : this.currentOffre.idOffre,
      attribut : this.attribut,
      valeur : this.valeur,
      unite : this.unite
    }
    const success = (response : any) => {
      if(response['status']==200) {
        this.error_msg = response['message'];
      } else {
        this.error_msg = response['message'];
      }
    }
    const error = (response : any) => {
      this.error_msg = response['message'];
    }
    this.serviceOffre.addDetail(detail)
      .subscribe(success, error);
  }
}
