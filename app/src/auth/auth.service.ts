import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredencialsDto } from './dto/auth-credencials.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtService: JwtService
    ) {}

    async signUp(authCredencialsDto: AuthCredencialsDto): Promise<void> {
        return this.userRepository.signUp(authCredencialsDto);
    }

    async signIn(authCredencialsDto: AuthCredencialsDto): Promise<{ accessToken: string }> {
        const email = await this.userRepository.validadeUserPassword(authCredencialsDto);
        
        if (!email) {
            throw new UnauthorizedException('Invalid Credentials');
        }

        const payload: JwtPayload = { email };
        const accessToken = await this.jwtService.sign(payload);

        return { accessToken };
    }
}
