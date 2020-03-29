import { Controller, Get, Post, Body, Param, Delete, Put, Res, UsePipes, ValidationPipe } from '@nestjs/common';
// import { UsersService } from './users.service';
// import { User } from './user.model';
import { CreateUserDTO } from './dtos/create-user.dto';
import { UpdateUserDTO } from './dtos/update-user.dto';

// @Controller('users')
// export class UsersController {
//     constructor(private usersService: UsersService) {}

//     @Get()
//     getUsers(@Res() res): User[] {
//         const users = this.usersService.getUsers();

//         return res.json(users);
//     }

//     @Get('/:email')
//     getUser(@Res() res, @Param('email') email: string): User {
//         const user = this.usersService.getUser(email);

//         return res.json(user);
//     }

//     @Post()
//     @UsePipes(ValidationPipe)
//     createUser(@Res() res, @Body() createUserDto: CreateUserDTO): User {
//         const user = this.usersService.createUser(createUserDto);   

//         return  res.json({
//             message: 'User has been successfully created!',
//             data: user,
//         });

//     }

//     @Put()
//     updateUser(@Res() res, @Body() updateUserDto: UpdateUserDTO) {
//         const updatedUser = this.usersService.updateUser(updateUserDto);

//         return res.json({
//             message: 'User has been successfully updated!',
//             data: updatedUser,
//         });
//     }

//     // @Delete()
//     // deleteUser(@Res() res, @Param('email') email: string): void {
//     //     this.usersService.deleteUser(email);
//     // }
// }
