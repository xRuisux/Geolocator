// import { Injectable, NotFoundException } from '@nestjs/common';
// import { User } from './user.model';
// import * as uuid from 'uuid/v1';
// import { CreateUserDTO } from './dtos/create-user.dto';
// import { UpdateUserDTO } from './dtos/update-user.dto';

// @Injectable()
// export class UsersService {
//     constructor(
//         @InjectModel(User) private user: typeof User,
//         private sequelize: Sequelize,
//         ) {}

//     getUsers(): Promise<User[]> {        
//         return this.user.findAll();
//     }

//     getUser(email: string): Promise<User> {       
//         const user = this.user.findOne({
//             where: {
//               email,
//             },
//           });
        
//         if (!user) {
//             throw new NotFoundException(`User with Email ${email} not found`);
//         }

//         return user;
//     }

//     createUser(createUserDto: CreateUserDTO): User {
//         const { name, email, password } = createUserDto;
//         const user: User = {
//             id: uuid(),
//             name,
//             email,
//             password,
//         };

//         this.users.push(user);
//         return user;
//     }

//     updateUser(updateUserDto: UpdateUserDTO) : User {
//         const user = this.getUser(updateUserDto.email);
        
//         user.name = updateUserDto.name;
//         user.password = updateUserDto.password;
        
//         return user;
//     }

//     // deleteUser(email: string) {
//     //     const user = await this.findOne(email);
//     //     user= this.users.filter(user => user.email !== user.email);
//     // }
// }
