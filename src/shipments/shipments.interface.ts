export interface EnvioApi {
  id: number;
  idUsuario: number;
  referencia: string;
  fechaHora: string;
  estado: '0' | '1' | '2' | '3';
  tipo: string;
  destino: string;
  intentos: number;
  detalle?: string;
  metadata?: Record<string, any>;
}