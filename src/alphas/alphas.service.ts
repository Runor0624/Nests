import { Injectable } from '@nestjs/common';
import { CreateAlphaDto } from './dto/create-alpha.dto';
import { UpdateAlphaDto } from './dto/update-alpha.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AlphasService {
  constructor(private prisma: PrismaService) {}

  create(createAlphaDto: CreateAlphaDto) {
    return 'This action adds a new alpha';
  }

  findAll() {
    return `This action returns all alphas`;
  }

  async findAllTesters() {
    return await this.prisma.alphase.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} alpha`;
  }

  update(id: number, updateAlphaDto: UpdateAlphaDto) {
    return `This action updates a #${id} alpha`;
  }

  remove(id: number) {
    return `This action removes a #${id} alpha`;
  }
}
