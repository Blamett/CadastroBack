import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UserDocument, UserEntity } from './schemas/user.entity';

@Injectable()
export class UserService {
    constructor(@InjectModel(UserEntity.name) private UserModel: Model<UserDocument>) { }

    async create(createUserDto: CreateUserDto): Promise<UserEntity> {

        // const createReqBody = plainToInstance(CreateUserDto, createUserDto);

        // await validate(createReqBody);

        const createdUser = new this.UserModel(createUserDto);
        return createdUser.save();
    }

    async update(id: string, CreateUserDto: CreateUserDto): Promise<UserEntity> {
        return this.UserModel.findByIdAndUpdate(id, CreateUserDto);
    }

    async findAll(): Promise<UserEntity[]> {
        return this.UserModel.find().exec();
    }

    async findbyId(id: string): Promise<UserEntity[]> {
        return this.UserModel.findById(id);
    }

    async delete(id: string) {
        return this.UserModel.findByIdAndDelete(id);
    }
}
