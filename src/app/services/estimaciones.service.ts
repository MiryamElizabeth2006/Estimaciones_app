import { Injectable } from '@angular/core';
import { Estimacion } from '../model/Estimacion';
import { Data } from '../EstimacionData/Data';

@Injectable({
  providedIn: 'root'
})
export class EstimacionesService{
  private estimacion:Estimacion=Data;
  constructor() { }

  getEstimacion():Estimacion{
    return this.estimacion
  }
}
