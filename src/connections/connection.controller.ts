import { Controller, Get, Query } from '@nestjs/common';
import { ConexionesService } from './connections.service';

@Controller('conexiones')
export class ConexionesController {
  constructor(private readonly conexionesService: ConexionesService) {}

  @Get('diarias')
  async getConexionesDiarias(@Query('dias') dias: number = 7) {
    return this.conexionesService.getConexionesDiarias(dias);
  }

  @Get('resumen')
  async getResumenConexiones() {
    return this.conexionesService.getResumenConexiones();
  }
}