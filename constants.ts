import type { Client, Maestro, Sale, ChartData, Canje, Contact, Address, Premio, Report } from './types';

export const CLIENT_DATA: Client[] = [
  { id: 1, nombre: 'Luis', apellidos: 'Garcia Morales', ruc: '987654321', distrito: 'San Isidro', telefono: '987-654-321', correo: 'luis.garcia@email.com', fechaRegistro: '2024-05-10', direccion: 'Av. Javier Prado 123' },
  { id: 2, nombre: 'Ana', apellidos: 'Perez Lopez', ruc: '123456789', distrito: 'Miraflores', telefono: '998-765-432', correo: 'ana.perez@email.com', fechaRegistro: '2023-11-25', direccion: 'Calle Las Begonias 456' },
  { id: 3, nombre: 'Carlos', apellidos: 'Sanchez Vargas', ruc: '1090123456', distrito: 'Santiago de Surco', telefono: '976-543-210', correo: 'c.sanchez@email.com', fechaRegistro: '2025-01-15', direccion: 'Jr. Monte Rosa 789' },
  { id: 4, nombre: 'Maria', apellidos: 'Ramirez Ortiz', ruc: '1034567890', distrito: 'La Molina', telefono: '965-432-109', correo: 'maria.ramirez@email.com', fechaRegistro: '2024-08-01', direccion: 'Av. La Molina 1011' },
  { id: 5, nombre: 'Jorge', apellidos: 'Castro Medina', ruc: '1023456789', distrito: 'Barranco', telefono: '954-321-098', correo: 'jorge.castro@email.com', fechaRegistro: '2023-04-12', direccion: 'Psj. Saenz Peña 1213' },
  { id: 6, nombre: 'Sofia', apellidos: 'Mendoza Rojas', ruc: '943210987', distrito: 'Lince', telefono: '943-210-987', correo: 'sofia.mendoza@email.com', fechaRegistro: '2025-03-20', direccion: 'Av. Arequipa 1415' },
  { id: 7, nombre: 'Roberto', apellidos: 'Torres Rios', ruc: '932109876', distrito: 'Pueblo Libre', telefono: '932-109-876', correo: 'roberto.torres@email.com', fechaRegistro: '2024-09-05', direccion: 'Av. Brasil 1617' },
  { id: 8, nombre: 'Lucia', apellidos: 'Diaz Fernandez', ruc: '921098765', distrito: 'San Miguel', telefono: '921-098-765', correo: 'lucia.diaz@email.com', fechaRegistro: '2023-07-30', direccion: 'Av. La Marina 1819' },
  { id: 9, nombre: 'Fernando', apellidos: 'Gomez Silva', ruc: '910987654', distrito: 'San Borja', telefono: '910-987-654', correo: 'f.gomez@email.com', fechaRegistro: '2024-02-18', direccion: 'Av. Aviación 2021' },
  { id: 10, nombre: 'Valeria', apellidos: 'Salazar Nieto', ruc: '909876543', distrito: 'San Miguel', telefono: '909-876-543', correo: 'valeria.salazar@email.com', fechaRegistro: '2025-04-03', direccion: 'Calle Manco Capac 2223' },
  { id: 11, nombre: 'Pedro', apellidos: 'Vilchez Cardenas', ruc: '10123456788', distrito: 'Barranco', telefono: '904-321-098', correo: 'p.vilchez@email.com', fechaRegistro: '12-09-2024', direccion: 'Jirón 28 de Julio 123, Lima' },
];

export const MAESTRO_DATA: Maestro[] = [
  { id: 1, nombre: 'Luis', apellidos: 'Garcia Morales', ruc: '1012345678', distrito: 'San Isidro', telefono: '987-654-321', correo: 'luis.garcia@email.com', especialidad: 'Albañilería', fechaRegistro: '2024-05-10', direccion: 'Av. Javier Prado 123' },
  { id: 2, nombre: 'Ana', apellidos: 'Perez Lopez', ruc: '1045678901', distrito: 'Miraflores', telefono: '998-765-432', correo: 'ana.perez@email.com', especialidad: 'Gasfitería', fechaRegistro: '2023-11-25', direccion: 'Calle Las Begonias 456' },
  { id: 3, nombre: 'Jorge', apellidos: 'Castro Medina', ruc: '1023456789', distrito: 'Barranco', telefono: '954-321-098', correo: 'jorge.castro@email.com', especialidad: 'Electricidad', fechaRegistro: '2023-04-12', direccion: 'Psj. Saenz Peña 1213' },
  { id: 4, nombre: 'Pedro', apellidos: 'Vilchez Cardenas', ruc: '10123456788', distrito: 'Barranco', telefono: '904-321-098', correo: 'p.vilchez@email.com', especialidad: 'GASFITERIA', fechaRegistro: '12-09-2024', direccion: 'Jirón 28 de Julio 123, Lima' },
];

export const SALES_HISTORY_DATA: Sale[] = [
    { fecha: '2025-04-26', monto: 'S/ 80.00', tipoPago: 'Tarjeta de Crédito', nroComprobante: 'F001-000459' },
    { fecha: '2025-04-27', monto: 'S/ 40.00', tipoPago: 'Plin', nroComprobante: 'B001-001237' },
    { fecha: '2025-05-28', monto: 'S/ 35.00', tipoPago: 'Efectivo', nroComprobante: 'F001-000460' },
    { fecha: '2025-05-29', monto: 'S/ 50.00', tipoPago: 'Transferencia Bancaria', nroComprobante: 'B001-001238' },
];

