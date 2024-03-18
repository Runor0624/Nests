import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AlphasService } from './alphas.service';
import { CreateAlphaDto } from './dto/create-alpha.dto';
import { UpdateAlphaDto } from './dto/update-alpha.dto';

@Controller('alphas')
export class AlphasController {
  constructor(private readonly alphasService: AlphasService) {}

  @Post()
  create(@Body() createAlphaDto: CreateAlphaDto) {
    return this.alphasService.create(createAlphaDto);
  }

  @Get()
  findAll() {
    return this.alphasService.findAll();
  }

  @Get('testers')
  findAllTesters() {
    return this.alphasService.findAllTesters();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alphasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlphaDto: UpdateAlphaDto) {
    return this.alphasService.update(+id, updateAlphaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alphasService.remove(+id);
  }
}
