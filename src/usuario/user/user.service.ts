import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity, UserDocument } from './schemas/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(UserEntity.name) private catModel: Model<UserDocument>) {}

  async create(CreateUserDto: CreateUserDto): Promise<UserEntity> {
    const createdCat = new this.catModel(CreateUserDto);
    return createdCat.save();
  }

  async findAll(): Promise<UserEntity[]> {
    return this.catModel.find().exec();
  }

}
