import { Controller, Get, Param } from '@nestjs/common';
import { AlianzasService } from './alliance.service';

@Controller('alianzas')
export class AlianzasController {
  constructor(private readonly alianzasService: AlianzasService) {}

  @Get('webapi')
  async getAlianzasConWebAPI() {
    return this.alianzasService.getAlianzasConWebAPI();
  }

  @Get('webapi/:id')
  async getAlianzaWebAPIPorId(@Param('id') id: number) {
    return this.alianzasService.getAlianzaWebAPIPorId(id);
  }
}