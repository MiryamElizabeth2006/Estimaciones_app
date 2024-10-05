import { Component, OnInit } from '@angular/core';
import { Estimacion } from '../../model/Estimacion';
import { EstimacionesService } from '../../services/estimaciones.service';

@Component({
  selector: 'estimacion-app',
  standalone: true,
  imports: [],
  templateUrl: './estamacion-app.component.html',
})
export class EstimacionAppComponent implements OnInit {
  estimaciones!: Estimacion;
  constructor(private service:EstimacionesService){}
   ngOnInit(): void {
       this.estimaciones=this.service.getEstimacion();
   }
}
