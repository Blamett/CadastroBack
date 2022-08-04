import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserEntity, UserSchema } from './schemas/user.entity';

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
  imports:[MongooseModule .forFeature([{ name: UserEntity.name, schema: UserSchema }])]
})
export class UserModule {}
