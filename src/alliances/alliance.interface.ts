export interface AlianzaWebAPI {
  id: number;
  nombre: string;
  descripcion: string;
  logoUrl: string;
  fechaInicio: string;
  fechaRenovacion: string;
  endpointBase: string;
  metodosDisponibles: string[];
  autenticacionTipo: 'OAUTH2' | 'API_KEY' | 'JWT';
  documentacionUrl: string;
  estado: 'activa' | 'inactiva' | 'en_pruebas';
}