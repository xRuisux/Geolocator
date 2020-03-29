import { Repository, EntityRepository } from "typeorm";
import { User } from "./user.entity";
import { AuthCredencialsDto } from "./dto/auth-credencials.dto";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import * as bcrypt from "bcrypt";

@EntityRepository(User)
export class UserRepository extends Repository<User> {
    async signUp(authCredencialsDto: AuthCredencialsDto): Promise<void> {
        const { email, username, password } = authCredencialsDto;
        const user = new User();

        user.email = email;
        user.username = username;
        user.salt = await bcrypt.genSalt()
        user.password = await this.hashPassword(password, user.salt);

        try {
            await user.save();
        } catch (error) {
            if (error.code === '23505') { 
                throw new ConflictException('Email already exists')
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    async validadeUserPassword(authCredencialsDto: AuthCredencialsDto): Promise<string> {
        const { email, password } = authCredencialsDto;
        const user = await this.findOne({ email });

        if (!user) {
            return null;
        }
        
        const passwordValid = await user.validatePassword(password);

        if (user && passwordValid) {
            return user.email
        } else {
            return null;
        }
    }

    private async hashPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);
    }
}