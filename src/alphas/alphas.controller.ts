import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
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
  async findOne(@Param('id', ParseIntPipe) id: number) {
    //ParseIntPipe로 인해 문자 등 숫자 이외 타입이 들어오면 에러로 간주함
    return await this.alphasService.findOne(id)
  }
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return await this.alphasService.remove(id)
  }
  @Patch(':id')
  async updateTitle(
    @Param('id', ParseIntPipe) id: number,
    @Body('title') title: string,
  ) {
    await this.alphasService.updateTitle(id, title)
    return { success: true }
  }
}