export const CHART_DATA: ChartData[] = [
    { name: '2024-09', value: 300 },
    { name: '2024-10', value: 500 },
    { name: '2024-11', value: 800 },
    { name: '2024-12', value: 250 },
    { name: '2025-1', value: 2500 },
    { name: '2025-2', value: 350 },
    { name: '2025-3', value: 200 },
    { name: '2025-4', value: 150 },
    { name: '2025-5', value: 100 },
];

export const CANJES_HISTORY_DATA: Canje[] = [
    { fecha: '2025-05-01', idPremio: 'PREM-05', cantidad: 1, puntos: 500, estado: 'Entregado' },
    { fecha: '2025-05-02', idPremio: 'PREM-12', cantidad: 2, puntos: 250, estado: 'Entregado' },
    { fecha: '2025-05-03', idPremio: 'PREM-08', cantidad: 1, puntos: 1500, estado: 'Pendiente' },
    { fecha: '2025-05-04', idPremio: 'PREM-03', cantidad: 1, puntos: 800, estado: 'Entregado' },
];

export const CONTACTS_DATA: Contact[] = [
  { id: 1, tipo: 'Telefono Celular', valor: '123-456-789' },
  { id: 2, tipo: 'Whatsapp', valor: '123-456-789' },
  { id: 3, tipo: 'Correo', valor: 'ejemplo.correo@gmail.com' },
  { id: 4, tipo: 'Telefono Celular', valor: '456-789-132' },
];

export const DIRECCIONES_DATA: Address[] = [
  { id: 1, ciudad: 'Lima', distrito: 'Ate', via: 'Jiron Paracas', numero: '954' },
  { id: 2, ciudad: 'Lima', distrito: 'Ate', via: 'Avenida Hermes', numero: '256' },
  { id: 3, ciudad: 'Lima', distrito: 'Barranco', via: 'Jiron 28 de julio', numero: '123' },
  { id: 4, ciudad: 'Lima', distrito: 'Santa Anita', via: 'Avenida Moro solar', numero: '455' },
];

export const PREMIOS_CATALOG_DATA: Premio[] = [
    { id: 'PREM-01', nombre: 'Taladro Inalámbrico', descripcion: 'Modelo: SCD-123...', costo: 30, categoria: 'Herramienta, ...' },
    { id: 'PREM-02', nombre: 'Batidora', descripcion: 'Mod. V2...', costo: 200, categoria: 'Electrodomes...' },
    { id: 'PREM-03', nombre: 'Tornillos', descripcion: 'Tornillos 3cm', costo: 30, categoria: 'Carpintería, ...' },
    { id: 'PREM-04', nombre: 'Cemento', descripcion: 'Saco 50kg', costo: 25, categoria: 'Construcción, ...' },
    { id: 'PREM-05', nombre: 'Pintura Acrílica', descripcion: 'Galón azul', costo: 45, categoria: 'Acabados, ...' },
    { id: 'PR-006', nombre: 'Vales de compra', descripcion: 'S/ 20 en Sodimac', costo: 20, categoria: 'Vales' },
    { id: 'PR-014', nombre: 'Pala', descripcion: 'Pala de jardín', costo: 35, categoria: 'Herramienta' },
    { id: 'PR-035', nombre: 'Televisor', descripcion: 'Smart TV 32"', costo: 270, categoria: 'Electrodomes...' },
];

export const REPORTS_DATA: Report[] = [
  { id: 'REP-001', fechaGeneracion: '2025-03-01', periodoAnalisis: 'Último mes', idUsuarioGenerador: 'USR-005' },
  { id: 'REP-002', fechaGeneracion: '2025-03-05', periodoAnalisis: 'Semanal', idUsuarioGenerador: 'USR-012' },
  { id: 'REP-003', fechaGeneracion: '2025-03-10', periodoAnalisis: 'Trimestre', idUsuarioGenerador: 'USR-003' },
  { id: 'REP-004', fechaGeneracion: '2025-03-15', periodoAnalisis: 'Semanal', idUsuarioGenerador: 'USR-003' },
  { id: 'REP-005', fechaGeneracion: '2025-03-20', periodoAnalisis: 'Anual', idUsuarioGenerador: 'USR-012' },
  { id: 'REP-006', fechaGeneracion: '2025-03-25', periodoAnalisis: 'Semanal', idUsuarioGenerador: 'USR-003' },
  { id: 'REP-007', fechaGeneracion: '2025-04-01', periodoAnalisis: 'Último mes', idUsuarioGenerador: 'USR-005' },
  { id: 'REP-008', fechaGeneracion: '2025-04-05', periodoAnalisis: 'Semanal', idUsuarioGenerador: 'USR-001' },
  { id: 'REP-009', fechaGeneracion: '2025-04-10', periodoAnalisis: 'Trimestre', idUsuarioGenerador: 'USR-005' },
  { id: 'REP-010', fechaGeneracion: '2025-04-15', periodoAnalisis: 'Último mes', idUsuarioGenerador: 'USR-012' },
  { id: 'REP-011', fechaGeneracion: '2025-04-20', periodoAnalisis: 'Semanal', idUsuarioGenerador: 'USR-003' },
];