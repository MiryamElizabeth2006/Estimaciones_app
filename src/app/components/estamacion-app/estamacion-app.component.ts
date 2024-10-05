import { Component } from '@angular/core';
import { Estimacion } from '../../model/Estimacion';

@Component({
  selector: 'estimacion-app',
  standalone: true,
  imports: [],
  templateUrl: './estamacion-app.component.html',
})
export class EstimacionAppComponent {
  estimaciones!: Estimacion
}
