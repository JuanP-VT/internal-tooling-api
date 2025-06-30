export interface DailyConnection {
  fecha: string;
  totalConexiones: number;
  conexionesExitosas: number;
  conexionesFallidas: number;
  dispositivoMasUsado: string;
  promedioDuracion: number; // en minutos
  usuarioMasActivo: string;
  idUsuarioMasActivo: number;
}