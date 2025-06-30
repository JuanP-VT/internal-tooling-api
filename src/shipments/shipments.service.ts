import { Inject, Injectable } from '@nestjs/common';
import { MYSQL_CONNECTION } from '../database/database.module';
import { Pool } from 'mysql2/promise';
import { EnvioApi } from './shipments.interface';

@Injectable()
export class EnviosService {
  constructor(@Inject(MYSQL_CONNECTION) private readonly pool: Pool) {}

  async getEnviosApiPorUsuario(idUsuario: number): Promise<EnvioApi[]> {
const query = `
    SELECT 
        e.id,
        e.id_usuario AS idUsuario,
        e.referencia,
        e.fecha_hora AS fechaHora,
        e.estado,
        e.tipo,
        e.destino,
        e.intentos,
        e.detalle,
        e.metadata
    FROM 
        db1.tabla11 e
    JOIN 
        db2.tabla12 o ON e.id_origen = o.id
    WHERE 
        e.id_usuario = ?
        AND o.codigo = 'API'
        AND e.fecha_hora >= DATE_SUB(CURDATE(), INTERVAL 30 DAY)
    ORDER BY 
        e.fecha_hora DESC;
`;

    const [results] = await this.pool.execute(query, [idUsuario]);
    return results as EnvioApi[];
  }

  async getResumenEnviosApi(idUsuario: number): Promise<{
    total: number;
    completados: number;
    fallidos: number;
    promedioDiario: number;
  }> {
const query = `
    SELECT 
        COUNT(*) AS total,
        SUM(CASE WHEN estado = 'completado' THEN 1 ELSE 0 END) AS completados,
        SUM(CASE WHEN estado = 'fallido' THEN 1 ELSE 0 END) AS fallidos,
        COUNT(*) / 30 AS promedioDiario
    FROM 
        db1.tabla11 e
    JOIN 
        db2.tabla12 o ON e.id_origen = o.id
    WHERE 
        e.id_usuario = ?
        AND o.codigo = 'API'
        AND e.fecha_hora >= DATE_SUB(CURDATE(), INTERVAL 30 DAY);
`;

    const [results] = await this.pool.execute(query, [idUsuario]);
    return (results as {
      total: number;
      completados: number;
      fallidos: number;
      promedioDiario: number;
    }[])[0];
  }
}