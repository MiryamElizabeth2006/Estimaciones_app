import { Estimacion } from "../model/Estimacion";

export const Data: Estimacion = {
    cliente: {
        cedula: "1722813332001",
        nombreC: "ACME",
        celular: "0983142395",
        direccion: {
            ciudad: "Quito",
            pais: "Ecuador",
        },
    },
    requerimiento: "",
    tiempo: "",
    roles: new Roles,
    costosAdicionales: new CostosAdicionales,
    calculoCostoTotal: new CalculoCostoTotal,
    precioFinal: 0,
    valorUtilidad: ""
}