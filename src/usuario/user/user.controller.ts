import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    create(@Body() createUserDto: CreateUserDto) {

        const dn = createUserDto.dataDeNascimento;
        this.userService.create(createUserDto);
        const dataNascimento = new Date(dn);
        const dataHoje = new Date();

        return {
            'aniversario': dataHoje.getDate() == dataNascimento.getDate() && dataHoje.getMonth() == dataNascimento.getMonth()
        };

    }

    @Get()
    findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    findbyId(@Param('id') id: string) {
        return this.userService.findbyId(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() CreateUserDto: CreateUserDto) {
        this.userService.update(id, CreateUserDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        this.userService.delete(id);
    }
}
