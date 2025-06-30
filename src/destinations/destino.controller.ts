import { Controller, Get, Param } from '@nestjs/common';
import { DestinosService } from './destino.service';

@Controller('destinos')
export class DestinosController {
  constructor(private readonly destinosService: DestinosService) {}

  @Get('frecuentes/:usuarioId')
  async getDestinosFrecuentes(@Param('usuarioId') usuarioId: number) {
    return this.destinosService.getDestinosFrecuentesPorUsuario(usuarioId);
  }
}