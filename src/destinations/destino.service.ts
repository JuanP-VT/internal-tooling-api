import { Inject, Injectable } from '@nestjs/common';
import { MYSQL_CONNECTION } from '../database/database.module';
import { Pool } from 'mysql2/promise';
import { DestinoFrecuente, DestinosUsuarioResponse } from './destino.interface';

@Injectable()
export class DestinosService {
  constructor(@Inject(MYSQL_CONNECTION) private readonly pool: Pool) {}

  async getDestinosFrecuentesPorUsuario(usuarioId: number): Promise<DestinosUsuarioResponse> {   

    // Consulta para obtener los 10 destinos más frecuentes
const destinosQuery = `
    SELECT 
      d.ciudad,
      d.pais,
      COUNT(*) as cantidadEnvios,
      MAX(doc.fecha_envio) as ultimoEnvio,
      (
        SELECT tipo_documento 
        FROM db4.tabla6
        WHERE ciudad = d.ciudad AND pais = d.pais AND id_usuario = ?
        GROUP BY tipo_documento
        ORDER BY COUNT(*) DESC
        LIMIT 1
      ) as tipoDocumentoMasUsado
    FROM 
      db4.tabla6 doc
    JOIN 
      db5.tabla7 d ON doc.id_destino = d.id
    WHERE 
      doc.id_usuario = ?
    GROUP BY 
      d.ciudad, d.pais
    ORDER BY 
      cantidadEnvios DESC
    LIMIT 10;
`;

    const [destinosResults] = await this.pool.execute(destinosQuery, [usuarioId, usuarioId]);

    return {
      usuarioId,
      destinosFrecuentes: destinosResults as DestinoFrecuente[]
    };
  }
}