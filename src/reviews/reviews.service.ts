import { Inject, Injectable } from '@nestjs/common';
import { MYSQL_CONNECTION } from '../database/database.module';
import { Pool } from 'mysql2/promise';
import { Review } from './review.interface';

@Injectable()
export class ReviewService {
  constructor(@Inject(MYSQL_CONNECTION) private readonly pool: Pool) {}

  async getReviews(): Promise<Review[]> {
const query = `
  SELECT 
      cal.*,
      ident.nombrecliente,
      ident.nombreUsuario,
      ident.pathFoto,
      ident.correoContacto,
      doc.hora AS ultimaDocumentacion
  FROM db1.tabla8 AS cal
  JOIN db2.tabla9 AS ident 
      ON cal.idusuario = ident.id
  LEFT JOIN (
      SELECT 
          idusuario,
          MAX(hora) AS hora
      FROM db3.tabla10
      GROUP BY idusuario
  ) AS doc 
      ON cal.idusuario = doc.idusuario;
`;

    const [results] = await this.pool.execute(query);
    return results as Review[];
  }
}
