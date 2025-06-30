import { Inject, Injectable } from '@nestjs/common';
import { MYSQL_CONNECTION } from '../database/database.module';
import { Pool } from 'mysql2/promise';
import { DailyConnection } from './connection.interface';

@Injectable()
export class ConexionesService {
  constructor(@Inject(MYSQL_CONNECTION) private readonly pool: Pool) {}

  async getConexionesDiarias(dias: number = 7): Promise<DailyConnection[]> {
const query = `
    SELECT 
        DATE(fecha_hora) AS fecha,
        COUNT(*) AS totalConexiones,
        SUM(CASE WHEN estado = 'exitoso' THEN 1 ELSE 0 END) AS conexionesExitosas,
        SUM(CASE WHEN estado = 'fallido' THEN 1 ELSE 0 END) AS conexionesFallidas,
        MAX(dispositivo) AS dispositivoMasUsado,
        AVG(duracion) / 60 AS promedioDuracion,
        (SELECT nombre FROM db2.tabla3 WHERE id = c.id_usuario_mas_activo) AS usuarioMasActivo,
        c.id_usuario_mas_activo
    FROM 
        db1.tabla4 c
    WHERE 
        fecha_hora >= DATE_SUB(CURDATE(), INTERVAL ? DAY)
    GROUP BY 
        DATE(fecha_hora), c.id_usuario_mas_activo
    ORDER BY 
        fecha DESC;
`;

    const [results] = await this.pool.execute(query, [dias]);
    return results as DailyConnection[];
  }

  async getResumenConexiones(): Promise<{
    totalHoy: number;
    variacionAyer: number;
    dispositivoPopular: string;
  }> {
 const query = `
    SELECT 
        COUNT(*) AS totalHoy,
        (SELECT dispositivo 
         FROM db3.tabla5 
         WHERE DATE(fecha_hora) = CURDATE() 
         GROUP BY dispositivo 
         ORDER BY COUNT(*) DESC 
         LIMIT 1) AS dispositivoPopular,
        ((COUNT(*) - (SELECT COUNT(*) 
                     FROM db3.tabla5 
                     WHERE DATE(fecha_hora) = DATE_SUB(CURDATE(), INTERVAL 1 DAY))) / 
        (SELECT COUNT(*) 
         FROM db3.tabla5 
         WHERE DATE(fecha_hora) = DATE_SUB(CURDATE(), INTERVAL 1 DAY))) * 100 AS variacionAyer
    FROM 
        db3.tabla5
    WHERE 
        DATE(fecha_hora) = CURDATE();
`;

   const [results] = await this.pool.execute(query);
    return (results as {
      totalHoy: number;
      variacionAyer: number;
      dispositivoPopular: string;
    }[])[0];
  }
}