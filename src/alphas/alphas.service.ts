import { Injectable } from '@nestjs/common'
import { CreateAlphaDto } from './dto/create-alpha.dto'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class AlphasService {
  constructor(private prisma: PrismaService) {}
  async create(createAlphaDto: CreateAlphaDto) {
    return await this.prisma.alphase.create({
      data: {
        title: createAlphaDto.title,
        description: createAlphaDto.description,
      },
    })
  }
  async findAllTesters() {
    return await this.prisma.alphase.findMany()
  }
  async findOne(id: number) {
    return await this.prisma.alphase.findUnique({
      where: {
        id: Number(id),
      },
    })
  }
  async remove(id: number) {
    return await this.prisma.alphase.delete({
      where: {
        id: Number(id),
      },
    })
  }
  async updateTitle(id: number, title: string) {
    return await this.prisma.alphase.update({
      where: {
        id: Number(id),
      },
      data: {
        title,
      },
    })
  }
}
