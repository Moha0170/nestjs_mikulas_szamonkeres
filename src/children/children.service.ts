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
    return this.prisma.children.create({
      data: createChildDto,
    })
  }

  findAll() {
    return this.prisma.children.findMany({});
  }

  findOne(id: number) {
    return this.prisma.children.findMany({
      where: {id: id},
      include: {
        giftList:{
          select: {
            toys:{
              select:{
                name: true
              }
            }
          }
        }
      }
    });
  }

  update(id: number, updateChildDto: UpdateChildDto) {
    return this.prisma.children.update({
      where: {id},
      data: updateChildDto
    });
  }

  remove(id: number) {
    return this.prisma.children.delete({
      where: {id: id}
    });
  }

  put(id: number, toyId: number) {
    return this.prisma.giftList.create({
      data: {childrenId: id, toyId: toyId}
    })
  }

  removeGiftList(id: number, toyId: number) {
    return this.prisma.giftList.deleteMany({
      where: {childrenId: id, toyId: toyId}
    });
  }
}
