import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common'
import { AlphasService } from './alphas.service'
import { CreateAlphaDto } from './dto/create-alpha.dto'

@Controller('alphas')
export class AlphasController {
  constructor(private readonly alphasService: AlphasService) {}

  @Post()
  create(@Body() createAlphaDto: CreateAlphaDto) {
    return this.alphasService.create(createAlphaDto)
  }

  @Get('testers')
  findAllTesters() {
    return this.alphasService.findAllTesters()
  }
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.alphasService.findOne(id)
  }
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.alphasService.remove(id)
  }
  @Patch(':id')
  async updateTitle(@Param('id') id: number, @Body('title') title: string) {
    await this.alphasService.updateTitle(id, title)
    return { success: true }
  }
}
