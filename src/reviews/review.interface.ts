export interface Review {
  id: number;
  idcliente: number;
  idusuario: number;
  calificacion: number;
  comentarios: string;
  fechahora: string;
  origen: string;
  nombrecliente: string;
  nombreUsuario: string;
  pathFoto: string;
  correoContacto: string;
  ultimaDocumentacion: string;
}
