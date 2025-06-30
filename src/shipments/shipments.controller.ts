import { Controller, Get, Param, Query } from '@nestjs/common';
import { EnviosService } from './shipments.service';

@Controller('envios')
export class EnviosController {
  constructor(private readonly enviosService: EnviosService) {}

  @Get('api/usuario/:idUsuario')
  async getEnviosApiPorUsuario(@Param('idUsuario') idUsuario: number) {
    return this.enviosService.getEnviosApiPorUsuario(idUsuario);
  }

  @Get('api/resumen/:idUsuario')
  async getResumenEnviosApi(@Param('idUsuario') idUsuario: number) {
    return this.enviosService.getResumenEnviosApi(idUsuario);
  }
}