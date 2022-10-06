import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostEntity } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(@InjectRepository(PostEntity) private repository: Repository<PostEntity>) {}

  create(dto: CreatePostDto) {
    return this.repository.save(dto);
  }

  findAll() {
    return this.repository.find({
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async popular() {
    const queryBuilder = this.repository.createQueryBuilder('p');
    queryBuilder.orderBy('views', 'DESC');
    queryBuilder.limit(10);

    const [items, total] = await queryBuilder.getManyAndCount();

    return {
      items,
      total,
    };
  }

  async findOne(id: any) {
    const find = await this.repository.findOne(id);
    if (!find) {
      throw new NotFoundException('Статья не найдена!');
    }
    return find;
  }

  async update(id: any, dto: UpdatePostDto) {
    const find = await this.repository.findOne(id);
    if (!find) {
      throw new NotFoundException('Статья не найдена!');
    }
    return this.repository.update(id, dto);
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
