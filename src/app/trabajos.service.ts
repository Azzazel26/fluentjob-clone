import { Injectable } from '@angular/core';
import { Trabajo } from './trabajo';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TrabajosService {
  private URL='https://fluentjob-clon.firebaseio.com/trabajos';
  constructor(private http: HttpClient) { }


  getTrabajos() {

  }
  getTrabajo() {

  }

  saveTrabajos(){

  }

  deleteTrabajos(){

  }

  updateTrabajo(){
    
  }
}
