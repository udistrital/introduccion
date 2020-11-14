import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { RequestManager } from '../../managers/requestManager';

const httpOptions = {
    headers: new HttpHeaders({
        'Accept': 'application/json',
    }),
}

@Injectable({
  providedIn: 'root',
})

export class InscripcionService {

  constructor(private requestManager: RequestManager) {
    this.requestManager.setPath('INSCRIPCION_SERVICE');
  }
  get(endpoint) {
    this.requestManager.setPath('INSCRIPCION_SERVICE');
    return this.requestManager.get(endpoint);
  }
  post(endpoint, element) {
    this.requestManager.setPath('INSCRIPCION_SERVICE');
    return this.requestManager.post(endpoint, element);
  }
  put(endpoint, element) {
    this.requestManager.setPath('INSCRIPCION_SERVICE');
    return this.requestManager.put(endpoint, element);
  }
  delete(endpoint, element) {
    this.requestManager.setPath('INSCRIPCION_SERVICE');
    return this.requestManager.delete(endpoint, element.Id);
  }
}

