import { CalculoCostoTotal } from './CalculoCostoTotal';
import { CostosAdicionales } from './CostosAdicionale';
import { Roles } from './Roles';
import { Cliente } from './Cliente';

export class Estimacion{
  cliente!:Cliente
  requerimiento!: string;
  tiempo!:string;
  roles!: Roles[];
  costosAdicionales!: CostosAdicionales[];
  calculoCostoTotal!:CalculoCostoTotal;
  precioFinal!: number;
  valorUtilidad!: string;
}

