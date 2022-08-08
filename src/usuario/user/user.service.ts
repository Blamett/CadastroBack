import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity, UserDocument } from './schemas/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectModel(UserEntity.name) private UserModel: Model<UserDocument>) {}

  async create(CreateUserDto: CreateUserDto): Promise<UserEntity> {
    const createdUser = new this.UserModel(CreateUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<UserEntity[]> {
    return this.UserModel.find().exec();
  }

}
