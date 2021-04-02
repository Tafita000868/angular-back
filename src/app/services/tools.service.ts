import { Injectable } from '@angular/core';
import { utilisateur } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  constructor() { }

  formOption (use_authorization = false) {
    const options = { 
      headers: {
        'Content-Type' : 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin' : '*',
        'Authorization' : ''
      }
    };
    if (use_authorization) {
      options['headers']['Authorization'] = 'Bearer ' + utilisateur.numero;
    }
    return options;
  }
  makeBody (json : any) {
    let body = [];
    for (let key in json)
      body.push(key + '=' + json[key]);
    return body.join('&');
  }
}
