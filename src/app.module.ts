import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import 'reflect-metadata';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './usuario/user/user.module';

@Module({
    imports: [MongooseModule.forRoot('mongodb://localhost/usuarios'),
        UserModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
