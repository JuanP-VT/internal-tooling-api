export interface DestinoFrecuente {
  ciudad: string;
  pais: string;
  cantidadEnvios: number;
  ultimoEnvio?: string;
  tipoDocumentoMasUsado?: string;
}

export interface DestinosUsuarioResponse {
  usuarioId: number;
  destinosFrecuentes: DestinoFrecuente[];
}