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
    requerimiento: "ESTIMACIÓN DE PROYECTOS DE SOFTWARE",
    tiempo: "3 meses",
    roles: [
        {
            nombreRol: "Gerente del proyecto",
            sueldo: 600,
            participacion: "20%",
        },
        {
            nombreRol: "Líder técnico",
            sueldo: 600,
            participacion: "100%",
        },
        {
            nombreRol: "Desarrolladores",
            sueldo: 500,
            participacion: "100%",
        },
        {
            nombreRol: "Testers",
            sueldo: 500,
            participacion: "25%",
        },
        {
            nombreRol: "Infraestructura DevOps",
            sueldo: 600,
            participacion: "25%",
        },
    ],
    costosAdicionales: [
        {
            nombreCosto: "Equipo",
            costo: 1200,
        },
        {
            nombreCosto: "Internet",
            costo: 135,
        },
        {
            nombreCosto: "Oficina",
            costo: 1350,
        },
    ],
    calculoCostoTotal: {
        costosAdicionales:2685 ,
        costoRoles: 11765.45,
    },
    precioFinal: 21250.67,
    valorUtilidad: "32%"
}
