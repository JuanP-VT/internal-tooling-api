import { Inject, Injectable } from '@nestjs/common';
import { MYSQL_CONNECTION } from '../database/database.module';
import { Pool } from 'mysql2/promise';
import { AlianzaWebAPI } from './alliance.interface';

@Injectable()
export class AlianzasService {
  constructor(@Inject(MYSQL_CONNECTION) private readonly pool: Pool) {}

  async getAlianzasConWebAPI(): Promise<AlianzaWebAPI[]> {
 const query = `
    SELECT 
        a.id,
        a.nombre,
        a.descripcion,
        a.logo_url AS logoUrl,
        a.fecha_inicio AS fechaInicio,
        a.fecha_renovacion AS fechaRenovacion,
        i.endpoint_base AS endpointBase,
        i.metodos_disponibles AS metodosDisponibles,
        i.autenticacion_tipo AS autenticacionTipo,
        i.documentacion_url AS documentacionUrl,
        a.estado
    FROM 
        db1.tabla1 a
    JOIN 
        db1.tabla2 i ON a.id = i.id_alianza
    WHERE 
        a.activo = 1
        AND i.activo = 1
    ORDER BY 
        a.nombre ASC;
`;

    const [results] = await this.pool.execute(query);

    // Parsear el JSON de métodos disponibles
    return (results as AlianzaWebAPI[]).map((alianza) => ({
      ...alianza,
    }));
  }

  async getAlianzaWebAPIPorId(id: number): Promise<AlianzaWebAPI[]> {
  const query = `
    SELECT 
        a.id,
        a.nombre,
        a.descripcion,
        a.logo_url AS logoUrl,
        a.fecha_inicio AS fechaInicio,
        a.fecha_renovacion AS fechaRenovacion,
        i.endpoint_base AS endpointBase,
        i.metodos_disponibles AS metodosDisponibles,
        i.autenticacion_tipo AS autenticacionTipo,
        i.documentacion_url AS documentacionUrl,
        a.estado
    FROM 
        db1.tabla1 a
    JOIN 
        db2.tabla2 i ON a.id = i.id_tabla1
    WHERE 
        a.id = ?
        AND a.activo = 1
        AND i.activo = 1;
`;

    const [results] = await this.pool.execute(query, [id]);
    return results as AlianzaWebAPI[];
  }
}
