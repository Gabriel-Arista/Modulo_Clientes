export interface Client {
  id: number;
  nombre: string;
  apellidos: string;
  ruc: string;
  distrito: string;
  telefono: string;
  correo: string;
  fechaRegistro: string;
  direccion: string;
}

export interface Maestro {
  id: number;
  nombre: string;
  apellidos: string;
  ruc: string;
  distrito: string;
  telefono: string;
  correo: string;
  especialidad: string;
  fechaRegistro: string;
  direccion: string;
}

export interface Sale {
  fecha: string;
  monto: string;
  tipoPago: string;
  nroComprobante: string;
}

export interface ChartData {
  name: string;
  value: number;
}

export interface Canje {
    fecha: string;
    idPremio: string;
    cantidad: number;
    puntos: number;
    estado: string;
}

export interface Contact {
  id: number;
  tipo: string;
  valor: string;
}

export interface Address {
  id: number;
  ciudad: string;
  distrito: string;
  via: string;
  numero: string;
}

export interface Premio {
  id: string;
  nombre: string;
  descripcion: string;
  costo: number;
  categoria: string;
}

export interface Report {
  id: string;
  fechaGeneracion: string;
  periodoAnalisis: string;
  idUsuarioGenerador: string;
}