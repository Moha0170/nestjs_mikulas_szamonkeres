import { Injectable } from '@nestjs/common';
import { CreateToyDto } from './dto/create-toy.dto';
import { UpdateToyDto } from './dto/update-toy.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ToysService {

  constructor(
    private  readonly prisma: PrismaService
  ) {}

  create(createToyDto: CreateToyDto) {
    return this.prisma.jatek.create({
      data: createToyDto
    });
  }

  findAll() {
    return this.prisma.jatek.findMany({});
  }

  findOne(id: number) {
    return this.prisma.jatek.findMany({
      where: {id: id}
    });

  }

  update(id: number, updateToyDto: UpdateToyDto) {
    return this.prisma.jatek.update({
      where: {id},
      data: updateToyDto
    });
  }

  remove(id: number) {
    return this.prisma.jatek.delete({
      where: {id: id}
    });
  }
}
