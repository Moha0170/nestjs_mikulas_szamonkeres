import { Injectable } from '@nestjs/common';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ChildrenService {

  constructor(
    private  readonly prisma: PrismaService
  ) {}

  create(createChildDto: CreateChildDto) {
    data: createChildDto;
  }

  findAll() {
    return this.prisma.children.findMany({});
  }

  findOne(id: number) {
    return this.prisma.children.findMany({
      where: {id: id}
    });
  }

  update(id: number, updateChildDto: UpdateChildDto) {
    return `This action updates a #${id} child`;
  }

  remove(id: number) {
    return this.prisma.children.delete({
      where: {id: id}
    });
  }
}
